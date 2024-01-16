'use client'
import { useEffect, useState } from "react";
import aksesMenu from "@/app/api/aksesMenu"
import TableRoleUser from "@/components/tableRoleUser"
import { ButtonPrimary } from "@/components/buttonPrimary";
import TitlePage from "@/components/titlePage"
import SpinnerLoading from "@/components/spinner";
import { useRouter } from "next/navigation"

export default function RoleUser(){
    const router = useRouter();
    const [aksesMenuData, setAksesMenuData] = useState({});
    const [loadingPage, setLoadingPage] = useState(false);
    
    const getAksesMenu = async () => {
        try {
            setLoadingPage(true)
            const menu = JSON.parse(localStorage.getItem('menu'));
            const findIdMenu = menu.find(item => item.name === "User");
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

    const handleBack = () => {
        router.replace('/dashboard/user')
    }

    const handleCreate = () => {
        router.replace('/dashboard/roleUser/create')
    }
    useEffect(() => {
        getAksesMenu();
    },[])
    return(
        <>
            <TitlePage title="Role User" />
            {
                loadingPage ?
                <div className="flex w-full h-full items-center justify-center">
                    <SpinnerLoading /> 
                </div>
                :
                aksesMenuData && aksesMenuData.act_read === 1 ? 
                <div className="flex flex-col items-center justify-center">
                    <div className="w-full flex justify-start mb-6">
                        <ButtonPrimary name="Kembali" action={handleBack}  />
                        {
                            aksesMenuData && aksesMenuData.act_create === 1 && 
                            <ButtonPrimary name="Tambah Role User" action={handleCreate} />
                        }
                    </div>
                    <TableRoleUser aksesEdit={aksesMenuData.act_update} /> 
                </div>
                :
                <div className="flex items-center justify-center">
                    <span>Anda tidak memiliki akses</span>
                </div> 
            }
        </>
    )
}