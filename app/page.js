'use client'
import Image from 'next/image'
import Head from 'next/head'
// import type { NextPage } from 'next'
import Login from './login/page'
import { useEffect } from 'react'
import SpinnerLoading from '@/components/spinner'
import { useRouter } from "next/navigation"

const Home = () => {
  const router = useRouter();
  
  useEffect(() => {
    if(localStorage.getItem('token')) {
      router.replace("/dashboard")
    } else {
      router.replace("/login")
    }
  },[])
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <SpinnerLoading />
    </div>
  )
}

export default Home;
