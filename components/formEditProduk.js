'use client'

import { useEffect, useState } from "react"
import {create, editProduk} from "@/app/api/produk"
import {createGambarProduk ,deleteGambar} from "@/app/api/gambarProduk"
import handleChangeRupiah from "@/helpers/handleChangRupiah"
import {getSize} from "@/app/api/size"
import normalizeBayar from "@/helpers/normalizeBayar"
import { FieldText } from "@/components/fieldText"
import Togle from "@/components/togle"
import SizeFormEdit from "@/components/sizeFormEdit"
import FieldTanggal  from "@/components/fieldTanggal"
import { FieldTextArea } from "@/components/fieldTextArea"
import {FieldRupiah} from "@/components/fieldRupiah"
import {FieldNumber} from "../components/fieldNumber"
import {Select2Kategori} from "@/components/select2Kategori"
import {Select2SubKategori} from "@/components/select2SubKategori"
import { Select2Brand } from "./select2Brand"
import MultiplePicForm from "@/components/multiplePicForm";
import {ButtonPrimary} from "@/components/buttonPrimary"
import TitlePage from "@/components/titlePage";
import { useRouter } from "next/navigation"
import SpinnerLoading from "@/components/spinner";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import validator from 'validator';
import dateFormat from "dateformat"

export default function FormEditProduk({getProduk, aksesMenuData, idProduk}) {
    const router = useRouter();
    const MySwal = withReactContent(Swal)

    const [name, setName] = useState("");
    const [barcode, setBarcode] = useState("");
    const [harga, setHarga] = useState("");
    const [kategori, setKategori] = useState({value:{id: 0, name: "silahkan Memilih Kategori"}, label:"silahkan Memilih Kategori"})
    const [subCategori, setSubCategori] = useState({value:{id: 0, name: "silahkan Memilih Sub Kategori"}, label:"silahkan Memilih Sub Kategori"});
    const [brand, setBrand] = useState({value:{id: 0, name: "silahkan Memilih Brand"}, label:"silahkan Memilih Brand"});
    const [warna, setWarna] = useState("");
    const [deskirpsi, setDeskripsi] = useState("");
    const [type, setType] = useState("");
    const [jenisBahan, setJenisBahan] = useState("");
    const [linkShoope, setLinkShoope] = useState("");
    const [gambar, setGambar] = useState([])
    const [images, setImages] = useState([]);
    const [sale, setSale] = useState(0)
    const [startSale, setStartSale] = useState("")
    const [endSale, setEndSale] = useState("")
    const [status, setStatus] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false)
    const [sizes, setSizes] = useState([]);
    const [jumlahSale, setJumlahSale] = useState(0)

    const [fileLimit, setFileLimit] = useState(false);
    const [loadingButton, setLoadingButton] = useState(false);
    const [validName, setValidName] = useState(null)
    const [validHarga, setValidHarga] = useState(null)
    const [validKategori, setValidKategori] = useState(null)
    const [validSubKategori, setValidSubKategori] = useState(null)
    const [validBrand, setValidBrand] = useState(null)
    const [validSize, setValidSize] = useState(null)
    const [validGambar, setValidGambar] = useState(null)
    const [validSale, setValidSale] = useState(null)
    const [validJumlahSale, setValidJumlahSale] = useState(null)
    const [isErrorName, setIsErrorName] = useState(false)
    const [isErrorHarga, setIsErrorHarga] = useState(false)
    const [isErrorKategori, setIsErrorKategori] = useState(false)
    const [isErrorSubKategori, setIsErrorSubKategori] = useState(false)
    const [isErrorBrand, setIsErrorBrand] = useState(false)
    const [isErrorSize, setIsErrorSize] = useState(false)
    const [isErrorSale, setIsErrorSale] = useState(false)
    const [isErrorGambar, setIsErrorGambar] = useState(false)
    const [isErrorJumlahSale, setIsErrorJumlahSale] = useState(false)

    const [reloadGambar, setReloadGambar] = useState(false)
    const [reloadSize, setReloadSize] = useState(false)
    const [loadingGambar, setLoadingGambar] = useState(false)
    const [loadingSize, setLoaodingSize] = useState(false)
    

    useEffect(() => {
        if(getProduk) {
            let stringToNumberJumlahSale = parseInt(getProduk["jumlah_sale"]) 
            setName(getProduk.name)
            setBarcode(getProduk.barcode)
            setHarga(handleChangeRupiah(getProduk.harga))
            setKategori({value:{id: getProduk.id_categori, name: getProduk.categoriName}, label:getProduk.categoriName})
            setSubCategori({value:{id: getProduk.id_sub_categori, name: getProduk.subKategoriName}, label:getProduk.subKategoriName})
            setBrand({value:{id: getProduk.id_brand, name: getProduk.brabdName}, label:getProduk.brandName})
            setDeskripsi(getProduk.deskripsi)
            setWarna(getProduk.color)
            setType(getProduk.type)
            setJenisBahan(getProduk.jenis_bahan)
            setLinkShoope(getProduk.link_shoope)
            // setSale(getProduk.sale)
            if(getProduk.sale == 1) {
                setSale(true)
            } else {
                setSale(false)
            }
            setStartSale((getProduk["start_sale"] === "0000-00-00") ||  (getProduk["start_sale"] === "") ? "" : dateFormat(getProduk["start_sale"], "yyyy-mm-dd") )
            // setStartSale(getProduk.start_sale)
            setEndSale((getProduk["end_sale"] === "0000-00-00") || (getProduk["end_sale"] === "") ? "" : dateFormat(getProduk["end_sale"], "yyyy-mm-dd"))
            
            setJumlahSale(stringToNumberJumlahSale)
            if(getProduk.status == 1) {
                setStatus(true)
            } else {
                setStatus(false)
            }
            
            const previewImage = [...images]
            if(getProduk.gambar.length) {
                setGambar(getProduk.gambar)
                getProduk.gambar.some(item => {
                    previewImage.push(item)
                });
            }
            setImages(previewImage)
        }
    },[])


    const handleDeletePicture = (index) => {
        setLoadingButton(true)
        console.log("handle picture edit delete", index)
        const preview = [...images];
        const itemGambar = preview[index]
        MySwal.fire({
            title: `Apakah anda yakin ingin menghapus gambar ini ?`,
            text: "Anda tidak bisa mengembalikan data ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Hapus!'
          }).then((result) => {
            if (result.isConfirmed) {
                const payload = {
                    id: itemGambar.id,
                    idProduk: idProduk
                }
                deleteGambar(payload)
                .then(() => {
                  preview.splice(index, 1)
                  setImages(preview)
                  MySwal.fire(
                      'Deleted!',
                      'Gambar berhasil di hapus',
                      'success'
                  )
                  setLoadingButton(false)
              }, err => {
                setLoadingButton(false)
                  MySwal.fire({
                      icon: "error",
                      title: err ? err : "Gagal Menghapus Gambar",
                  });
              })
            }
        }) 
       
    }

    const handleImageChange = (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
    };

    const handleUploadFiles = async (files) => {
        setLoadingButton(true)
        const uploaded = [];
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                // preview.push(URL.createObjectURL(file))
            }
        })
        try {
            const formData = new FormData();
            formData.append('idProduk', idProduk);
            uploaded.forEach((image_file) => {
                formData.append('gambar[]', image_file);
                // formData.append('file[]', image_file);
            })
            const sendImages = await createGambarProduk(formData)
            if(sendImages.data.length) {
                const preview = [...images];
                sendImages.data.forEach(item => {
                    preview.push(item)
                })
                setImages(preview)
                MySwal.fire({
                    icon: "success",
                    title: "Berhasil Menambahkan Gambar", 
                })
            }
            setLoadingButton(false)
        } catch (error) {
            setLoadingButton(false)
            MySwal.fire({
                icon: "error",
                title: error,
            });
        }
    }

    const handleEditProduk = async (event) => {
        try {
            event.preventDefault()
            setLoadingButton(true)
            setIsErrorName(false)
            setIsErrorHarga(false)
            setIsErrorKategori(false)
            setIsErrorSubKategori(false)
            setIsErrorBrand(false)
            setIsErrorSize(false)
            setIsErrorGambar(false)
            if (!validator.isLength(name, { min: 3 })) {
                setValidName("name minimal panjang 3 huruf");
                setLoadingButton(false)
                setIsErrorName(true)
            } else if(kategori.value.id === 0) {
                setValidKategori("Anda Harus Memilih Kategori")
                setIsErrorKategori(true)
                setLoadingButton(false)
            } else if(subCategori.value.id === 0) {
                setValidSubKategori("Anda Harus Memilih Sub Kategori")
                setIsErrorSubKategori(true)
                setLoadingButton(false)
            } else if(brand.value.id === 0) {
                setValidBrand("Anda Harus Memilih Brand")
                setIsErrorBrand(true)
                setLoadingButton(false)
            }else if(!sizes.length) {
                setValidSize("Anda harus menambahkan size terlebih dahulu")
                setIsErrorSize(true)
                setLoadingButton(false)
            } else if(gambar.length < 1) {
                setValidGambar("Anda Harus Memasukkan Gambar Min:1");
                setLoadingButton(false)
                setIsErrorGambar(true)
            } 
            else if(sale && (!startSale || !endSale)) {
                setValidSale("Tanggal Sale Harus Di Isi Terlebih Dahulu")
                setLoadingButton(false)
                setIsErrorSale(true)
            } else if(sale && jumlahSale == 0) {
                setValidJumlahSale("Jumlah Sale Harus Di Isi Terlebih Dahulu")
                setLoadingButton(false)
                setIsErrorJumlahSale(true)
            }   
            else {
                const formData = new FormData();
                formData.append('id', idProduk);
                formData.append('name', name);
                formData.append("harga", normalizeBayar(harga))
                formData.append("idCategori", kategori.value.id)
                formData.append("idSubCategori", subCategori.value.id)
                formData.append("idBrand", brand.value.id)
                formData.append("deskripsi", deskirpsi)
                formData.append("color", warna)
                formData.append("type", type)
                formData.append("jenisBahan", jenisBahan)
                formData.append("linkShoope", linkShoope)
                formData.append("sale", sale ? 1 : 0)
                formData.append("status", status ? 1 : 0)
                if(startSale) {
                    formData.append("startSale", dateFormat(startSale, "isoDate"))
                } else {
                    formData.append("startsale", startSale)
                }
                if(endSale) {
                    formData.append("endSale", dateFormat(endSale, "isoDate"))
                } else {
                    formData.append("endSale", endSale)
                }
                formData.append("jumlahSale", jumlahSale)

                const editProdukResult = await editProduk(formData)
                if(editProdukResult.status) {
                    MySwal.fire({
                        icon: "success",
                        title: "Berhasil Mengubah Produk", 
                    })
                }
                setLoadingButton(false)

            }
        } catch (error) {
            setLoadingButton(false)
            console.log(error)
            MySwal.fire({
                icon: "error",
                title: error,
            });
        }
        
    }

    const handleGetSize = async () => {
        try {
            setLoaodingSize(true)
            const getNewSize = await getSize(idProduk) 
            if(getNewSize) {
                setSizes(getNewSize)
            }
            setLoaodingSize(false)
        } catch (error) {
            setLoaodingSize(false)
            MySwal.fire({
                icon: "error",
                title: error,
            });
        }
    }
    useEffect(() => {
        handleGetSize()
    }, [reloadSize])


    const backNavigate = () => {
        router.replace('/dashboard/produk')
    }

    return(
        <> 
            <TitlePage title="Edit Produk" />
            <div className="mb-8">
                <ButtonPrimary name="kembali" action={backNavigate}/>
            </div>
            
            {
                loadingPage ?
                <div className="flex w-full h-full items-center justify-center">
                    <SpinnerLoading /> 
                </div> :
                aksesMenuData && aksesMenuData.act_update === 1 ?
                <div>
                    <form onSubmit={handleEditProduk} className="w-full">
                        <div className="w-full flex flex-col md:flex-row md:gap-6">
                            {/* form detail */}
                            <div className="w-full">
                                <FieldText 
                                    value={name} 
                                    setValue={setName} 
                                    isRequire={true} 
                                    name="Nama" 
                                    placeholder="name" 
                                    id="name" 
                                    isError={isErrorName} 
                                    keterangan={validName} 
                                />
                                <FieldRupiah 
                                    title={"Harga"} 
                                    value={harga}
                                    setValue={setHarga}
                                    isRequire={true} 
                                    isError={isErrorHarga}
                                    keterangan={validHarga}
                                />
                                <Select2Kategori 
                                    value={kategori} 
                                    setValue={setKategori} 
                                    isError={isErrorKategori}
                                    keterangan={validKategori}
                                />
                                {
                                    kategori.value.id !== 0 && 
                                    <Select2SubKategori 
                                        idKategori={kategori.value.id} 
                                        value={subCategori} 
                                        setValue={setSubCategori} 
                                        isError={isErrorSubKategori}
                                        keterangan={validSubKategori}
                                        /> 
                                }
                                <Select2Brand 
                                     value={brand} 
                                     setValue={setBrand} 
                                     isError={isErrorBrand}
                                     keterangan={validBrand}
                                />
                                <FieldText 
                                    value={warna} 
                                    setValue={setWarna} 
                                    name="Warna"
                                    id="warna"
                                    placeholder="ex: hitam, jika tidak ada masukkan '-' "
                                    isRequire={true}  
                                />
                                <FieldTextArea 
                                    value={deskirpsi} 
                                    setValue={setDeskripsi} 
                                    name="Deskripsi"
                                    id="deskripsi"
                                    isRequire={true} 
                                    placeholder="jika tidak ada masukkan '-'" 
                                    
                                />
                                <FieldText 
                                    value={type} 
                                    setValue={setType} 
                                    name="Type"
                                    id="type" 
                                    isRequire={true} 
                                    placeholder="jika tidak ada masukkan '-'"
                                />
                                <FieldText 
                                    value={jenisBahan} 
                                    setValue={setJenisBahan} 
                                    name="Jenis Bahan"
                                    id="jenis bahan"
                                    placeholder="ex: Katun, jika tidak ada masukkan '-'"
                                    isRequire={true} 
                                />
                                <FieldText 
                                    value={linkShoope} 
                                    setValue={setLinkShoope} 
                                    name="Link Shoope"
                                    id="link shoope"
                                    isRequire={true} 
                                />
                                <Togle 
                                    value={sale}
                                    setValue={setSale}
                                    title={"Aktifkan Sale"}
                                    key={"aktifkanSale"}
                                />
                                {
                                    sale ?
                                    <>
                                        <FieldTanggal  
                                            value={startSale}
                                            setValue={setStartSale}
                                            name={"Tanggal Mulai Sale"}
                                            isRequire={true}
                                        />
                                        <FieldTanggal  
                                            value={endSale}
                                            setValue={setEndSale}
                                            name={"Tanggal Berakhir Sale"}
                                            isRequire={true}
                                        />
                                         <FieldNumber 
                                            name="Jumlah Sale"
                                            value={jumlahSale} 
                                            setValue={setJumlahSale} 
                                            isRequire={true}
                                            isError={isErrorJumlahSale}
                                            keterangan={validJumlahSale} 
                                        />
                                        {
                                            isErrorSale &&
                                            <p className="text-sm text-red-500 mb-2">{validSale}</p>
                                        }
                                    </>
                                    :null
                                }
                            </div>
                            {/* form pick picture */}
                            <div className="w-full">
                                <SizeFormEdit 
                                    idProduk={idProduk}
                                    sizes={sizes}
                                    isError={isErrorSize}
                                    keterangan={validSize}
                                    reloadSize={reloadSize}
                                    setReloadSize={setReloadSize}
                                    loadingSize = {loadingSize}
                                    loadingButton={loadingButton}
                                    setLoadingButton = {setLoadingButton}
                                />
                                <MultiplePicForm state={gambar} handleState={handleImageChange} isError={isErrorGambar} keterangan={validGambar} />
                                <div className={`${images.length ? "p-4 bg-gray-400 rounded-lg my-6" : "hidden"}`}>
                                    <ol className="flex flex-col md:flex-row">
                                        {[...images].map((f, i) => (
                                            <li  key={i} className="block p-1 w-1/ h-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8">
                                                <img onClick={() => handleDeletePicture(i)} alt="upload preview" src={f.path} className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                                <Togle 
                                    value={status}
                                    setValue={setStatus}
                                    title={"Status Produk"}
                                    key={"akrifProduk"}
                                />
                            </div>
                        </div>
                        <ButtonPrimary name="Update" width="w-full" isLoading={loadingButton} type={"submit"} />
                    </form>
                </div>
                :
                <div className="flex items-center justify-center">
                    <span>Anda tidak memiliki akses</span>
                </div> 
            }
        </> 
    )
}