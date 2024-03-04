'use client'

import { Carousel } from 'flowbite-react';
import SpinnerLoading from "@/components/spinner";
import LabelData from "@/components/labelData"
import { useEffect, useState } from 'react';
import {ButtonPrimary} from "@/components/buttonPrimary"
import handleChangeRupiah from '@/helpers/handleChangRupiah';
export default function FormDetailProduk({
    name="-",
    brand="-",
    barcode="-",
    harga="0",
    categoriName="-",
    subKategoriName="-",
    deskripsi="-",
    color= "-",
    type = "-",
    jenis_bahan ="-",
    link_shoope ="-",
    sale,
    start_sale,
    end_sale,
    status,
    gambar = [],
    jumlahSale,
    handleChangeForm,
}) {
    const [selectedPic, setSelectedPic] = useState({})
    const [indexDefault, setIndecDefault] = useState(0)

    const handlePicSelected = (index) => {
        const arrPic = [...gambar]
        const obj = arrPic[index]
        console.log(obj)
        setSelectedPic(obj)
    }

    useEffect(() => {
        const arrPic = [...gambar]
        const obj = arrPic[0]
        setSelectedPic(obj)
    },[gambar])
    return(
        <div className='flex flex-col flex-wrap md:flex-row md:gap-4 w-full '>
            {/* galery picture */}
            { gambar.length ? 
                <div className='md:w-1/2 flex flex-col items-center'>
                    <div id="default-carousel" className="h-96 w-80 p-4 bg-slate-300 rounded-lg" data-carousel="slide">
                        <img
                        alt=""
                        src={selectedPic}
                        />
                    </div>
                    <div className={`${gambar.length ? "p-4 bg-gray-400 rounded-lg my-6" : "hidden"}`}>
                        <ol className="flex flex-col justify-center md:flex-row">
                            {[...gambar].map((f, i) => (
                                <li  key={i} className="block p-1 h-full w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8">
                                    <img onClick={() => handlePicSelected(i)} alt="upload preview" src={f} className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />
                                </li>
                            ))}
                        </ol>
                    </div>
                </div>
                :
                null
            }
            {/* end galery picture */}
            {/* form detail */}
            <div className='flex flex-col max-w-md flex-wrap'>
                <LabelData title={"Nama"} value={name} />
                <LabelData title={"Brand"} value={brand} />
                <LabelData title={"Barcode"} value={barcode} />
                <LabelData title={"Harga"} value={handleChangeRupiah(harga)} />
                <LabelData title={"Kategori"} value={categoriName} />
                <LabelData title={"Sub Kategori"} value={subKategoriName} />
                <LabelData title={"Deskripsi"} value={deskripsi} />
                <LabelData title={"Warna"} value={color} />
                <LabelData title={"Tipe"} value={type} />
                <LabelData title={"Jenis Bahan"} value={jenis_bahan} />
                <LabelData title={"Link Shoope"} value={link_shoope} />
                <LabelData title={"Sale"} value={sale ? "Aktif" : "Tidak"} />
                <LabelData title={"Start Sale"} value={start_sale} />
                <LabelData title={"End Sale"} value={end_sale} />
                <LabelData title={"Total sale"} value={jumlahSale} />
                <LabelData title={"Status Barang"} value={status ? "Ya" : "Tidak"} />
                <div>
                    <ButtonPrimary type={"button"} name='Edit' action={handleChangeForm}  />
                </div>
            </div>
            {/* end form detail */}
        </div>

    )
}