export default function Checkbox({title, value, setValue}) {
    return(
        <>
            <div className="flex items-center">
                <input checked={value} id={title} type="checkbox" value={value} onChange={(e) => setValue(!e.target.value) } className={`w-4 h-4 ${value ? "text-blue-600" : null} bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600`}/>
                <label forhtml={title} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{title}</label>
            </div>
        </>
    )
}