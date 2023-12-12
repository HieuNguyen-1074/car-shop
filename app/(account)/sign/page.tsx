"use client"

import { users } from "@/api/user";
import { setUser } from "@/lib/redux/features/users/usersSlice";
import { useAppDispatch } from "@/lib/redux/hooks";
import { RootState } from "@/lib/redux/store";
import Link from "next/link";
import { useRouter } from "next/navigation";


import { SubmitHandler, useForm } from "react-hook-form";
import { useSelector } from "react-redux";


export default function RegisterPage() {
    interface InputFormSign {
        userName: string,
        password: string,
        rePassword: string
    }

    /**
     * Hook
     */
    // Hook state
    const userState = useSelector((state: RootState) => state?.users)
    const dispatch = useAppDispatch()
    // Hook router
    const router = useRouter()
    // Hook Form
    const { register, handleSubmit, watch, formState: { errors }, control, getValues } = useForm<InputFormSign>({
        defaultValues: {
            userName: userState.userLogined.userName,
            password: userState.userLogined.password,
            rePassword: "",

        }
    })
    /**
     * 
     * handle event
     */
    /**
     * handle submit form sign
     * @param data
     */
    const onSubmit: SubmitHandler<InputFormSign> = async (data) => {
        const dataCreated = await users.createUser(data)
        if (dataCreated) {
            dispatch(setUser({
                userName: data.userName,
            }))
            router.push('/login')

        }

    }
    /**
     * validate form
     */

    const requiredMatchPassword = (value: string) => value === getValues().password || "Enter match password above";
    const objectValidateRequired = {
        message: "This field is required",
        value: true
    }
    return (
        <>
            <div className="w-300 p-5 border-2 border-solid">
                <h1 className='text-center font-[700] mb-6 text-[2rem]'>
                    Account
                </h1>
                <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                    <input placeholder="Fill user name" className="border-[#3333] px-2 py-2  border-solid border-2 outline-none" {...register('userName', {
                        required: objectValidateRequired
                    })} />
                    {errors.userName && <span className="text-[10px] text-red-500">{errors.userName.message}</span>}
                    <input placeholder="Fill password" className="border-[#3333] px-2 py-2  border-solid border-2 outline-none" type="password" {...register('password', {
                        required: objectValidateRequired
                    })} />
                    {errors.password && <span className="text-[10px] text-red-500">{errors.password.message}</span>}
                    <input placeholder="Fill password" className="border-[#3333] px-2 py-2  border-solid border-2 outline-none" type="password" {...register('rePassword', {
                        validate: {
                            matchPassword: requiredMatchPassword
                        }
                    })} />
                    {errors.rePassword && <span className="text-[10px] text-red-500">{errors.rePassword.message}</span>}
                    <input type="submit" value="Sign In" className="cursor-pointer border-none bg-blue-500 w-full self-center py-2 text-white font-[500]" />
                </form>
                <div className=" mt-2  text-center ">
                    <span>Or</span>
                    <p className="cursor-pointer"> <Link href="/login"> Login</Link></p>
                </div>

            </div>

        </>
    );
}