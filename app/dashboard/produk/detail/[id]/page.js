"use client"

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {getSelectedProduk} from "@/app/api/produk"
import aksesMenu from "@/app/api/aksesMenu"
import FormDetailProduk from "@/components/formDetailProduk"
import FormEditProduk from "@/components/formEditProduk"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { ButtonPrimary } from "@/components/buttonPrimary";
import SpinnerLoading from "@/components/spinner";

export default function DetailProduk({params}) {
    const router = useRouter();
    const MySwal = withReactContent(Swal)
    const [aksesMenuData, setAksesMenuData] = useState({});
    const [changeForm, setChangeForm] = useState(false);

    const [name, setName] = useState("");
    const [barcode, setBarcode] = useState("");
    const [idProduk, setIdProduk] = useState("")
    const [harga, setHarga] = useState("");
    const [brand, setBrand] = useState({value:{id: 0, name: "Silahkan Memilih Bategori"}, label:"Silahkan Memilih Brand"})
    const [kategori, setKategori] = useState({value:{id: 0, name: "silahkan Memilih Kategori"}, label:"Silahkan Memilih Kategori"})
    const [subCategori, setSubCategori] = useState({value:{id: 0, name: "silahkan Memilih Sub Kategori"}, label:"silahkan Memilih Sub Kategori"});
    const [warna, setWarna] = useState("");
    const [deskirpsi, setDeskripsi] = useState("");
    const [type, setType] = useState("");
    const [jenisBahan, setJenisBahan] = useState("");
    const [linkShoope, setLinkShoope] = useState("");
    const [gambar, setGambar] = useState([])
    const [images, setImages] = useState([]);
    const [sale, setSale] = useState(0)
    const [startSale, setStartSale] = useState(null)
    const [endSale, setEndSale] = useState(null)
    const [status, setStatus] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false)
    const [objProdukEdit, setObjProdukEdit] = useState({})
    const [dataNotFound, setDataNotFound] = useState("")
    const getAksesMenu = async () => {
        try {
            setLoadingPage(true)
            setDataNotFound("")
            const menu = JSON.parse(localStorage.getItem('menu'));
            const findIdMenu = menu.find(item => item.name === "Produk");
            const find = await aksesMenu.getSelectedAksesMenu(findIdMenu.id);
            
            if(find) {
                setAksesMenuData({...find});
                const getProduk = await getSelectedProduk(params.id)
                if(getProduk) {
                    setObjProdukEdit(getProduk)
                    setIdProduk(getProduk.id)
                    setName(getProduk.name)
                    setBarcode(getProduk.barcode)
                    setHarga(getProduk.harga)
                    setBrand({value:{id: getProduk.id_brand, name: getProduk.brandName}, label:getProduk.brandName})
                    setKategori({value:{id: getProduk.id_categori, name: getProduk.categoriName}, label:getProduk.categoriName})
                    setSubCategori({value:{id: getProduk.id_sub_categori, name: getProduk.subKategoriName}, label:getProduk.subKategoriName})
                    setDeskripsi(getProduk.deskripsi)
                    setWarna(getProduk.color)
                    setType(getProduk.type)
                    setJenisBahan(getProduk.jenis_bahan)
                    setLinkShoope(getProduk.link_shoope)
                    setSale(getProduk.sale)
                    setStartSale(getProduk.start_sale)
                    setEndSale(getProduk.end_sale)
                    if(getProduk.status === 1) {
                        setStatus(true)
                    } else {
                        setStatus(false)
                    }
                    const previewImage = [...images]
                    if(getProduk.gambar.length) {
                        setGambar(getProduk.gambar)
                        getProduk.gambar.some(item => {
                            previewImage.push(item.path)
                        });
                    }
                    setImages(previewImage)
                }
            }
            setLoadingPage(false)
        } catch (error) {
            setLoadingPage(false)
            setDataNotFound(error)
            console.log(error);
        }
    }

    const handleChangeForm = () => {
        setChangeForm(true)
    }

    const handleKembali = () => {
        router.replace('/dashboard/produk')
    }
    useEffect(() => {
        getAksesMenu()
    },[])

    return(
        <div>
            {
                loadingPage ?
                <div className='w-full h-screen flex items-center justify-center'>
                    <SpinnerLoading />
                </div>
                :
                dataNotFound ? 
                <div className="fixed w-full max-h-full mt-10">
                    <div className="absolute top-1/5 left-1/4 w-full max-w-xl max-h-full">
                        <div className="flex flex-col w-full">
                            <img className="w-5/6" src="/404.png" />
                            <div className="w-full h-full ml-8 mt-10">
                                <span className="font-bold text-2xl">Maaf, {dataNotFound}</span>
                            </div>
                            <div className="ml-28 mt-9">
                                <ButtonPrimary name="Kembali" width="w-1/3" action={handleKembali} />
                            </div>
                        </div>
                    </div>
                </div>
                :
                !changeForm ? 
                <FormDetailProduk 
                    name={name}
                    barcode={barcode}
                    harga={harga}
                    categoriName={kategori.label}
                    subKategoriName={subCategori.label}
                    deskripsi={deskirpsi}
                    color= {warna}
                    type = {type}
                    jenis_bahan ={jenisBahan}
                    link_shoope ={linkShoope}
                    sale={sale}
                    start_sale={startSale}
                    end_sale={endSale}
                    status={status}
                    gambar={images}
                    handleChangeForm = {handleChangeForm}
                />
                :
                <FormEditProduk idProduk={params.id} getProduk={objProdukEdit} aksesMenuData={aksesMenuData}  />
            }
        </div>
    )
}