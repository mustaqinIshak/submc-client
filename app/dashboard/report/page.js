'use client'

import React, { useState, useEffect } from 'react';
import handleChangeRupiah from "../../../helpers/handleChangRupiah.js"
import { FaRegTrashCan, FaRegPenToSquare } from "react-icons/fa6";
import { searchReport, page, downloadReport } from '../../api/report.js'; 
import TitlePage from '@/components/titlePage';
import {ButtonPrimary} from "@/components/buttonPrimary"
import {Select2Brand} from '../../../components/select2Brand'
import SelectMetodePembayaranReport from '@/components/selectMetodePembayaranReport.js'
import {SelectRow} from "@/components/selectRow"; 
import Pagination from "../../../components/pagination.js"
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import SpinnerLoading from '@/components/spinner'
import { useRouter } from "next/navigation"
import { writeFile, utils } from 'xlsx';
import { saveAs } from 'file-saver';

const Report = () => {
    const router = useRouter();
    const MySwal = withReactContent(Swal)
    const [tanggalAwal, setTanggalAwal] = useState("")
    const [tanggalAkhir, setTanggalAkhir] = useState("")
    const [brand, setBrand] = useState({value:{id: 0, name: "All"}, label:"All"});
    const [jenisMetode, setJenisMetode] = useState({value:0, label:"All"});
    const [data, setData] = useState([])
    const [limit, setLimit] = useState(10)
    const [totalData, setTotalData] = useState(0)
    const [pageNumber, setPageNumber] = useState(1);
    const [firstPage, setFirstPage] = useState(1)
    const [lastPage, setLastPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [reload, setReload] = useState(false)
    
    const handleJenisPembayaran = (metode) => {
        setJenisMetode(metode)
    }

    const exportToExcel = async () => {
        // Contoh data untuk laporan
        
        try {
            const payload = {
                limit,
                "tanggalAwal": tanggalAwal,
                "tanggalAkhir": tanggalAkhir,
                "idBrand": brand.value.id,
                "idMetodePembayaran": jenisMetode.value,
                "typeFile" : "excel"
            }
            const result = await downloadReport(payload);
            // console.log("ini di report", result)
            const data = result
            
              // Buat worksheet dari data
              const worksheet = utils.json_to_sheet(data);
          
              // Buat workbook dan tambahkan worksheet ke dalamnya
              const workbook = utils.book_new();
              utils.book_append_sheet(workbook, worksheet, brand.label + ' ' + jenisMetode.label, `${tanggalAwal} - ${tanggalAkhir}`);
          
              // Simpan workbook sebagai file .xlsx
              const excelBuffer = writeFile(workbook, `${brand.label}-${jenisMetode.label} ${tanggalAwal} - ${tanggalAkhir}.xlsx`, { type: 'binary' });
          
              // Menggunakan file-saver untuk menyimpan file di browser
            //   saveAs(new Blob([excelBuffer], { type: 'application/octet-stream' }), 'Laporan.xlsx');
        } catch (error) {
            setLoading(false)
            MySwal.fire({
                icon: "error",
                title: "Gagal mengambil data report excel",
            });
        }
        
      };

    const getReports = async (event) => {
        event.preventDefault()
        try {
            setLoading(true)
            const payload = {
                limit,
                "tanggalAwal": tanggalAwal,
                "tanggalAkhir": tanggalAkhir,
                "idBrand": brand.value.id,
                "idMetodePembayaran": jenisMetode.value
            }
            const result = await searchReport(payload)
            console.log(result.last_page)
            
            setData([...result.data])
            setTotalData(result.total)
            setFirstPage(result.from)
            setLastPage(result.last_page)
            
            setLoading(false)
        } catch (error) {
            setLoading(false)
            MySwal.fire({
                icon: "error",
                title: "Gagal mengambil data report",
            });
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
                    "tanggalAwal": tanggalAwal,
                    "tanggalAkhir": tanggalAkhir,
                    "idBrand": brand.value.id,
                    "idMetodePembayaran": jenisMetode.value,
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
                    title: "Gagal mengambil data report",
                });
            }
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
                    "tanggalAwal": tanggalAwal,
                    "tanggalAkhir": tanggalAkhir,
                    "idBrand": brand.value.id,
                    "idMetodePembayaran": jenisMetode.value,
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
                    title: "Gagal mengambil data report",
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
                "tanggalAwal": tanggalAwal,
                "tanggalAkhir": tanggalAkhir,
                "idBrand": brand.value.id,
                "idMetodePembayaran": jenisMetode.value,
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
                title: "Gagal mengambil data report",
            });
        }
        
    }
    
    return(
        <div>
            <TitlePage title="Report" />
            <form onSubmit={getReports} className='flex flex-row gap-3 h-full w-full rounded-md border-2 border-slate-300 p-5 mb-6'>
                <div className='flex flex-row gap-3'>
                    <div className='relative max-w-sm col-span-2' >
                        <label htmlFor="tanggal-expiration-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dari:</label>
                        <input 
                            // id="tanggal" 
                            type="date" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12/23"      
                            value={tanggalAwal}
                            onChange={(e) => {setTanggalAwal(e.target.value)}}  
                            required 
                        />
                    </div>
                    <div className='h-[100px] grid place-content-center'>
                        <span className=''>s/d</span>
                    </div>
                    <div className='relative max-w-sm col-span-2' >
                        <label htmlFor="tanggal-expiration-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sampai:</label>
                        <input 
                            // id="tanggal" 
                            type="date" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12/23"      
                            value={tanggalAkhir}
                            onChange={(e) => {setTanggalAkhir(e.target.value)}}  
                            required 
                        />
                    </div>
                </div>
                <div className='w-72'>
                    <Select2Brand value={brand} setValue={setBrand} />
                </div>
                <div className='w-64'>
                    <label htmlFor="metode pembayaran" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Metode Pembayaran: </label>
                    <SelectMetodePembayaranReport onMetodeSelect={handleJenisPembayaran} />
                    {/* <p className={`${errorMetode ? "mt-2 text-sm text-red-600 dark:text-red-500" : "hidden"}`}><span className="font-medium">Maaf!</span> anda harus memilih metode pembayaran terlebih dahulu</p> */}
                </div>
                <div className="">
                    <label htmlFor="metode pembayaran" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Limit: </label>
                    <SelectRow value={limit} setValue={setLimit}  />
                </div>
                <ButtonPrimary name="cari" width="w-64 self-center" type={"submit"}/>
                
            </form>
            { loading ?
                <div className="w-full flex items-center justify-center">
                    <SpinnerLoading />
                </div> 
                :
                <div>
                    <button className="
                        focus:outline-none 
                        text-white 
                        bg-green-700 
                        hover:bg-green-800 
                        focus:ring-4 
                        focus:ring-green-300 
                        font-medium 
                        rounded-lg 
                        text-sm 
                        px-5 
                        py-2.5 
                        me-2 
                        mb-5 
                        dark:bg-green-600 
                        dark:hover:bg-green-700 
                        dark:focus:ring-green-800
                        
                        " 
                        onClick={exportToExcel}>
                        Export ke Excel
                    </button>
                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">
                                    Kode Transaksi
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Barcode
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Tanggal
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Name
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Size
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Kategori
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Sub Kategori
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Harga
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Jumlah
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Diskon
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Total
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Sisa Stok
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Metode Pembayaran
                                </th>
                                {/* <th scope="col" className="px-6 py-3">
                                    Aksi
                                </th> */}
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data && data.map((item, index) =>
                                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.kode}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.barcode}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.tanggal}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.name}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.size}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.kategori}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.subKategori}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.harga ? handleChangeRupiah(item.harga) : "0"}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {item.jumlahBarang}
                                        </th>
                                        <td className="px-6 py-4">
                                            {item.diskon}%
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.total ? handleChangeRupiah(item.total) : "0"}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.sisaStok}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.metodePembayaran}
                                        </td>
                                        <td className="px-6 py-4">
                                            {item.note}
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
    )
}

export default Report;