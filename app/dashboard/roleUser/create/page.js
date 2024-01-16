'use client'
import { useState, useEffect } from "react"
import aksesMenu from "@/app/api/aksesMenu"
import {getSelectedUser} from "@/app/api/user"
import {create} from "@/app/api/roleUser"
import { FieldText } from "@/components/fieldText"
import {ButtonPrimary} from "@/components/buttonPrimary"
import Togle from "@/components/togle"
import { useRouter } from "next/navigation"
import SpinnerLoading from "@/components/spinner";
import TitlePage from "@/components/titlePage";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import validator from 'validator';


export default function CreateRoleUser() {
    const router = useRouter();
    const MySwal = withReactContent(Swal)
    const [aksesMenuData, setAksesMenuData] = useState({});
    const [name, setName] = useState("");
    const [validName, setValidName] = useState(null)
    const [validProduk, setValidProduk] = useState(null)
    const [validKategori, setValidKategori] = useState(null)
    const [validProfilPerushaan, setValidProfilPerusahaan] = useState(null)
    const [validUser, setValidUser] = useState(null)
    const [validBannerHome, setValidBannerHome] = useState(null)
    const [isErrorName, setIsErrorName] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);
    const [dashboardRead, setDashboardRead] = useState(true);
    const [dashboardCreate, setDashboardCreate] = useState(false);
    const [dashboardUpdate, setDashboardUpdate] = useState(false);
    const [dashboardDelete, setDashboardDelete] = useState(false);
    const [produkRead, setProdukRead] = useState(false);
    const [produkCreate, setProdukCreate] = useState(false);
    const [produkUpdate, setProdukUpdate] = useState(false);
    const [produkDelete, setProdukDelete] = useState(false);
    const [kategoriRead, setKategoriRead] = useState(false);
    const [kategoriCreate, setKategoriCreate] = useState(false);
    const [kategoriUpdate, setKategoriUpdate] = useState(false);
    const [kategoriDelete, setKategoriDelete] = useState(false);
    const [profilPerusahaanRead, setProfilPerusahaanRead] = useState(false);
    const [profilPerusahaanCreate, setProfilPerusahaanCreate] = useState(false);
    const [profilPerusahaanUpdate, setProfilPerusahaanUpdate] = useState(false);
    const [profilPerusahaanDelete, setProfilPerusahaanDelete] = useState(false);
    const [userRead, setUserRead] = useState(false);
    const [userCreate, setUserCreate] = useState(false);
    const [userUpdate, setUserUpdate] = useState(false);
    const [userDelete, setUserDelete] = useState(false);
    const [bannerHomeRead, setBannerHomeRead] = useState(false);
    const [bannerHomeCreate, setBannerHomeCreate] = useState(false);
    const [bannerHomeUpdate, setBannerHomeUpdate] = useState(false);
    const [bannerHomeDelete, setBannerHomeDelete] = useState(false);

    const getAksesMenu = async () => {
        try {
            setLoadingPage(true)
            const menu = JSON.parse(localStorage.getItem('menu'));
            const findIdMenu = menu.find(item => item.name === "User");
            const find = await aksesMenu.getSelectedAksesMenu(findIdMenu.id);
            if(find) {
                setAksesMenuData({...find});
            }
            setLoadingPage(false)
        } catch (error) {
            setLoadingPage(false)
            console.log(error);
        }
    }

    const handdleCreate = async (event) => {
        try {
            event.preventDefault()
            setLoadingButton(true)
            setValidName(null)
            setValidProduk(null)
            setValidKategori(null)
            setValidProfilPerusahaan(null)
            setValidUser(null)
            setValidBannerHome(null)
            if (!validator.isLength(name, { min: 3 })) {
                setValidName("name minimal panjang 3 huruf");
                setLoadingButton(false)
                setIsErrorName(true)
            } 
            else if (/select|insert|update|delete|drop table|create table|alter table/i.test(name)) {
                setValidName("name tidak bisa berupa SQL");
                setLoadingButton(false)
                setIsErrorName(true)
            } 
            else if((produkCreate || produkUpdate || produkDelete) && !produkRead) {
                    setLoadingButton(false)
                    setValidProduk("Produk read harus di aktifkan")
            } 
            else if((kategoriCreate || kategoriUpdate || kategoriDelete) && !kategoriRead) {
                setLoadingButton(false)
                setValidKategori("Kategori read harus di aktifkan")
            } 
            
            else if((profilPerusahaanCreate || profilPerusahaanUpdate || profilPerusahaanDelete) && !profilPerusahaanRead) {
                    setLoadingButton(false)
                    setValidProfilPerusahaan("Profil Perusahaan read harus di aktifkan")
            } 
            else if((userCreate || userUpdate || userDelete) && !userRead) {
                    setLoadingButton(false)
                    setValidUser("User read harus di aktifkan")
            } 
            else if((bannerHomeCreate || bannerHomeUpdate || bannerHomeDelete) && !bannerHomeRead) {
                    setLoadingButton(false)
                    setValidBannerHome("Banner Home read harus di aktifkan")
            }
             else {
                const obj = {
                    name,
                    aksesMenu : []
                }
                if(dashboardRead) {
                    const objDashboard = {
                        name: "Dashboard",
                        actRead: dashboardRead,
                        actCreate: dashboardCreate,
                        actUpdate: dashboardUpdate,
                        actDelete: dashboardDelete
                    }
                    obj.aksesMenu.push(objDashboard)
                }
                if(produkRead) {
                    const objProduk = {
                        name: "Produk",
                        actRead: produkRead,
                        actCreate: produkCreate,
                        actUpdate: produkUpdate,
                        actDelete: produkDelete
                    }
                    obj.aksesMenu.push(objProduk)
                }
                if(kategoriRead) {
                    const obKategori = {
                        name: "Kategori",
                        actRead: kategoriRead,
                        actCreate: kategoriCreate,
                        actUpdate: kategoriUpdate,
                        actDelete: kategoriDelete
                    }
                    obj.aksesMenu.push(obKategori)
                }
                if(profilPerusahaanRead) {
                    const objProfilPerusahaan = {
                        name: "Profil Perusahaan",
                        actRead: profilPerusahaanRead,
                        actCreate: profilPerusahaanCreate,
                        actUpdate: profilPerusahaanUpdate,
                        actDelete: profilPerusahaanDelete
                    }
                    obj.aksesMenu.push(objProfilPerusahaan)
                }
                if(userRead) {
                    const objUser = {
                        name: "User",
                        actRead: userRead,
                        actCreate: userCreate,
                        actUpdate: userUpdate,
                        actDelete: userDelete
                    }
                    obj.aksesMenu.push(objUser)
                }
                if(bannerHomeRead) {
                    const objBannerHome = {
                        name: "Banner Home",
                        actRead: bannerHomeRead,
                        actCreate: bannerHomeCreate,
                        actUpdate: bannerHomeUpdate,
                        actDelete: bannerHomeDelete
                    }
                    obj.aksesMenu.push(objBannerHome)
                }

                const result = await create(obj)
                if(result) {
                    MySwal.fire({
                        icon: "success",
                        title: "Berhasil Menambahkan Role User", 
                    })
                    setLoadingButton(false)
                    setName("")
                    setProdukRead(false)
                    setProdukCreate(false)
                    setProdukUpdate(false)
                    setProdukDelete(false)
                    setKategoriRead(false)
                    setKategoriCreate(false)
                    setKategoriUpdate(false)
                    setKategoriDelete(false)
                    setProfilPerusahaanRead(false)
                    setProfilPerusahaanCreate(false)
                    setProfilPerusahaanUpdate(false)
                    setProfilPerusahaanDelete(false)
                    setUserRead(false)
                    setUserCreate(false)
                    setUserUpdate(false)
                    setUserDelete(false)
                    setBannerHomeRead(false)
                    setBannerHomeCreate(false)
                    setBannerHomeDelete(false)
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
    const backNavigate = () => {
        router.replace('/dashboard/roleUser')
    }

    useEffect(() => {
        getAksesMenu()
    },[])
    return(
        <div>
            {
                loadingPage ?
                <div className="flex w-full h-full items-center justify-center">
                    <SpinnerLoading /> 
                </div> :
                aksesMenuData && aksesMenuData.act_create === 1 ?
                <div>
                    <TitlePage title="Create Role User" />
                    <div className="mb-8">
                        <ButtonPrimary name="kembali" action={backNavigate}/>
                    </div>
                    <form onSubmit={handdleCreate}>
                        <FieldText name={"Name"}  value={name} setValue={setName} isError={isErrorName} keterangan={validName} />
                        <div className="flex flex-col mb-3" >
                            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Produk</span>
                            <div className="flex flex-col md:flex-row md:gap-5">
                                <Togle title={"Read"} value={produkRead} setValue={setProdukRead} />
                                <Togle title={"Create"} value={produkCreate} setValue={setProdukCreate} />
                                <Togle title={"Edit"} value={produkUpdate} setValue={setProdukUpdate} />
                                <Togle title={"Delete"} value={produkDelete} setValue={setProdukDelete} />
                            </div>
                            {
                                validProduk &&
                                <p className="text-sm text-red-500">{validProduk}</p>
                            }
                        </div>
                        <div className="flex flex-col mb-3" >
                            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Kategori</span>
                            <div className="flex flex-col md:flex-row md:gap-5">
                                <Togle title={"Read"} value={kategoriRead} setValue={setKategoriRead} />
                                <Togle title={"Create"} value={kategoriCreate} setValue={setKategoriCreate} />
                                <Togle title={"Edit"} value={kategoriUpdate} setValue={setKategoriUpdate} />
                                <Togle title={"Delete"} value={kategoriDelete} setValue={setKategoriDelete} />
                            </div>
                            {
                                validKategori &&
                                <p className="text-sm text-red-500">{validKategori}</p>
                            }
                        </div>
                        <div className="flex flex-col mb-3" >
                            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profil Perusahaan</span>
                            <div className="flex flex-col md:flex-row md:gap-5">
                                <Togle title={"Read"} value={profilPerusahaanRead} setValue={setProfilPerusahaanRead} />
                                <Togle title={"Edit"} value={profilPerusahaanUpdate} setValue={setProfilPerusahaanUpdate} />
                            </div>
                            {
                                validProfilPerushaan &&
                                <p className="text-sm text-red-500">{validProfilPerushaan}</p>
                            }
                        </div>
                        <div className="flex flex-col mb-3" >
                            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User</span>
                            <div className="flex flex-col md:flex-row md:gap-5">
                                <Togle title={"Read"} value={userRead} setValue={setUserRead} />
                                <Togle title={"Create"} value={userCreate} setValue={setUserCreate} />
                                <Togle title={"Edit"} value={userUpdate} setValue={setUserUpdate} />
                                <Togle title={"Delete"} value={userDelete} setValue={setUserDelete} />
                            </div>
                            {
                                validUser &&
                                <p className="text-sm text-red-500">{validUser}</p>
                            }
                        </div>
                        <div className="flex flex-col mb-3" >
                            <span className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Banner Home</span>
                            <div className="flex flex-col md:flex-row md:gap-5">
                                <Togle title={"Read"} value={bannerHomeRead} setValue={setBannerHomeRead} />
                                <Togle title={"Create"} value={bannerHomeCreate} setValue={setBannerHomeCreate} />
                                <Togle title={"Edit"} value={bannerHomeUpdate} setValue={setBannerHomeUpdate} />
                                <Togle title={"Delete"} value={bannerHomeDelete} setValue={setBannerHomeDelete} />
                            </div>
                            {
                                validBannerHome &&
                                <p className="text-sm text-red-500">{validBannerHome}</p>
                            }
                        </div>
                        <ButtonPrimary type={"submit"} name="create" width="w-full" isLoading={loadingButton} />
                    </form>
                </div>
                :
                <div className="flex items-center justify-center">
                    <span>Anda tidak memiliki akses</span>
                </div> 
            }
        </div>
    )
}