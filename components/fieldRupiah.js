import handleChangeRupiah from "../helpers/handleChangRupiah"
export const FieldRupiah = ({
    value, 
    setValue, 
    title, 
    isRequired = true,
    isError,
    keterangan}) => {
    return (
        <div className="mb-6 w-full">
            <label htmlFor={title} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{title}</label>
            {
                isRequired ?
                <input 
                        type="text" 
                        id={title} 
                        className="
                                    block 
                                    w-full 
                                    p-2 
                                    text-gray-900 border 
                                    border-gray-300 
                                    rounded-lg 
                                    bg-gray-50 
                                    sm:text-xs 
                                    focus:ring-blue-500 
                                    focus:border-blue-500 
                                "
                        value={value}
                        onChange={(e) => setValue(handleChangeRupiah(e.target.value))}
                        required
                />
                :
                <input 
                        type="text" 
                        id={title} 
                        className="
                                    block 
                                    w-full 
                                    p-2 
                                    text-gray-900 border 
                                    border-gray-300 
                                    rounded-lg 
                                    bg-gray-50 
                                    sm:text-xs 
                                    focus:ring-blue-500 
                                    focus:border-blue-500 
                                "
                        value={value}
                        onChange={(e) => setValue(handleChangeRupiah(e.target.value))}
                />

            }            
            <p className="mt-2 text-sm"><span className="font-medium">Exp:Rp. 570.000</span> Input harus berupa angka</p>
            {
                isError &&
                <p className="mt-2 text-sm text-red-500">{keterangan}</p>
            }
        </div>
    )
}