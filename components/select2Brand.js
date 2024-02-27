'use client'

import React, { useEffect, useState } from 'react';
import Select from "react-select"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {getIndex} from "../app/api/brand"


export function Select2Brand ({value, setValue, isError, keterangan}) {
    const [data, setData] = useState([])
    const MySwal = withReactContent(Swal)

    const loadOption = async () => {
        try{
            const arr = []
            const response = await getIndex()
            console.log(response)
            if(response) {
                response.map((item) => {
                    const payload = {
                        value: {
                            id: item["id"],
                            name: item["name"],
                        },
                        label: `${item["name"]}`,
                    }
                    arr.push(payload)
                });
                setData(arr);
            } else {
                const defaultData = [{
                    value: {
                        id: 0,
                        name: "Silahkan Memilih Brand"
                    }, 
                    label:"Silahkan Memilih Brand"
                }]
                setData(defaultData);
            }
        }
        catch(err) {
            MySwal.fire({
                icon: "error",
                title: err.message,
            });
        }
    };
    
    
    useEffect( () => {
      loadOption()
    },[])

    const handleOption = (value) => {
        setValue(value)
    }
    return (
        <div className="mb-6">
            <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Brand
            </label>
            <Select 
                options={data}
                value={value}
                className="basic-single"
                onChange={handleOption}
                isLoading={!data.length}
                required
            />
            {
                isError &&
                <p className="mt-2 text-sm text-red-500">{keterangan}</p>
            }
        </div>
    )
}