'use client'
import { useState, useEffect } from "react"
import aksesMenu from "../../api/aksesMenu";
import { useRouter } from "next/navigation"
import { ButtonPrimary } from "@/components/buttonPrimary";
import TitlePage from "@/components/titlePage"
import SpinnerLoading from "@/components/spinner";
import TableKategori from "@/components/tableKategori"

export default function Kategori() {
    const router = useRouter();
    const [aksesMenuData, setAksesMenuData] = useState({});
    const [loadingPage, setLoadingPage] = useState(false);

    const getAksesMenu = async () => {
        try {
            setLoadingPage(true)
            const menu = JSON.parse(localStorage.getItem('menu'));
            const findIdMenu = menu.find(item => item.name === "Kategori");
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
    const createNavigate = () => {
        router.replace('/dashboard/kategori/create')
    }

    const handleNavigateSubKategori = () => {
        router.replace('/dashboard/subKategori')
    }

    useEffect(() => {
        getAksesMenu();
    },[])
    return(
        <div>
             <TitlePage title="Kategori" />
             {
                loadingPage ?
                <div className="flex w-full h-full items-center justify-center">
                    <SpinnerLoading /> 
                </div>
                :
                aksesMenuData && aksesMenuData.act_read === 1 ? 
                <div className="">
                    {
                        aksesMenuData && aksesMenuData.act_create === 1 &&
                        <div className="w-full flex justify-start mb-6">
                            <ButtonPrimary name="Tambah Kategori" action={createNavigate}  />
                            <ButtonPrimary name="Sub Kategori" action={handleNavigateSubKategori}  />
                        </div>
                    }
                    <TableKategori aksesEdit={aksesMenuData.act_update}  />
                </div>
                :
                <div className="flex items-center justify-center">
                    <span>Anda tidak memiliki akses</span>
                </div> 
             }
        </div>
    )
}