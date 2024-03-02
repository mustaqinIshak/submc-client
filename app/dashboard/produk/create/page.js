'use client'
import {useEffect, useState} from "react"
import aksesMenu from "@/app/api/aksesMenu"
import {create} from "@/app/api/produk"
import normalizeBayar from "../../../../helpers/normalizeBayar"
import { FieldText } from "@/components/fieldText"
import Togle from "@/components/togle"
import SizeForm  from "@/components/sizeForm"
import FieldTanggal  from "@/components/fieldTanggal"
import { FieldTextArea } from "@/components/fieldTextArea"
import {FieldRupiah} from "@/components/fieldRupiah"
import {Select2Kategori} from "@/components/select2Kategori"
import {Select2SubKategori} from "@/components/select2SubKategori"
import {Select2Brand} from "../../../../components/select2Brand"
import MultiplePicForm from "@/components/multiplePicForm";
import {ButtonPrimary} from "@/components/buttonPrimary"
import TitlePage from "@/components/titlePage";
import { useRouter } from "next/navigation"
import SpinnerLoading from "@/components/spinner";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import validator from 'validator';
import dateFormat from "dateformat"


const MAX_COUNT = 5;

export default function CreateProduk() {
    const router = useRouter();
    const MySwal = withReactContent(Swal)
    const [aksesMenuData, setAksesMenuData] = useState({});
    // const [roleUser, setRoleUser] = useState({value:{id: 0, name: "silahkan Memilih role user"}, label:"silahkan Memilih Role user"})
    const [name, setName] = useState("");
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
    const [status, setStatus] = useState(1);
    const [sizes, setSizes] = useState([]);
    const [nameSize, setNameSize] = useState("")
    const [jumlahSize, setJumlahSize] = useState("0")
    const [sale, setSale] = useState(false)
    const [startSale, setStartSale] = useState("")
    const [endSale, setEndSale] = useState("")


    const [fileLimit, setFileLimit] = useState(false);
    const [loadingButton, setLoadingButton] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);
    const [validName, setValidName] = useState(null)
    const [validHarga, setValidHarga] = useState(null)
    const [validKategori, setValidKategori] = useState(null)
    const [validSubKategori, setValidSubKategori] = useState(null)
    const [validBrand, setValidBrand] = useState(null)
    const [validSize, setValidSize] = useState(null)
    const [validGambar, setValidGambar] = useState(null)
    const [validSale, setValidSale] = useState(null)
    const [isErrorName, setIsErrorName] = useState(false)
    const [isErrorHarga, setIsErrorHarga] = useState(false)
    const [isErrorKategori, setIsErrorKategori] = useState(false)
    const [isErrorSubKategori, setIsErrorSubKategori] = useState(false)
    const [isErrorBrand, setIsErrorBrand] = useState(false)
    const [isErrorSize, setIsErrorSize] = useState(false)
    const [isErrorSale, setIsErrorSale] = useState(false)
    const [isErrorGambar, setIsErrorGambar] = useState(false)
    const getAksesMenu = async () => {
        try {
            setLoadingPage(true)
            const menu = JSON.parse(localStorage.getItem('menu'));
            const findIdMenu = menu.find(item => item.name === "Produk");
            const find = await aksesMenu.getSelectedAksesMenu(findIdMenu.id);
            console.log(find)
            if(find) {
                setAksesMenuData({...find});
            }
            setLoadingPage(false)
        } catch (error) {
            setLoadingPage(false)
            console.log(error);
        }
    }
    const backNavigate = () => {
        router.replace('/dashboard/produk')
    }

    const handleImageChange = (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
    };

    const handleSizeChange = () => {
        const addSize = [...sizes]
        if (addSize.findIndex((f) => f.name === nameSize) === -1) {
            const obj = {
                "name" : nameSize,
                "jumlah": normalizeBayar(jumlahSize),
            }
            addSize.push(obj);   
        }
        setSizes(addSize)
        setNameSize("")
        setJumlahSize("0")
    }

    const handleDeletSize = (index) => {
        const addSize = [...sizes]
        addSize.splice(index, 1)
        setSizes(addSize)   
    }

    const handleDeletePicture = (index) => {
        console.log("masuk bos", index)
        const uploaded = [...gambar];
        const preview = [...images];

        uploaded.splice(index, 1)
        preview.splice(index, 1)
        // console.log(uploaded, preview)
        setGambar(uploaded)
        setImages(preview)
    }

    const handleUploadFiles = files => {
        const uploaded = [...gambar];
        const preview = [...images];
        files.some((file) => {
            if (uploaded.findIndex((f) => f.name === file.name) === -1) {
                uploaded.push(file);
                preview.push(URL.createObjectURL(file))
            }
        })
        setGambar(uploaded)
        setImages(preview)
        
    }

    const addProduk = async (event) => {
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
                setValidName("username minimal panjang 3 huruf");
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
            }  else if(brand.value.id === 0) {
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
            }   
            else {
                const formData = new FormData();
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
                formData.append("sale", !sale ? 0 : 1)
                if(startSale && endSale) {
                    formData.append("startSale", dateFormat(startSale, "isoDate"))
                    formData.append("endSale", dateFormat(endSale, "isoDate"))
                } else {
                    formData.append("startsale", "")
                    formData.append("endSale", "")
                }

                formData.append("status", status)
                sizes.forEach((itemSize) => {
                    formData.append("size[]", JSON.stringify(itemSize))
                })
                gambar.forEach((image_file) => {
                    formData.append('gambar[]', image_file);
                    // formData.append('file[]', image_file);
                })

                const createProduk = await create(formData)
                if(createProduk.status) {
                    MySwal.fire({
                        icon: "success",
                        title: "Berhasil Menambahkan Produk", 
                    })
                    setName("")
                    setHarga("")
                    setKategori({value:{id: 0, name: "silahkan Memilih Kategori"}, label:"silahkan Memilih Kategori"})
                    setSubCategori({value:{id: 0, name: "silahkan Memilih Sub Kategori"}, label:"silahkan Memilih Sub Kategori"})
                    setBrand({value:{id: 0, name: "silahkan Memilih Brand"}, label:"silahkan Memilih Brand"})
                    setDeskripsi("")
                    setWarna("")
                    setType("")
                    setJenisBahan("")
                    setLinkShoope("")
                    setGambar([])
                    setImages([])
                    setSizes([])
                    setNameSize("")
                    setJumlahSize("0")
                    setSale(0)
                    setStartSale("")
                    setEndSale("")
                    setLoadingButton(false)
                }

            }
        } catch (error) {
            setLoadingButton(false)
            MySwal.fire({
                icon: "error",
                title: error,
            });
        }
    }
    useEffect(() => {
        getAksesMenu()
    },[])

    return(
        <> 
            {
                loadingPage ?
                <div className="flex w-full h-full items-center justify-center">
                    <SpinnerLoading /> 
                </div> :
                aksesMenuData && aksesMenuData.act_create === 1 ?
                <div>
                    <TitlePage title="Create Produk" />
                    <div className="mb-8">
                        <ButtonPrimary name="kembali" action={backNavigate}/>
                    </div>
                    <form onSubmit={addProduk} className="w-full">
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
                                <SizeForm 
                                    sizes={sizes}
                                    nameSize={nameSize}
                                    jumlahSize={jumlahSize}
                                    setNameSize={setNameSize}
                                    SetJumlahSize={setJumlahSize}
                                    handleAddSize={handleSizeChange}
                                    handleDeleteSize={handleDeletSize}
                                    isError={isErrorSize}
                                    keterangan={validSize}
                                />
                                <MultiplePicForm state={gambar} handleState={handleImageChange} isError={isErrorGambar} keterangan={validGambar} />
                                <div className={`${images.length ? "p-4 bg-gray-400 rounded-lg my-6" : "hidden"}`}>
                                    <ol className="flex flex-col md:flex-row">
                                        {[...images].map((f, i) => (
                                            <li  key={i} className="block p-1 w-1/ h-full sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/8">
                                                <img onClick={() => handleDeletePicture(i)} alt="upload preview" src={f} className="img-preview w-full h-full sticky object-cover rounded-md bg-fixed" />
                                            </li>
                                        ))}
                                    </ol>
                                </div>
                            </div>
                        </div>
                        <ButtonPrimary name="Create" width="w-full" isLoading={loadingButton} type={"submit"} />
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