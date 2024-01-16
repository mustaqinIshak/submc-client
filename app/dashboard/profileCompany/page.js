'use client'

import { useState, useEffect } from "react";
import {get, editProfileCompany} from "@/app/api/ProfileCompany";
import aksesMenu from "@/app/api/aksesMenu"
import { FieldText } from "@/components/fieldText";
import {ButtonPrimary} from "@/components/buttonPrimary"
import TitlePage from "@/components/titlePage";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import SpinnerLoading from "@/components/spinner";
import validator from 'validator';

export default function ProfileCompany() {
    const MySwal = withReactContent(Swal)
    const [aksesMenuData, setAksesMenuData] = useState({});
    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [alamat, setAlamat] = useState("")
    const [nomorHp, setNomorHp] = useState("")
    const [instagram, setInstagram] = useState("")
    const [twitter, setTwitter] = useState("")
    const [facebook, setFacebook] = useState("")
    const [youtube, setYoutube] = useState("")
    const [loadingPage, setLoadingPage] = useState(false)
    const [loadingButton, setLoadingButton] = useState(false)
    const [validName, setValidName] = useState(null)
    const [validAlamat, setValidAlamat] = useState(null)
    const [validNomorHp, setValidNomorHp] = useState(null)
    const [isErrorName, setIsErrorName] = useState(false)
    const [isErrorAlamat, setIsErrorAlamat] = useState(false)
    const [isErrorNomorHp, setIsErrorNomorHp] = useState(false)
    const getAksesMenu = async () => {
        try {
            setLoadingPage(true)
            const menu = JSON.parse(localStorage.getItem('menu'));
            const findIdMenu = menu.find(item => item.name === "Profil Perusahaan");
            console.log(findIdMenu.id)
            const find = await aksesMenu.getSelectedAksesMenu(findIdMenu.id);
            
            if(find) {
                setAksesMenuData({...find});
                const getProfilCompanyData = await get()
                console.log(getProfilCompanyData)
                if(getProfilCompanyData) {
                    setId(getProfilCompanyData.id)   
                    setName(getProfilCompanyData.name)
                    setAlamat(getProfilCompanyData.alamat)
                    setNomorHp(getProfilCompanyData.nomor_hp)
                    setInstagram(getProfilCompanyData.instagram ? getProfilCompanyData.instagram : "")
                    setTwitter(getProfilCompanyData.twitter ? getProfilCompanyData.twitter : "")
                    setFacebook(getProfilCompanyData.facebook ? getProfilCompanyData.facebook : "")
                    setYoutube(getProfilCompanyData.youtube ? getProfilCompanyData.youtube : "")
                }
            }
            setLoadingPage(false)
        } catch (error) {
            setLoadingPage(false)
            // setDataNotFound(error)
            console.log(error);
            MySwal.fire({
                icon: "error",
                title: error,
            });
        }
    }
    const handleUpdate = async (event) => {
        event.preventDefault()
        setLoadingButton(true)
        try {
            if (!validator.isLength(name, { min: 3 })) {
                setValidName("name minimal panjang 3 huruf");
                setLoadingButton(false)
                setIsErrorName(true)
            } else if(!validator.isLength(alamat, { min: 3 })) {
                setValidAlamat("alamat minimal panjang 3 huruf");
                setLoadingButton(false)
                setIsErrorAlamat(true)
            } else if(!validator.isLength(alamat, { min: 8 })) {
                setValidNomorHp("nomor hp minimal panjang 8 angka");
                setLoadingButton(false)
                setIsErrorNomorHp(true)
            } else {
                const obj = {
                    id: id,
                    name: name,
                    alamat: alamat,
                    nomorHp: nomorHp,
                    instagram: instagram,
                    twitter: instagram,
                    facebook: facebook,
                    youtube: youtube,
                }

                const updateProfilCompany = await editProfileCompany(obj)
                if(updateProfilCompany.status) {
                    MySwal.fire({
                        icon: "success",
                        title: "Berhasil Mengubah Profil company", 
                    })
                }
                setLoadingButton(false)
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
        <div>
            <TitlePage title="Profil Perusahaan" />
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
                        <div>
                            <form onSubmit={handleUpdate}>
                                <FieldText name="Name" id="name" value={name} setValue={setName} isError={validName} isRequire={true} />
                                <FieldText name="Alamat" id="alamat" value={alamat} setValue={setAlamat} isError={validAlamat} isRequire={true} />
                                <FieldText name="Nomor HP" id="nomorhp" value={nomorHp} setValue={setNomorHp} isError={validNomorHp} isRequire={true} />
                                <FieldText name="Instagram" id="instagram" value={instagram} setValue={setInstagram} isRequire={false} />
                                <FieldText name="Twitter" id="twitter" value={twitter} setValue={setTwitter} isRequire={false} />
                                <FieldText name="Facebook" id="facebook" value={facebook} setValue={setFacebook} isRequire={false} />
                                <FieldText name="Youtube" id="youtube" value={youtube} setValue={setYoutube} isRequire={false} />
                                <ButtonPrimary type={"submit"} name="Update" isLoading={loadingButton} />
                            </form>
                        </div>
                    }
                </div>
                :
                <div className="flex items-center justify-center">
                    <span>Anda tidak memiliki akses</span>
                </div>
            }
        </div>
    )
}