"use client"

import { users } from "@/api/user.js";
import { RootState } from "@/lib/redux/store";
import Link from "next/link";
import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Loading from "../loading";


export default function LoginPage() {
    interface InputFormLogin {
        userName: string,
        password: string
    }
    const userState = useSelector((state: RootState) => state?.users)
    const [loading, setLoading] = useState<boolean>(false)

    const { register, handleSubmit, watch, formState: { errors }, setError, control } = useForm<InputFormLogin>({
        defaultValues: {
            userName: userState.userLogined.userName,
            password: userState.userLogined.password
        }
    })
    const onSubmit: SubmitHandler<InputFormLogin> = async (data) => {
        setLoading(true)
        const { userName, password } = data
        const userList = await users.getUser()
        if (userList) {
            const userDataByName = userList.find((user: User) => user.userName === userName)
            const userDataByPasswordAndName = userList.find((user: User) => user.userName === userName && user.password === password)
            if (!userDataByName) {

                setError("userName", { message: "User does not exist" }, {
                    shouldFocus: true
                })
                setLoading(false)

            } else {
                if (!userDataByPasswordAndName) {
                    setError("password", { message: "Password doest's match" }, {
                        shouldFocus: true
                    })
                    setLoading(false)
                }
            }

        }

    }
    return (
        <>
            <div className="w-300 p-5 border-2 border-solid">
                {loading && <Loading />}
                <h1 className='text-center font-[700] mb-6 text-[2rem]'>
                    Account
                </h1>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Fill user name" className="border-[#3333] px-2 py-2 mb-0 border-solid border-2 outline-none" {...register('userName', {
                        required: {
                            message: "This fill is required",
                            value: true
                        }
                    })} />
                    {errors.userName && <span className="text-[10px] text-red-500">{errors.userName.message}</span>}
                    <input placeholder="Fill password" className="border-[#3333] px-2 py-2  border-solid border-2 outline-none" type="password" {...register('password', {
                        required: {
                            message: "This fill is required",
                            value: true
                        }
                    })} />
                    {errors.password && <span className="text-[10px] text-red-500" >{errors.password.message}</span>}
                    <input type="submit" value="Login" className="cursor-pointer border-none bg-blue-500 w-full self-center py-2 text-white font-[500]" />
                </form>
                <div className=" mt-2  text-center ">
                    <span>Or</span>
                    <p className="cursor-pointer">Forgot password ? </p>
                </div>

            </div>
            <div className="max-w-300 w-300 mt-2 border-2 text-center">
                <p>Dont have an account? <Link href={"/sign"} className="cursor-pointer text-blue-500">Sign up</Link> </p>
            </div>
        </>
    );
}