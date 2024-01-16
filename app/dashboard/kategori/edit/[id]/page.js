'use client'

import { useState , useEffect} from "react"
import { useRouter } from "next/navigation"
import aksesMenu from "@/app/api/aksesMenu"
import {edit, getSelected} from "@/app/api/kategori";
import { FieldText } from "@/components/fieldText"
import {ButtonPrimary} from "@/components/buttonPrimary"
import SpinnerLoading from "@/components/spinner";
import TitlePage from "@/components/titlePage";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import validator from 'validator';

export default function EditKategori({params}) {
    const router = useRouter();
    const MySwal = withReactContent(Swal)
    const [aksesMenuData, setAksesMenuData] = useState({});
    const [idKategori, setIdKategori] = useState("");
    const [name, setName] = useState("");
    const [validName, setValidName] = useState(null)
    const [isErrorName, setIsErrorName] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);

    const getAksesMenu = async () => {
        try {
            setLoadingPage(true)
            const menu = JSON.parse(localStorage.getItem('menu'));
            const findIdMenu = menu.find(item => item.name === "Kategori");
            const find = await aksesMenu.getSelectedAksesMenu(findIdMenu.id);
            if(find) {
                setAksesMenuData({...find});
                const getKategori = await getSelected(params.id)
                if(getKategori) {
                    console.log(getKategori)
                    setIdKategori(getKategori.id)
                    setName(getKategori.name)
                }
            }
            setLoadingPage(false)
        } catch (error) {
            setLoadingPage(false)
            console.log(error);
        }
    }

    const handdleEdit = async (event) => {
        event.preventDefault()
        setLoadingButton(true)
        try {
            setValidName(null)
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
            const obj = {
                id: idKategori,
                name: name
            }
            const editCategori = await edit(obj)
            if(editCategori) {
                MySwal.fire({
                    icon: "success",
                    title: "Berhasil Mengubah Kategori", 
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

    const backNavigate = () => {
        router.replace('/dashboard/kategori')
    }

    useEffect(() => {
        getAksesMenu()
    }, [])

    return(
        <div>
            <TitlePage title="Edit Kategori" />
            {
                loadingPage ?
                <div className="flex w-full h-full items-center justify-center">
                    <SpinnerLoading /> 
                </div> :
                aksesMenuData && aksesMenuData.act_update === 1 ?
                <div>
                    <div className="mb-8">
                        <ButtonPrimary name="kembali" action={backNavigate}/>
                    </div>
                    <form onSubmit={handdleEdit}>
                        <FieldText name={"Name"}  value={name} setValue={setName} isError={isErrorName} keterangan={validName} />
                        <ButtonPrimary type={"submit"} name="Edit" width="w-64" isLoading={loadingButton} />
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