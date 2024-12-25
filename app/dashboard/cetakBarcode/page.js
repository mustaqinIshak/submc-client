'use client';

import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { searchBarcode } from "@/app/api/cetakBarcode.js";
import handleChangeRupiah from "../../../helpers/handleChangRupiah.js"
import JsBarcode from "jsbarcode";


const BarcodeManager = () => {
    const [horizontalSpacing, setHorizontalSpacing] = useState(1); // Jarak horizontal antar barcode (cm)
    const [verticalSpacing, setVerticalSpacing] = useState(1); // Jarak vertikal antar barcode (cm)
    const [barcodeWidth, setBarcodeWidth] = useState(3.5); // Lebar barcode (cm)
    const [barcodeHeight, setBarcodeHeight] = useState(1.6); // Tinggi barcode (cm)
    const [fontSize, setFontSize] = useState(8); // Ukuran font untuk teks barcode
    const [printList, setPrintList] = useState([]); // Daftar barcode untuk dicetak

    const fetchBarcodeOptions = async (inputValue) => {
        const payload = { keyword: inputValue || "" };
        try {
            const response = await searchBarcode(payload);
            return response.map((barcode) => ({
                value: barcode.id,
                label: `${barcode.name} - (${barcode.size})`,
                ...barcode,
            }));
        } catch (error) {
            console.error("Error fetching barcodes:", error);
            return [];
        }
    };

    const handleSelectBarcode = (selectedOption) => {
        const existing = printList.find((item) => item.id === selectedOption.id);
        if (!existing) {
            setPrintList([...printList, { ...selectedOption, quantity: 1 }]);
        }
    };

    const handleUpdateQuantity = (index, newQuantity) => {
        const updatedList = [...printList];
        updatedList[index].quantity = parseInt(newQuantity) || 1;
        setPrintList(updatedList);
    };

    const handleRemoveFromPrintList = (index) => {
        const updatedList = printList.filter((_, i) => i !== index);
        setPrintList(updatedList);
    };

    const handlePrint = () => {
        const printContainer = document.getElementById("barcode-container");
    
        if (!printContainer) {
            console.error("Container untuk barcode tidak ditemukan.");
            return;
        }
    
        // Bersihkan isi container sebelumnya
        printContainer.innerHTML = "";
    
        // Terapkan gaya Flexbox untuk tata letak horizontal
        printContainer.style.display = "flex";
        printContainer.style.flexWrap = "wrap";
        printContainer.style.gap = `${horizontalSpacing}mm`;
    
        printList.forEach((item) => {
            console.log(item)
            for (let i = 0; i < item.quantity; i++) {
                const barcodeWrapper = document.createElement("div");
                barcodeWrapper.style.width = `${barcodeWidth}cm`;
                barcodeWrapper.style.height = `${barcodeHeight}cm`;
                barcodeWrapper.style.marginBottom = `${verticalSpacing}mm`;
                barcodeWrapper.style.display = "flex";
                barcodeWrapper.style.flexDirection = "column";
                barcodeWrapper.style.alignItems = "center";
                barcodeWrapper.style.justifyContent = "center";

                const productName = document.createElement("p");
                productName.textContent = `${item.name} (${item.size})` || "Nama Produk";
                productName.style.margin = "0";
                productName.style.fontSize = `${fontSize}px`;
                productName.style.textAlign = "center";

                // Tambahkan teks harga produk
                const productPrice = document.createElement("p");
                productPrice.textContent = item.harga ? `Rp ${handleChangeRupiah(item.harga)}` : "Harga";
                productPrice.style.margin = "0";
                productPrice.style.fontSize = `${fontSize}px`;
                productPrice.style.textAlign = "center";
    
                const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                JsBarcode(svg, item.barcode, {
                    format: "CODE128",
                    width: barcodeWidth / 5,
                    height: barcodeHeight * 10,
                    displayValue: true,
                    fontSize: fontSize,
                    margin: 1,
                });
    
                barcodeWrapper.appendChild(svg);
                barcodeWrapper.appendChild(productName);
                barcodeWrapper.appendChild(productPrice);
                printContainer.appendChild(barcodeWrapper);
            }
        });
    
        // Cetak elemen dengan CSS print
        setTimeout(() => {
            window.print();
        }, 500);
    };
    

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Barcode Management</h1>

            <div className="mb-4">
                <h2 className="font-bold text-lg mb-2">Search Barcode</h2>
                <AsyncSelect
                    cacheOptions
                    loadOptions={fetchBarcodeOptions}
                    onChange={handleSelectBarcode}
                    placeholder="Search barcode by name or code"
                />
            </div>

            <table className="w-full border">
                <thead>
                    <tr>
                        <th className="border px-4 py-2">Product Name</th>
                        <th className="border px-4 py-2">Barcode</th>
                        <th className="border px-4 py-2">Quantity</th>
                        <th className="border px-4 py-2">Harga</th>
                        <th className="border px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {printList.map((item, index) => (
                        <tr key={item.id}>
                            <td className="border px-4 py-2">{item.name} - {item.size}</td>
                            <td className="border px-4 py-2">{item.barcode}</td>
                            <td className="border px-4 py-2">
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) =>
                                        handleUpdateQuantity(index, e.target.value)
                                    }
                                    className="border px-2 py-1"
                                />
                            </td>
                            <td className="border px-4 py-2">Rp. {handleChangeRupiah(item.harga)}</td>
                            <td className="border px-4 py-2">
                                <button
                                    onClick={() => handleRemoveFromPrintList(index)}
                                    className="text-red-500 ml-2"
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="flex gap-4 mt-4">
                <div>
                    <label>Horizontal Spacing (cm):</label>
                    <input
                        type="number"
                        step="0.1"
                        min="0"
                        value={horizontalSpacing}
                        onChange={(e) => setHorizontalSpacing(parseFloat(e.target.value))}
                        className="border px-2 py-1"
                    />
                </div>
                <div>
                    <label>Vertical Spacing (cm):</label>
                    <input
                        type="number"
                        step="0.1"
                        min="0"
                        value={verticalSpacing}
                        onChange={(e) => setVerticalSpacing(parseFloat(e.target.value))}
                        className="border px-2 py-1"
                    />
                </div>
                <div>
                    <label>Barcode Width (cm):</label>
                    <input
                        type="number"
                        step="0.1"
                        min="1"
                        value={barcodeWidth}
                        onChange={(e) => setBarcodeWidth(parseFloat(e.target.value))}
                        className="border px-2 py-1"
                    />
                </div>
                <div>
                    <label>Barcode Height (cm):</label>
                    <input
                        type="number"
                        step="0.1"
                        min="1"
                        value={barcodeHeight}
                        onChange={(e) => setBarcodeHeight(parseFloat(e.target.value))}
                        className="border px-2 py-1"
                    />
                </div>
                <div>
                    <label>Font Size (px):</label>
                    <input
                        type="number"
                        step="1"
                        min="8"
                        value={fontSize}
                        onChange={(e) => setFontSize(parseInt(e.target.value))}
                        className="border px-2 py-1"
                    />
                </div>
            </div>

            <button
                onClick={handlePrint}
                className="bg-green-500 text-white px-4 py-2 mt-4"
            >
                Print Barcodes
            </button>

            <div id="barcode-container" className="mt-4"></div>
        </div>
    );
};

export default BarcodeManager;
