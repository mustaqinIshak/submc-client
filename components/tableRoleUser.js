'use client'

import { useState, useEffect } from "react";
import { FaRegTrashCan, FaRegPenToSquare } from "react-icons/fa6";
import { get, getSelected, edit, page} from "@/app/api/roleUser";
import {SelectRow} from "@/components/selectRow"; 
import SearchForm from "@/components/searchForm"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import SpinnerLoading from "./spinner";
import Pagination from "@/components/pagination"
import { useRouter } from "next/navigation"

export default function TableRoleUser({aksesEdit = 0, aksesDelete = 0}) {
    const router = useRouter();
    const MySwal = withReactContent(Swal)
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading,setLoading] = useState(false)
    const [limit, setLimit] = useState(10)
    const [totalData, setTotalData] = useState(0)
    const [firstPage, setFirstPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)
    const [reload, setReload] = useState(false)
    const [searchData, setSearchData] = useState('');

    const handleEdit = (id) => {
        router.replace(`/dashboard/roleUser/edit/${id}`)
    }

    const handleGetRoleUser = async () => {
        try {
            setLoading(true)
            const payload = {
                limit
            }
            const result = await get(payload)
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
            const result = await get(payload)
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
                    title: "Gagal mengambil data role user",
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
                    title: "Gagal mengambil data role user",
                });
            }
        }
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
                title: "Gagal mengambil data role user",
            });
        }
        
    }

    useEffect(() => {
        handleGetRoleUser()
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
                                    Menu
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
                                        <td className="px-6 py-4">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.menu}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-3">
                                                {
                                                    aksesEdit === 1 &&
                                                    <FaRegPenToSquare className="text-yellow-500 text-xl" onClick={() => handleEdit(item.id)} />
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