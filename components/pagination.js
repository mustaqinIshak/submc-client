'use client'

export default function Pagination({first, last, total, pageNumber, pageHandle, previousHandle, nextHandle}) {
    const loopArray = Array.from({ length: last }, (_, index) => index);
    return(
        <>
            {
                last > first &&
                <nav className="mt-6 w-full flex items-center justify-center" aria-label="Page navigation example">
                    <ul className="inline-flex -space-x-px text-base h-10">
                        <li>
                            <span 
                                onClick={previousHandle} 
                                className={`
                                    flex 
                                    items-center 
                                    justify-center 
                                    px-4 
                                    h-10 
                                    ml-0 
                                    leading-tight 
                                    text-gray-500 
                                    bg-white border 
                                    border-gray-300 
                                    rounded-l-lg 
                                    hover:bg-gray-100 
                                    hover:text-gray-700 
                                    dark:bg-gray-800 
                                    dark:border-gray-700 
                                    dark:text-gray-400 
                                    dark:hover:bg-gray-700 
                                    dark:hover:text-white
                                    `}
                            >
                                Prev
                            </span>
                        </li>
                        {
                            loopArray.map((item, index) => (
                                <li key={index} onClick={() => pageHandle(item+1)}>
                                    <span 
                                        className={`
                                            ${pageNumber == item + 1 ? "text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700" : "leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 "}
                                            flex 
                                            items-center 
                                            justify-center 
                                            px-4 
                                            h-10 
                                            border
                                            border-gray-300 
                                            `}
                                    >
                                        {item + 1}
                                    </span>
                                </li>
                            ))
                        }
                        <li>
                            <span 
                                onClick={nextHandle} 
                                className={`
                                 
                                    flex 
                                    items-center 
                                    justify-center 
                                    px-4 
                                    h-10 
                                    leading-tight 
                                    text-gray-500 
                                    bg-white border 
                                    border-gray-300 
                                    rounded-r-lg 
                                    hover:bg-gray-100 
                                    hover:text-gray-700 
                                    dark:bg-gray-800 
                                    dark:border-gray-700 
                                    dark:text-gray-400 
                                    dark:hover:bg-gray-700 
                                    dark:hover:text-white
                                    `}
                            >
                                Next
                            </span>
                        </li>
                    </ul>
                </nav>
            }
        </>
    )
}