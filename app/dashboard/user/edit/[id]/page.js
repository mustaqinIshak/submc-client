'use client'

import {useEffect, useState} from "react"
import aksesMenu from "@/app/api/aksesMenu"
import {edit, getSelectedUser} from "@/app/api/user"
import { FieldText } from "@/components/fieldText"
import {ButtonPrimary} from "@/components/buttonPrimary"
import {Select2RoleUser} from "@/components/select2RoleUser"
import TitlePage from "@/components/titlePage";
import { FieldPassword } from "@/components/fieldPassword"
import Togle from "@/components/togle"
import { useRouter } from "next/navigation"
import SpinnerLoading from "@/components/spinner";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import validator from 'validator';

export default function EditUser({params}) {
    const router = useRouter();
    const MySwal = withReactContent(Swal)
    const [roleUser, setRoleUser] = useState({value:{id: 0, name: "silahkan Memilih role user"}, label:"silahkan Memilih Role user"})
    const [idUser, setIdUser] = useState("")
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [aksesMenuData, setAksesMenuData] = useState({});
    const [loadingButton, setLoadingButton] = useState(false);
    const [loadingPage, setLoadingPage] = useState(false);
    const [includePassword, setIncludePassword] = useState(false);
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
                const getUser = await getSelectedUser(params.id)
                if(getUser) {
                    setIdUser(getUser.id)
                    setName(getUser.name)
                    setUserName(getUser.username)
                    setRoleUser({value:{id: getUser.id_role, name: getUser.name_role}, label:getUser.name_role})
                }

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

    const handdleEdit = async (event) => {
        try {
            event.preventDefault()
            setLoadingButton(true)
            setIsErrorName(false)
            setIsErrorUsername(false)
            setIsErrorPassword(false)
            if (!validator.isLength(name, { min: 3 })) {
                setValidName("name minimal panjang 3 huruf");
                setLoadingButton(false)
                setIsErrorName(true)
            } else if (/select|insert|update|delete|drop table|create table|alter table/i.test(name)) {
                setValidName("name tidak bisa berupa SQL");
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
            } else if(password) {
                if(!validator.isLength(password,{min: 8})){
                    setValidPassword("Password harus minimal 8 karakter huruf");
                    setLoadingButton(false)
                    setIsErrorPassword(true)
                }
            } 
            else if(roleUser.value.id === 0) {
                setLoadingButton(false)
                MySwal.fire({
                    icon: "error",
                    title: "Anda harus memilih role user terlebih dahulu",
                });
            } else if(password) {
                const payload = {
                    "id" : idUser,
                    "name": name,
                    "username": username,
                    "id_role" : roleUser.value.id,
                    "password" : password
                }

                const editUser = await edit(payload)
                if(editUser.status) {
                    MySwal.fire({
                        icon: "success",
                        title: "Berhasil mengubah user", 
                    })
                }

            } else {
                const payload = {
                    "id" : idUser,
                    "name": name,
                    "username": username,
                    "id_role" : roleUser.value.id,
                }

                const editUser = await edit(payload)
                if(editUser.status) {
                    MySwal.fire({
                        icon: "success",
                        title: "Berhasil mengubah user", 
                    })
                }
            }
            setLoadingButton(false)
        } catch (error) {
            setLoadingButton(false)
            MySwal.fire({
                icon: "error",
                title: "Gagal mengubah user",
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
                aksesMenuData && aksesMenuData.act_update === 1 ?
                <div>
                    <TitlePage title="Edit User" />
                    <div className="mb-8">
                        <ButtonPrimary name="kembali" action={backNavigate}/>
                    </div>
                    <form onSubmit={handdleEdit}>
                        <Select2RoleUser value={roleUser} setValue={setRoleUser} />
                        <FieldText value={name} setValue={setName} isRequire={true} name="Nama" placeholder="name" id="name" isError={isErrorName} keterangan={validName} />
                        <FieldText value={username} setValue={setUserName} isRequire={true} name="Username" placeholder="username" id="username" isError={isErrorUsername} keterangan={validUsername} />
                        <Togle title={"password"} value={includePassword} setValue={setIncludePassword} />
                        {
                            includePassword &&
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
                        }
                        <ButtonPrimary name="Edit" width="w-full" isLoading={loadingButton} type={"submit"} />
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