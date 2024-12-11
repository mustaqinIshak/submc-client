import React, { useState } from 'react';
import { metodePembayaran } from '../app/api/metodePembayaran';
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

const SelectMetodePembayaranReport = ({ onMetodeSelect }) => {

    const options = async (inputValue) => {
        try {
            // Memanggil API untuk pencarian produk berdasarkan inputValue
            const result = [{
                id: 0,
                name: "all",
            }]
            const response = await metodePembayaran();
            for(let i = 0; i < response.length;i++) {
                result.push({
                    id: response[i].id,
                    name: response[i].name,
                })
            }
            console.log('ini metode',response)
            // Map hasil respon dari API menjadi format yang sesuai untuk react-select
            return result.map((jenisPembayaran) => (
                {
                    value: jenisPembayaran.id,
                    label: jenisPembayaran.name,
            }));
        } catch (error) {
            console.error('Error loading Metode Pembayaran:', error);
            return [];
        }
    };

     const handleChange = (selectedOption) => {
        onMetodeSelect(selectedOption);
    };

    return (
        <div className='w-full'>
             <AsyncSelect
            cacheOptions
            loadOptions={options}  // Fungsi untuk load data secara async
            defaultOptions
            onChange={handleChange}   // Dipanggil saat produk dipilih
            placeholder="Search for a product..."
        />
        </div>
    );
};

export default SelectMetodePembayaranReport;
