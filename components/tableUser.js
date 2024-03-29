'use client'

import { useState, useEffect } from "react";
import { FaRegTrashCan, FaRegPenToSquare } from "react-icons/fa6";
import SearchForm from "@/components/searchForm"
import { getAllUser, deleteUser, search, page } from "@/app/api/user";
import {SelectRow} from "@/components/selectRow"; 
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import SpinnerLoading from "./spinner";
import Pagination from "@/components/pagination"
import { useRouter } from "next/navigation"

export default function TableUser({aksesEdit = 0, aksesDelete = 0}) {
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

    const handleDelete = (id, username) => {
        MySwal.fire({
            title: `Apakah anda yakin ingin menghapus data ini dengan nama username "${id, username}" ?`,
            text: "Anda tidak bisa mengembalikan data ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteUser(id)
                .then(() => {
                  setReload(!reload)
                  MySwal.fire(
                      'Deleted!',
                      'Data berhasil di hapus',
                      'success'
                  )
              }, err => {
                  setReload(!reload)
                  MySwal.fire({
                      icon: "error",
                      title: "Gagal Menghapus user",
                  });
              })
            }
        }) 
    }

    const handleEdit = (id) => {
        router.replace(`/dashboard/user/edit/${id}`)
    }

    const getUsers = async () => {
        try {
            setLoading(true)
            const payload = {
                limit
            }
            const result = await getAllUser(payload)
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
                    title: "Gagal mengambil data user",
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
                    title: "Gagal mengambil data user",
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
                title: "Gagal mengambil data user",
            });
        }
        
    }

    useEffect(() => {
        getUsers()
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
                                    Username
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Role User
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
                                        <td className="px-6 py-4">
                                            {item.username}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.name_role}
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex gap-3">
                                                {
                                                    aksesEdit === 1 &&
                                                    <FaRegPenToSquare className="text-yellow-500 text-xl" onClick={() => handleEdit(item.id)} />
                                                }
                                                {
                                                    aksesDelete === 1 &&
                                                    <FaRegTrashCan className="text-red-500 text-xl" onClick={() => handleDelete(item.id, item.username)} />
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