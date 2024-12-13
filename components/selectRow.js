export const SelectRow = ({value, setValue, id, width, name}) =>  {
    const jumlahRow = [
        10, 25, 50, 100
    ]
    return(
        <div className="">
            <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {name}
            </label>
        <select id={id} 
                className={`
                        bg-gray-50 
                        border 
                        border-gray-300 
                        text-gray-900 
                        text-sm 
                        rounded-lg 
                        focus:ring-blue-500 
                        focus:border-blue-500 
                        block 
                        ${width ? `${width}` : `w-auto`}  
                        p-2.5 
                        `}
                value={value}
                onChange={(e) => setValue(e.target.value)}
        >
           
        {
            jumlahRow.map((item, index) => {
                return item === "10" ?
                <option defaultValue={item} key={index} value={item}>{item}</option>
                :
                <option key={index} value={item}>{item}</option>                                                
            })
        }
             
            
        </select>
    </div>
    )
}