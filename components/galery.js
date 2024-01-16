'use client'
import { TiDelete } from "react-icons/ti";
export default function Galery({item, deleteItem}) {
    return(
        <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            {
                item && item.map((item, index) => 
                    <div className="relative" key={index}>
                        <div onClick={() => deleteItem(item.id)} className="cursor-pointer absolute z-30 text-4xl text-red-700">
                            <TiDelete  />
                        </div>
                        <img className="h-auto max-w-full" src={item.gambar} alt=""/>
                    </div>
                )
            }
        </div>
    )
}