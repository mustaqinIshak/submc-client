
export const FieldTextArea = ({
    name = "field text Area", 
    id = "field text Area", 
    placeholder = "placeholder", 
    isRequire = true, 
    value,
    setValue,
    isError,
    keterangan 
}) => {
    return(
        <div className="mb-6">
            <label htmlFor={id} className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {name}
            </label>
            <textarea
                rows="4"
                id={id}
                className="
                    block 
                    p-2.5 
                    w-full 
                    text-sm 
                    text-gray-900 
                    bg-gray-50 
                    rounded-lg border 
                    border-gray-300 
                    focus:ring-blue-500 
                    focus:border-blue-500 
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
            {
                isError &&
                <p className="mt-2 text-sm text-red-500">{keterangan}</p>
            }
        </div>
    )
}