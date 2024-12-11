'use client'

import { useState, useEffect } from 'react';
import { BarChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import { getCharts } from '../app/api/dashboard';
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

function ChartDashboard() {
    const MySwal = withReactContent(Swal)
    const [data, setData] = useState([]);
    const [period, setPeriod] = useState('day'); 
    
    // Default period
    const getMonthName = (monthNumber) => {
      const monthNames = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni",
        "Juli", "Agustus", "September", "Oktober", "November", "Desember"
      ];
      return monthNames[monthNumber - 1];
    };
  
    // Fetch data dari Lumen API berdasarkan period yang dipilih
    useEffect(() => {
      const fetchData = async () => {
        try {
          const payload = {
            period
          }
          const result = await getCharts(payload)
          const formattedData = result.map(item => {
            if (period === 'month') {
              return { ...item, month: getMonthName(item.month) };
            }
            return item;
          });
            
            setData([...formattedData])
        } catch (error) {
          MySwal.fire({
            icon: "error",
            title: "Gagal mengambil data chart",
        });
        }
      };
  
      fetchData();
    }, [period]);
  
    return (
      <div className='w-full h-full'>
        <h1>Chart Data</h1>
        <div>
          <label>Pilih Periode: </label>
          <select value={period} onChange={(e) => setPeriod(e.target.value)}>
            <option value="day">Hari</option>
            <option value="month">Bulan</option>
            <option value="year">Tahun</option>
          </select>
        </div>
        {/* <ResponsiveContainer width="100%" height="100%"> */}
          <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={period === 'day' ? 'date' : period} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="total" fill="#8884d8" />
          </BarChart>
        {/* </ResponsiveContainer> */}
      </div>
    );
  }
  
  export default ChartDashboard;