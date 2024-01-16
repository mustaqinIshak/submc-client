

function ButtonAllert({name = "button" , action = () => {console.log("no function in button allert")}, width = "w-auto"}) {

    return(
        <>
            <button
            type="button"
            className={`
                focus:outline-none 
                text-white 
                bg-red-700 
                hover:bg-red-800 
                focus:ring-4 
                focus:ring-red-300 
                font-medium 
                rounded-lg 
                text-sm 
                px-5 
                py-2.5 
                mr-2 
                mb-2 
                dark:bg-red-600 
                dark:hover:bg-red-700 
                dark:focus:ring-red-900
                ${width}                      
                `}
                onClick={action}
            >
                 {name}
            </button>
        </>
    )
}

export default ButtonAllert;