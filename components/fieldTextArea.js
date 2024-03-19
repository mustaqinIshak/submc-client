import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
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
    const modules = {
        toolbar: [
            [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{'list': 'ordered'}, {'list': 'bullet'}, 
            {'indent': '-1'}, {'indent': '+1'}],
            ['link', 'image', 'video'],
            ['clean']
        ],
    };
    return(
        <div className="mb-6">
            <label htmlFor={id} className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {name}
            </label>
            <ReactQuill
                value={value}
                onChange={setValue}
                modules={modules}
                theme="snow" // or 'bubble'
            />
            {/* <textarea
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
            /> */}
            {
                isError &&
                <p className="mt-2 text-sm text-red-500">{keterangan}</p>
            }
        </div>
    )
}