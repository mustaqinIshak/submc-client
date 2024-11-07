import React, { useState } from 'react';
import { metodePembayaran } from '../app/api/metodePembayaran';
import Select from 'react-select'
import AsyncSelect from 'react-select/async'

const SelectMetodePembayaran = ({ onMetodeSelect }) => {

    const options = async (inputValue) => {
        try {
            // Memanggil API untuk pencarian produk berdasarkan inputValue
            const response = await metodePembayaran();
            console.log('ini metode',response)
            // Map hasil respon dari API menjadi format yang sesuai untuk react-select
            return response.map((jenisPembayaran) => (
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

export default SelectMetodePembayaran;
