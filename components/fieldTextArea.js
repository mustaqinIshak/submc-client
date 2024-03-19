import { useMemo } from "react";
import dynamic from "next/dynamic";
import { Quill } from 'react-quill';
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
    const ReactQuill = useMemo(() => dynamic(() => import('react-quill'), { ssr: false }),[]);

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
            [{ size: [] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' },
            { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            [{ 'align': [] }], // Alignment options
            ['clean']
        ],
        clipboard: {
            matchVisual: false,
          }
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike', 'blockquote',
        'list', 'bullet', 'indent',
        'link', 'image', 'align' // Alignment formats
      ];
    return(
        <div className="mb-6">
            <label htmlFor={id} className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                {name}
            </label>
            <ReactQuill
                value={value}
                onChange={setValue}
                modules={modules}
                id={id}
                placeholder={placeholder}
                formats={formats}
                theme="snow" // or 'bubble'
            />
            {
                isError &&
                <p className="mt-2 text-sm text-red-500">{keterangan}</p>
            }
        </div>
    )
}