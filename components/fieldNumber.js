import HandleKeyPress from "../helpers/handleKeyPress";

export const FieldNumber = ({
    name = "field Number", 
    id = "field Number", 
    placeholder = "placeholder", 
    isRequire = true,
    width, 
    value,
    setValue,
    isError,
    keterangan, 
}) => {
    const handleInput = (e) => {
        const inputValue = e.target.value;
        // Allow digits and a single decimal point
        const newValue = inputValue.replace(/[^0-9.]/g, "");
        return setValue(newValue);
      };
    return(
        <div className="mb-6">
            <label htmlFor={id} className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {name}
            </label>
            <input 
                type="text" 
                id={id}
                className=
                    {`${width ? "w-"+width : "w-full"}
                    "bg-gray-50 
                    border 
                    border-gray-300 
                    text-gray-900 
                    text-sm 
                    rounded-lg 
                    focus:ring-blue-500 
                    focus:border-blue-500 
                    block 
                    p-2.5 
                    dark:bg-gray-700 
                    dark:border-gray-600 
                    dark:placeholder-gray-400 
                    dark:text-white 
                    dark:focus:ring-blue-500 
                    dark:focus:border-blue-500"`} 
                placeholder={placeholder}
                onKeyDown={HandleKeyPress}
                value={value} 
                pattern="[0-9.]*"
                onChange={handleInput}
                required={isRequire ? true : false}
            />
            {
                isError &&
                <p className="mt-2 text-sm text-red-500">{keterangan}</p>
            }
        </div>
    )
}