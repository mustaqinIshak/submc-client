'use client'
import { useState, useEffect } from "react"
import aksesMenu from "../../api/aksesMenu";
import { useRouter } from "next/navigation"
import { ButtonPrimary } from "@/components/buttonPrimary";
import TitlePage from "@/components/titlePage"
import SpinnerLoading from "@/components/spinner";
import TableSubKategori from "@/components/tableSubKategori"

export default function SubKategori() {
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
        router.replace('/dashboard/subKategori/create')
    }

    const handleNavigateKembali = () => {
        router.replace('/dashboard/kategori')
    }

    useEffect(() => {
        getAksesMenu();
    },[])
    return(
        <div>
             <TitlePage title="Sub Kategori" />
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
                            <ButtonPrimary name="Tambah sub Kategori" action={createNavigate}  />
                            <ButtonPrimary name="Kembali" action={handleNavigateKembali}  />
                        </div>
                    }
                    <TableSubKategori aksesDelete={aksesMenuData.act_delete} aksesEdit={aksesMenuData.act_update}  />
                </div>
                :
                <div className="flex items-center justify-center">
                    <span>Anda tidak memiliki akses</span>
                </div> 
             }
        </div>
    )
}