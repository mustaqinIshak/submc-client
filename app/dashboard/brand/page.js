'use client'

import { useState, useEffect } from "react"
import TitlePage from "@/components/titlePage";

import aksesMenu from "../../api/aksesMenu";
import { ButtonPrimary } from "@/components/buttonPrimary";
import SpinnerLoading from "@/components/spinner";
import { useRouter } from "next/navigation"
import TableBrand from "@/components/tableBrand"

export default function Brand() {

    const router = useRouter();
    const [aksesMenuData, setAksesMenuData] = useState({});
    const [loadingPage, setLoadingPage] = useState(false);

    const getAksesMenu = async () => {
        try {
            setLoadingPage(true)
            const menu = JSON.parse(localStorage.getItem('menu'));
            const findIdMenu = menu.find(item => item.name === "Brand");
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

    const createNavigate = () => {
        router.replace('/dashboard/brand/create')
    }

    useEffect(() => {
        getAksesMenu();
    },[])

    
    return(
        <>
            <TitlePage title="Brand" />
            {
                loadingPage ?
                <div className="flex w-full h-full items-center justify-center">
                    <SpinnerLoading /> 
                </div>
                :
                aksesMenuData && aksesMenuData.act_read === 1 ?
                <div className="flex flex-col items-center justify-center">
                    {
                        aksesMenuData && aksesMenuData.act_create === 1 &&
                        <div className="w-full flex justify-start mb-6">
                            <ButtonPrimary name="Tambah Brand" action={createNavigate}  />
                        </div>
                    }
                    <TableBrand aksesDelete={aksesMenuData.act_delete} aksesEdit={aksesMenuData.act_update} />
                </div>
                :
                <div className="flex items-center justify-center">
                    <span>Anda tidak memiliki akses</span>
                </div>
            }
        </>
    )
}