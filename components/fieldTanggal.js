"use client"

export default function FieldTanggal({name, value, setValue, handleChange, isError, keterangan, isRequire}) {
    return(
        <div className="mb-6 flex gap-3 items-center">
            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{name} :</label>
            <div className="relative max-w-sm">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
                </div>
                <input 
                        type="date" 
                        className="
                                    bg-gray-50 
                                    border 
                                    border-gray-300 
                                    text-gray-900 
                                    text-sm 
                                    rounded-lg 
                                    focus:ring-blue-500 
                                    focus:border-blue-500 
                                    block 
                                    mx:w-48  
                                    pl-10 
                                    p-2.5 
                                    " 
                        placeholder="Select date"
                        value={value}
                        onChange={(e) => {setValue(e.target.value)}} 
                        required={isRequire ? true : false}
                />
            </div>
            {
                isError &&
                <p className="mt-2 text-sm text-red-500">{keterangan}</p>
            }
        </div>
    )
}