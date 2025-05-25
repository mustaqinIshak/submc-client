"use client";
import TitlePage from "@/components/titlePage"
import { useState, useEffect } from "react";
import { getCountProduk } from "../api/produk";
import {getCountBrand} from "../api/brand";
import ChartDashboard from "@/components/chartDashboard.js"
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CountUp from 'react-countup';


export default function Dashboard() {
    const [jumlahAsset, setJumlahAsset] = useState(0);
    const [jumlahBrand, setJumlahBrand] = useState(0);
    const [jumlahTransaksiShopee, setJumlahTransaksiShopee] = useState(0);
    const [jumlahTransaksiWa, setJumlahTransaksiWa] = useState(0);
    const [jumlahTransaksiHomeStore, ssetJumlahTransaksiToko] = useState(0);
    const MySwal = withReactContent(Swal)
    const countAll = async () => {
        try {
            // setLoading(true)
            const resultProduk = await getCountProduk()
            if(resultProduk) {
                setJumlahAsset(resultProduk)
                const resultBrand = await getCountBrand()
                if(resultBrand) {
                    setJumlahBrand(resultBrand)
                }
            }
        } catch (error) {
            // setLoading(false)
            MySwal.fire({
                icon: "error",
                title: "Gagal mengambil Data",
            });
        }
    }
    useEffect(() => {
        countAll();
    }, [])
    return (
        <>
            <TitlePage title="Dashboard" />
            <div className="p-4 md:p-8 dark:bg-gray-800" id="stats">
                <dl className="grid place-items-center max-w-screen-xl grid-cols-2 gap-8 p-4 mx-auto text-gray-900 sm:grid-cols-4  dark:text-white sm:p-8">
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">
                            <CountUp start={0} end={jumlahAsset} duration={2.75} />
                        </dt>
                        <dd className="text-gray-500 dark:text-gray-400">Jumlah Asset</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">
                            <CountUp start={0} end={jumlahBrand} duration={2.75} />
                        </dt>
                        <dd className="text-gray-500 dark:text-gray-400">Jumlah Brand</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">
                            <CountUp start={0} end={jumlahTransaksiShopee} duration={2.75} />
                        </dt>
                        <dd className="text-gray-500 dark:text-gray-400">Transaksi By Shopee</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">
                            <CountUp start={0} end={jumlahTransaksiWa} duration={2.75} />
                        </dt>
                        <dd className="text-gray-500 dark:text-gray-400">Transaksi By WA</dd>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <dt className="mb-2 text-3xl font-extrabold">
                            <CountUp start={0} end={jumlahTransaksiHomeStore} duration={2.75} />
                        </dt>
                        <dd className="text-gray-500 dark:text-gray-400">Transaksi By Home Store</dd>
                    </div>
                </dl>
            </div>
            <ChartDashboard />
        </>
    )
}