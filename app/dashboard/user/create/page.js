'use client'
import {useEffect, useState} from "react"
import aksesMenu from "@/app/api/aksesMenu"
import {create} from "@/app/api/user"
import { FieldText } from "@/components/fieldText"
import {ButtonPrimary} from "@/components/buttonPrimary"
import {Select2RoleUser} from "@/components/select2RoleUser"
import TitlePage from "@/components/titlePage";
import { FieldPassword } from "@/components/fieldPassword"
import { useRouter } from "next/navigation"
import SpinnerLoading from "@/components/spinner";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import validator from 'validator';

export default function CreateUser() {
    const router = useRouter();
    const MySwal = withReactContent(Swal)
    const [roleUser, setRoleUser] = useState({value:{id: 0, name: "silahkan Memilih role user"}, label:"silahkan Memilih Role user"})
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [aksesMenuData, setAksesMenuData] = useState({});
    const [loadingButton, setLoadingButton] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);
    const [validName, setValidName] = useState(null)
    const [validUsername, setValidUsername] = useState(null)
    const [validPassword, setValidPassword] = useState("")
    const [isErrorName, setIsErrorName] = useState(false)
    const [isErrorUsername, setIsErrorUsername] = useState(false)
    const [isErrorPassword, setIsErrorPassword] = useState(false)
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
    const backNavigate = () => {
        router.replace('/dashboard/user')
    }

    const addUser = async (event) => {
        try {
            event.preventDefault()
            setLoadingButton(true)
            setIsErrorName(false)
            setIsErrorUsername(false)
            setIsErrorPassword(false)
            if (!validator.isLength(name, { min: 3 })) {
                setValidName("username minimal panjang 3 huruf");
                setLoadingButton(false)
                setIsErrorName(true)
            } else if (/select|insert|update|delete|drop table|create table|alter table/i.test(username)) {
                setValidName("username tidak bisa berupa SQL");
                setLoadingButton(false)
                setIsErrorName(true)
            } else if (!validator.isLength(username, { min: 3 })) {
                setValidUsername("username minimal panjang 3 huruf");
                setLoadingButton(false)
                setIsErrorUsername(true)
            } else if (/select|insert|update|delete|drop table|create table|alter table/i.test(username)) {
                setValidUsername("username tidak bisa berupa SQL");
                setLoadingButton(false)
                setIsErrorUsername(true)
            } else if (/[<>{}()[\]%&!$#^|\\/*?"=]/i.test(username)) {
                setValidUsername("username tidak boleh memakai simbol");
                setLoadingButton(false)
                setIsError(true)
            } else if(!validator.isLength(password,{min: 8})){
                setValidPassword("Password harus minimal 8 karakter huruf");
                setLoadingButton(false)
                setIsErrorPassword(true)
            } 
            else if(roleUser.value.id === 0) {
                setLoadingButton(false)
                MySwal.fire({
                    icon: "error",
                    title: "Anda harus memilih role user terlebih dahulu",
                });
            } else {
                const payload = {
                    "name": name,
                    "username": username,
                    "password": password,
                    "id_role" : roleUser.value.id,
                }

                const createUser = await create(payload)
                if(createUser.status) {
                    MySwal.fire({
                        icon: "success",
                        title: "Berhasil Menambahkan user", 
                    })
                    setName("")
                    setUserName("")
                    setPassword("")
                    setRoleUser({value:{id: 0, name: "silahkan Memilih role user"}, label:"silahkan Memilih Role user"})
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
                    <TitlePage title="Create User" />
                    <div className="mb-8">
                        <ButtonPrimary name="kembali" action={backNavigate}/>
                    </div>
                    <form onSubmit={addUser}>
                        <Select2RoleUser value={roleUser} setValue={setRoleUser} />
                        <FieldText value={name} setValue={setName} isRequire={true} name="Nama" placeholder="name" id="name" isError={isErrorName} keterangan={validName} />
                        <FieldText value={username} setValue={setUserName} isRequire={true} name="Username" placeholder="username" id="username" isError={isErrorUsername} keterangan={validUsername} />
                        <FieldPassword 
                            value={password} 
                            setValue={setPassword} 
                            isRequire={true} 
                            isShowPassword={isShowPassword}
                            setisShowPassword={setIsShowPassword}
                            isError={isErrorPassword}
                            keterangan={validPassword} 
                            name="Password" 
                        />
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