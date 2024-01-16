import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri"
export const FieldPassword = ({
    name = "field password", 
    id = "field password", 
    placeholder = "placeholder", 
    isRequire = true, 
    value,
    setValue,
    isShowPassword =false,
    setisShowPassword,
    isError,    
    keterangan 
}) => {
    return(
        <div className="mb-6">
            <label htmlFor={id} className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {name}
            </label>
            <div className="relative">
                <input 
                    type={isShowPassword ? "text" : "password"} 
                    id={id}
                    className="
                        bg-gray-50 
                        border 
                        border-gray-300 
                        text-gray-900 
                        text-sm 
                        rounded-lg 
                        focus:ring-blue-500 
                        focus:border-blue-500 
                        block w-full p-2.5 
                        dark:bg-gray-700 
                        dark:border-gray-600 
                        dark:placeholder-gray-400 
                        dark:text-white 
                        dark:focus:ring-blue-500 
                        dark:focus:border-blue-500" 
                    placeholder={placeholder}
                    value={value} 
                    onChange={(e) => setValue(e.target.value) }
                    required={isRequire ? true : false}
                />
                 <div 
                        className="
                                    absolute 
                                    right-2.5
                                        bottom-2.5
                                    flex 
                                    items-center 
                                    pl-3
                                    cursor-pointer
                                        "
                        onClick={() => setisShowPassword(!isShowPassword)}
                >
                    {
                        isShowPassword ? <RiEyeLine className="text-black dark:text-white" /> : <RiEyeCloseLine className=" text-black dark:text-white" />
                    }
                </div>
            </div>
            {
                isError &&
                <p className="mt-2 text-sm text-red-500">{keterangan}</p>
            }
        </div>
    )
}