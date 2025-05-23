"use client"

import {useState} from "react"
import {createSize, deleteItem} from "@/app/api/size"
import { FieldText } from "@/components/fieldText"
import { FieldNumber } from "@/components/fieldNumber"
import {ButtonPrimary} from "@/components/buttonPrimary"
import ButtonAllert from "@/components/buttonAllert"
import ModalEditSize from "@/components/modalEditsize"
import SpinnerLoading from "./spinner"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
export default function SizeFormEdit({
    idProduk,
    namaArtikel,
    sizes,
    isError,
    keterangan,
    reloadSize,
    setReloadSize,
    loadingSize,
    loadingButton,
    setLoadingButton,
}) {
    const MySwal = withReactContent(Swal)
    const [showModalEdit, setShowModalEdit] = useState(false)
    const [idSize, setIdSize] = useState("")
    const [nameSizeSelected, setNameSizeSelected] = useState("")
    const [jumlahSizeSelected, setJumlahSizeSelected] = useState("")
    const [nameSize, setNameSize] = useState("")
    const [jumlahSize, setJumlahSize] = useState("0")
    const handleShowModalEdit = (id, name, jumlah) => {
       setIdSize(id)
       setNameSizeSelected(name)
       setJumlahSizeSelected(jumlah)
       setShowModalEdit(true)
    }

    const handleAddNewSize = async () => {
        setLoadingButton(true)
        try {
            if(!nameSize || !jumlahSize || !idProduk) {
                MySwal.fire({
                    icon: "error",
                    title: "Anda Harus Melengkapi Form Untuk Menambahkan Size",
                });
            } else {
                const obj = {
                    idProduk: idProduk,
                    nama_artikel: namaArtikel,
                    name: nameSize,
                    jumlah: jumlahSize,
                }
                const addNewSize = await createSize(obj)
                if(addNewSize) {
                    MySwal.fire({
                        icon: "success",
                        title: "Berhasil Menambahkan Size", 
                    })
                }
                setLoadingButton(false)
                setReloadSize(!reloadSize)
            }
            setReloadSize(!reloadSize)
        } catch (error) {
            setLoadingButton(false)
            MySwal.fire({
                icon: "error",
                title: error,
            });
        }
    }

    const handleDeleteSize = async(id) => {
        MySwal.fire({
            title: `Apakah anda yakin ingin menghapus size ini ?`,
            text: "Anda tidak bisa mengembalikan data ini!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Ya, Hapus!'
          }).then((result) => {
            if (result.isConfirmed) {
                const obj = {
                    id: id,
                    idProduk: idProduk
                }
                deleteItem(obj)
                .then(() => {
                    setReloadSize(!reloadSize)
                  MySwal.fire(
                      'Deleted!',
                      'Size berhasil di hapus',
                      'success'
                  )
              }, err => {
                  MySwal.fire({
                      icon: "error",
                      title: "Gagal Menghapus kategori",
                  });
              })
            }
        }) 
 
    }
    return(
      <div className="w-full">
        {
            showModalEdit ?
            <ModalEditSize 
                id={idSize} 
                name={nameSizeSelected} 
                jumlah={jumlahSizeSelected} 
                setShowEditSize={setShowModalEdit}
                reloadSize={reloadSize}
                setReloadSize={setReloadSize}  
            />
            :
            null
        }
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Size</label>
        <div className="flex flex-col md:flex-row md:gap-6 items-center">
            <FieldText name="Nama Size" value={nameSize} setValue={setNameSize} isRequire={false} />
            <FieldNumber name="Jumlah" value={jumlahSize} setValue={setJumlahSize} isRequire={false}/>
            <div>
                <ButtonPrimary isLoading={loadingButton} type={"button"} name="Tambah" action={handleAddNewSize} />
            </div>
        </div>
        {
            isError &&
            <p className="mt-2 text-sm text-red-500">{keterangan}</p>
        }
        {
            loadingSize ? 
            <SpinnerLoading />
            :
            sizes.length ? 
            <div className="flex flex-col gap-6 w-full bg-slate-300 p-4 rounded-lg mb-6">
            {
                sizes.map((item, index) =>
                    <div key={index} className="flex flex-col md:flex-row md:gap-6 w-full p-4 bg-slate-50 rounded-md">
                        <div className="w-full">
                            <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Name:
                            </label>
                            <span> {item.name} </span>
                        </div>
                        <div className="w-full">
                            <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                Jumlah:
                            </label>
                            <span> {item.jumlah} </span>
                        </div>
                        <ButtonPrimary name="Edit" type={"button"} action={() => handleShowModalEdit(item.id, item.name, item.jumlah)} />
                        <ButtonAllert action={() => handleDeleteSize(item.id)}  name="Hapus" />
                    </div>
                )
            }
            </div>
            : null
        }
      </div>  
    )
}