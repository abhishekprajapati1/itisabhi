'use client';
import { ILoginForm } from '@/lib/form';
import useLogin from '@/lib/mutations/auth/useLogin';
import React from 'react'
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const { mutate, isPending } = useLogin();
    const { register, handleSubmit } = useForm<ILoginForm>({
        mode: 'all',
        defaultValues: {
            password: "",
            username: ""
        }
    });
    const onSubmit = (data: ILoginForm) => {
        console.log("see this", data);
        mutate(data);
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)} className='h-full grid place-content-center'>
            <div className='flex flex-col gap-4 w-[250px] lg:w-[350px] p-6 shadow-xl rounded-xl'>
                <h1 className='text-lg font-semibold'>Welcome back</h1>
                <input
                    type="text"
                    placeholder='username'
                    {...register('username')}
                />
                <input
                    type="password"
                    placeholder='password'
                    {...register('password')}
                />
                <button type="submit" className='bg-green-500 hover:bg-green-400 text-white rounded-md'>
                    Login
                </button>
            </div>
        </form>
    )
}

export default LoginPage