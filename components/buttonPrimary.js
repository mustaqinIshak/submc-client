import SpinnerLoading from "../components/spinner"

export const ButtonPrimary = ({
    type, 
    name = "button", 
    action, 
    width = "w-auto",
    isLoading,
}) => {
    return(
        <>
            <button
            type={type}
            className={`
                text-white 
                bg-gray-800 
                hover:bg-gray-900 
                focus:outline-none 
                focus:ring-4 
                focus:ring-gray-300 
                font-medium 
                rounded-lg 
                text-sm 
                px-5 
                py-2.5 
                mr-2 
                mb-2 
                dark:bg-gray-800 
                dark:hover:bg-gray-700 
                dark:focus:ring-gray-700 
                dark:border-gray-700
                ${width}                      
                `}
                onClick={action}
                disabled={isLoading ? true : false }
            >
                {isLoading ? <SpinnerLoading /> : name}
            </button>
        </>
    )
}