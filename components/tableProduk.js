'use client'

import handleChangeRupiah from "../helpers/handleChangRupiah"
import { useState, useEffect } from "react";
import { FaRegTrashCan, FaRegPenToSquare } from "react-icons/fa6";
import SearchForm from "@/components/searchForm"
import { getAllProduk, search, page, deleteProduk } from "@/app/api/produk";
import {SelectRow} from "@/components/selectRow"; 
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import SpinnerLoading from "./spinner";
import Pagination from "@/components/pagination"
import { useRouter } from "next/navigation"

export default function TableProduk({aksesEdit = 0}) {
    const router = useRouter();
    const MySwal = withReactContent(Swal)
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [searchData, setSearchData] = useState('');
    const [loading,setLoading] = useState(false)
    const [limit, setLimit] = useState(10)
    const [totalData, setTotalData] = useState(0)
    const [firstPage, setFirstPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)
    const [reload, setReload] = useState(false)

    const handleDetail = (id) => {
        router.replace(`/dashboard/produk/detail/${id}`)
    }

    const getProduks = async () => {
        try {
            setLoading(true)
            const payload = {
                limit
            }
            const result = await getAllProduk(payload)
            console.log(result)
            if(result.data.length) {
                setData([...result.data])
                setTotalData(result.total)
                setFirstPage(result.from)
                setLastPage(result.last_page)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            MySwal.fire({
                icon: "error",
                title: "Gagal mengambil data user",
            });
        }
    }

    const handleSearch = async () => {
        try {
            setLoading(true)
            const payload = {
                limit,
                search: searchData
            }
            const result = await search(payload)
            if(result.data.length) {
                setData([...result.data])
                setTotalData(result.total)
                setFirstPage(result.from)
                setLastPage(result.last_page)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            MySwal.fire({
                icon: "error",
                title: "Gagal mengambil data user",
            });
        }
    }

    const previousHandle = async () => {
        if(pageNumber !== firstPage) {
            try {
                setLoading(true)
                let number = pageNumber - 1
                setPageNumber(number)
                const payload = {
                    limit,
                    search: searchData,
                    number
                }
                const result = await page(payload)
                if(result.data.length) {
                    setData([...result.data])
                    setTotalData(result.total)
                    setLastPage(result.last_page)
                }
                setLoading(false)
            } catch (error) {
                setLoading(false)
                MySwal.fire({
                    icon: "error",
                    title: "Gagal mengambil data produk",
                });
            }
        }
    }

    const nextHandle = async () => {
        if(pageNumber !== lastPage) {
            try {
                setLoading(true)
                let number = pageNumber + 1
                setPageNumber(number)
                const payload = {
                    limit,
                    search: searchData,
                    number
                }
                const result = await page(payload)
                if(result.data.length) {
                    setData([...result.data])
                    setTotalData(result.total)
                    setLastPage(result.last_page)
                }
                setLoading(false)
            } catch (error) {
                setLoading(false)
                MySwal.fire({
                    icon: "error",
                    title: "Gagal mengambil data produk",
                });
            }
        }
    }

    const trueIcon = (status) => {
        return(
            <>
                {
                    status == 1 ?
                    <svg className="w-3 h-3 text-green-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    :
                    <svg className="w-3 h-3 text-red-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                }
            </>
        )
    }

    const pageHandle = async (id) => {
        try {
            setLoading(true)
            setPageNumber(id)
            const payload = {
                limit,
                search: searchData,
                number: id
            }
            const result = await page(payload)
            if(result.data.length) {
                setData([...result.data])
                setTotalData(result.total)
                setLastPage(result.last_page)
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            MySwal.fire({
                icon: "error",
                title: "Gagal mengambil data produk",
            });
        }
        
    }

    useEffect(() => {
        getProduks()
    },[limit, reload])
 return (
    <>   
        <div className="w-full overflow-x-auto">
            {
                loading ?
                <div className="w-full flex items-center justify-center">
                    <SpinnerLoading />
                </div> 
                :
                <div>
                    <div className="flex flex-col gap-6 lg:flex lg:flex-row  lg:justify-between mb-6">
                        <SelectRow value={limit} setValue={setLimit} id={"limit"} />
                        <SearchForm value={searchData} setValue={setSearchData} action={handleSearch} />
                    </div>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Harga
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kategori
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Sub Kategori
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Size
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Diskon
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Status Produk
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Aksi
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((item, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.name}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.harga ? handleChangeRupiah(item.harga) : "0"}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.kategori}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.subKategori}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.size}
                                        </td>
                                        <td className="px-6 py-4">
                                            { trueIcon(item.diskon) }
                                        </td>
                                        <td className="px-6 py-4">
                                            { trueIcon(item.statusProduk) }
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-3">
                                                {
                                                    aksesEdit == 1 &&
                                                    <div className="flex flex-row gap-3">
                                                        <FaRegPenToSquare className="text-yellow-500 text-xl" onClick={() => handleDetail(item.id)} />
                                                        <span className="text-yellow-500 text-xl">Edit</span>
                                                    </div>
                                                }
                                                
                                            </div>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <Pagination 
                        first={firstPage} 
                        last={lastPage} 
                        pageNumber={pageNumber} 
                        pageHandle={pageHandle} 
                        previousHandle={previousHandle} 
                        nextHandle={nextHandle}
                    />
                </div>
            }
        </div>
    </>
 )
}