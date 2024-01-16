"use client"
import { FieldText } from "@/components/fieldText"
import { FieldNumber } from "@/components/fieldNumber"
import {ButtonPrimary} from "@/components/buttonPrimary"
import ButtonAllert from "@/components/buttonAllert"
export default function SizeForm({
    sizes,
    nameSize, 
    setNameSize,
    jumlahSize,
    SetJumlahSize,
    handleAddSize,
    handleDeleteSize,
    isError,
    keterangan,
}) {
    return(
      <div className="w-full">
        <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Add Size</label>
        <div className="flex flex-col md:flex-row md:gap-6 items-center">
            <FieldText name="Nama Size" value={nameSize} setValue={setNameSize} isRequire={false} />
            <FieldNumber name="Jumlah" value={jumlahSize} setValue={SetJumlahSize} isRequire={false}/>
            <div>
                <ButtonPrimary type={"button"} name="Tambah" action={handleAddSize} />
            </div>
        </div>
        {
            isError &&
            <p className="mt-2 text-sm text-red-500">{keterangan}</p>
        }
        {
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
                        <ButtonAllert action={() => handleDeleteSize(index)}  name="Hapus" />
                    </div>
                )
            }
            </div>
            : null
        }
      </div>  
    )
}