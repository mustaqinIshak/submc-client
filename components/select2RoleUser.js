'use client'

import React, { useEffect, useState } from 'react';
import Select from "react-select"
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { getRoleUser } from '../app/api/roleUser';


export function Select2RoleUser ({value, setValue}) {
    const [data, setData] = useState([])
    const MySwal = withReactContent(Swal)

    const loadOption = async () => {
        try{
            const arr = []
            const response = await getRoleUser()
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
                        name: "silahkan Memilih role user"
                    }, 
                    label:"silahkan Memilih role user"
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
                Role user
            </label>
            <Select 
                options={data}
                value={value}
                className="basic-single"
                onChange={handleOption}
                isLoading={!data.length}
                required
            />
        </div>
    )
}