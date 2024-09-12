"use client"
import ButtonAllert from "@/components/buttonAllert"
import {useState, useEffect} from "react"
import {ButtonPrimary} from "@/components/buttonPrimary"
import { FieldText } from "@/components/fieldText"
import {FieldPassword} from "@/components/fieldPassword"
import Image from "next/image"
import login from "../api/login"
import { useRouter } from "next/navigation"
import "./login.css"
import React from "react"

export default function Login() {
    const router = useRouter();
    const [name, setName] = useState("");
    const [password, setpassword] = useState("");
    const [isShowPassword, setisShowPassword] = useState(false);
    const [isError, setIsError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const showText = () => {
        console.log("hello")
    }

    useEffect(() => {
        if(localStorage.getItem('token')) {
          router.replace("/dashboard")
        } else {
          router.replace("/login")
        }
      },[])

    const fetchLogin = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        setIsError("");
        try {
            const payload = {
                username: name,
                password: password,
            }
            const result = await login(payload);
            if(result) {
                localStorage.setItem("token", result)
                router.replace('/');
            }
            setIsLoading(false);
        } catch (error) {
            // console.log(error.response.data)
            setIsError("Username atau password anda salah")
            setIsLoading(false);
        }
    }

    return (
            <div className="center-login">
                <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className="mb-3 flex flex-col items-center">
                        <Image className="mb-3" alt="cmm apparel" src={"/logo/logoblack.png"} width={150} height={150} />
                        <span className="font-semibold" >Portal CMS</span>
                    </div>
                    {
                        isError && 
                        <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
                            <span className="font-medium">Peringatan!</span> {isError}
                        </div>
                    }
                    <form onSubmit={fetchLogin} >
                        <FieldText
                            name="Username"
                            id="username"
                            isRequire={true}
                            placeholder="username" 
                            value={name} 
                            setValue={setName} />
                        <FieldPassword
                            name="Password"
                            id="password"
                            placeholder="password123456" 
                            isRequire={true}
                            value={password} 
                            setValue={setpassword} 
                            isShowPassword={isShowPassword} 
                            setisShowPassword={setisShowPassword} 
                        />
                        <ButtonPrimary isLoading={isLoading}  name="Login" width="w-full" />
                    </form>
                </div>
            </div>
    )
}