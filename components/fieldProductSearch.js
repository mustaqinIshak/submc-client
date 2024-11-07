import React, { useState } from 'react';
import { searchProdukTransaksi } from '../app/api/transaksi';
import AsyncSelect from 'react-select/async'

const ProductSearch = ({ onProductSelect }) => {

    const loadOptions = async (inputValue) => {
        if (!inputValue) {
            return [];
        }

        try {
            // Memanggil API untuk pencarian produk berdasarkan inputValue
            const response = await searchProdukTransaksi({keyword: inputValue});
            console.log(response)
            // Map hasil respon dari API menjadi format yang sesuai untuk react-select
            return response.filter(product => product["jumlah_stok"] > 0).map((product) => (
                {
                    value: {...product, quantity: 1, total: 0 , diskon_amount: 0, note: ""},
                    label: `${product.barcode} - ${product.name}(${product.size})`,
                }
            )
            );
        } catch (error) {
            console.error('Error loading products:', error);
            return [];
        }
    };

     // Menangani ketika produk dipilih
     const handleChange = (selectedOption) => {
        onProductSelect(selectedOption);
    };
    // const handleSearch = async () => {
    //     try {
    //         const response = await searchProdukTransaksi({ keyword: keyword });
    //         console.log(response)
    //         setProducts([...response]);
    //     } catch (error) {
    //         console.error('Error searching products:', error);
    //     }
    // };

    return (
        <div>
            {/* <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Search for a product..."
            />
            <button onClick={handleSearch}>Search</button>
            <ul>
                {products.length !== 0 ? products.map((product,index) => 
                    <li onClick={() => onProductSelect(product)} key={index}>
                       {product.barcode} - {product.name} - Size: {product.size} - Rp.{product.harga}
                    </li>
                )
                : null
                }
            </ul> */}
             <AsyncSelect
            cacheOptions
            loadOptions={loadOptions}  // Fungsi untuk load data secara async
            defaultOptions
            onChange={handleChange}   // Dipanggil saat produk dipilih
            placeholder="Search for a product..."
        />
        </div>
    );
};

export default ProductSearch;
