'use client'

import React, { useState, useEffect } from 'react';
import TitlePage from '@/components/titlePage';
import {Select2Brand} from '../../../components/select2Brand'

const Report = () => {
    const [brand, setBrand] = useState({value:{id: 0, name: "All"}, label:"All"});
    const [tanggal, setTanggal] = useState(null)
    
    return(
        <div>
            <TitlePage title="Report" />
            <div className='relative max-w-sm col-span-2' >
                <label for="tanggal-expiration-input" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tanggal:</label>
                <input id="tanggal" type="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="12/23" required />
            </div>
            <Select2Brand value={brand} setValue={setBrand} />
        </div>
    )
}

export default Report;