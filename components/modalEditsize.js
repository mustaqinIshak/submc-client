'use client'
import { useEffect, useState } from "react";
import { FieldText } from "@/components/fieldText";
import { FieldNumber } from "@/components/fieldNumber";
import {ButtonPrimary} from "@/components/buttonPrimary";
import {edit} from "../app/api/size"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function ModalEditSize({id,name, jumlah, setShowEditSize, reloadSize, setReloadSize}) {
    const MySwal = withReactContent(Swal)
    const [nameSize, setNameSize] = useState(name)
    const [jumlahSize, setJumlahSize] = useState(jumlah)
    const [loadingButton, setLoadingButton] = useState(false);
    const handleEditSizebro = async () => {
        console.log("tes")
        try {
            setLoadingButton(true)
            const payload = {
                id: id,
                name : nameSize,
                jumlah: jumlahSize,
            }

            const editSize = await edit(payload)
            if(editSize) {
                MySwal.fire({
                    icon: "success",
                    title: "Berhasil Mengubah Size", 
                })
                setReloadSize(!reloadSize)
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
    return(
        <div id="authentication-modal" tabIndex="-1" aria-hidden="true" className="fixed bg-slate-500/50 top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="absolute top-1/4 left-1/3 w-full max-w-md max-h-full">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <button type="button" onClick={() => setShowEditSize(false)} className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                        </svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                    <div className="px-6 py-6 lg:px-8">
                        <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Edit Size</h3>
                        <div className="space-y-6"  >
                            <FieldText name="Nama Size" value={nameSize} setValue={setNameSize} isRequire={true} />
                            <FieldNumber name="Jumlah" value={jumlahSize} setValue={setJumlahSize} isRequire={true}/>
                            <ButtonPrimary type="button" name="Ok" isLoading={loadingButton} action={handleEditSizebro} />
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    )
}