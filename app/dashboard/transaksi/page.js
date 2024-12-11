'use client'

import React, { useState, useEffect } from 'react';
import ProductSearch from '../../../components/fieldProductSearch';
import SelectMetodePembayaran from '../../../components/select2MetodePembayaran'
import TitlePage from '@/components/titlePage';
import handleChangeRupiah from '@/helpers/handleChangRupiah';
import { ButtonPrimary } from '@/components/buttonPrimary';
import { store } from '@/app/api/transaksi';
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const Transaksi = () => {
    const MySwal = withReactContent(Swal)
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [total, setTotal] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [jenisMetode, setJenisMetode] = useState(null);
    const [errorMetode, setErrorMetode] = useState(false);
    const [errorProduk, setErrorProduk] = useState(false);

    const handleAddProduct = (product) => {
        const hargaDiskon = handleDiskon(product.value.harga, product.value.diskon);
        const totalHarga = product.value.quantity * hargaDiskon;
        product.value.total = totalHarga;
        setProducts([...products, product]);
    };

    const handleJenisPembayaran = (metode) => {
        setJenisMetode({...metode})
    }

    const handleRemoveProduct = (index) => {
        const removeProducts = products.filter((_, i) => i !== index);
        setProducts(removeProducts);
    };

    const handleChange = (index, field, value) => {
        const newProducts = [...products];
        newProducts[index]["value"][field] = parseFloat(value) || 0;
        const hargaDiskon = handleDiskon(newProducts[index]["value"].harga, newProducts[index]["value"].diskon);
        newProducts[index]["value"].total = newProducts[index]["value"].quantity * hargaDiskon;
        setProducts(newProducts);
    };

    const handleDiscountChange = (index, newDiscount) => {
        handleChange(index, 'diskon', newDiscount);
    };

    const handleDiskon = (harga_awal, persen_diskon) => {
        const diskon = harga_awal * (persen_diskon / 100);
        return harga_awal - diskon;
    };

    useEffect(() => {
        const totalAmount = products.reduce((acc, product) => acc + product.value.total, 0);
        const quantityAmount = products.reduce((acc, product) => acc + product.value.quantity, 0);
        setTotal(totalAmount);
        setTotalQuantity(quantityAmount);
    }, [products]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMetode(false);
        setErrorProduk(false);
        setLoading(true);

        if (!jenisMetode) {
            setErrorMetode(true);
            setLoading(false);
            return;
        }

        if (!products.length) {
            setErrorProduk(true);
            setLoading(false);
            return;
        }

        try {
            const payload = {
                produks: products.map(item => item.value),
                total,
                idMetodePembayaran: jenisMetode.value
            };

            const create = await store(payload);
            if (create.status) {
                MySwal.fire({
                    icon: "success",
                    title: "Transaksi Berhasil",
                });
                setProducts([]);
                setJenisMetode(null);
                setTotal(0);
                setTotalQuantity(0);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
            MySwal.fire({
                icon: "error",
                title: error.message || error,
            });
        }
    };

    return (
        <div>
            <TitlePage title="Transaksi" />
            <div className="p-4 md:p-8 dark:bg-gray-800">
                {errorProduk && (
                    <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                        <span className="font-medium">Maaf!</span> Anda harus memilih produk terlebih dahulu.
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <ProductSearch onProductSelect={handleAddProduct} />

                    <div className="relative overflow-x-auto mt-6">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th className="px-6 py-3">Product Name</th>
                                    <th className="px-6 py-3">Qty</th>
                                    <th className="px-6 py-3">Price</th>
                                    <th className="px-6 py-3">Discount</th>
                                    <th className="px-6 py-3">Price After Discount</th>
                                    <th className="px-6 py-3">Total</th>
                                    <th className="px-6 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index} className="bg-white dark:bg-gray-800">
                                        <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {product.label}
                                        </th>
                                        <td className="px-6 py-4">
                                            <input
                                                value={product.value.quantity}
                                                onChange={(e) => handleChange(index, 'quantity', e.target.value)}
                                                type="number"
                                                className="block py-2.5 px-0 w-24 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600"
                                                required
                                            />
                                        </td>
                                        <td className="px-6 py-4">Rp. {handleChangeRupiah(product.value.harga)}</td>
                                        <td className="px-6 py-4">
                                            <input
                                                type="number"
                                                value={product.value.diskon}
                                                onChange={(e) => handleDiscountChange(index, e.target.value)}
                                                className="block py-2.5 px-0 w-24 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-blue-600"
                                                required
                                            />
                                        </td>
                                        <td className="px-6 py-4">Rp. {handleChangeRupiah(handleDiskon(product.value.harga, product.value.diskon))}</td>
                                        <td className="px-6 py-4">Rp. {handleChangeRupiah(product.value.total)}</td>
                                        <td className="flex items-center px-6 py-4">
                                            <button onClick={() => handleRemoveProduct(index)} className="font-medium text-red-600 dark:text-red-500 hover:underline ms-3">Remove</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                            <tfoot>
                                <tr className="font-semibold text-gray-900 dark:text-white">
                                    <th className="px-6 py-3 text-base">Total</th>
                                    <td className="px-6 py-3">{totalQuantity}</td>
                                    <td className="px-6 py-3"></td>
                                    <td className="px-6 py-3"></td>
                                    <td className="px-6 py-3"></td>
                                    <td className="px-6 py-3">Rp. {handleChangeRupiah(total)}</td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>

                    <div className='flex flex-col gap-5 md:justify-between md:items-center md:flex-row'>
                        <div className='w-64'>
                            <label htmlFor="metode pembayaran" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Metode Pembayaran: </label>
                            <SelectMetodePembayaran onMetodeSelect={handleJenisPembayaran} />
                            <p className={`${errorMetode ? "mt-2 text-sm text-red-600 dark:text-red-500" : "hidden"}`}><span className="font-medium">Maaf!</span> anda harus memilih metode pembayaran terlebih dahulu</p>
                        </div>
                        <div>
                            <ButtonPrimary isLoading={loading} name='Checkout' type={"submit"}/>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Transaksi;
