
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import iconGooglePlay from '../../assets/images/icon-google-play.png';
import iconMicrosf from '../../assets/images/icon-microsoft.png';
import Footer from '@/components/Footer';
interface AccountLayoutProps {
    children: React.ReactNode,

    footer?: React.ReactNode
}
export default function AccountLayout({ children, footer }: AccountLayoutProps) {


    return (

        <>
            <div className='  w-full h-full flex flex-col items-center justify-center'>

                <div >
                    {children}
                </div>
                <div className='mt-10 '>
                    <p className='text-center mb-4'>Get the app</p>
                    <div className='max-w-[350px] flex justify-center items-center gap-2 '>
                        <Image className='w-[50%] ' alt='icon google' src={iconGooglePlay} />
                        <Image className='w-[50%] ' alt='icon mic' src={iconMicrosf} />
                    </div>
                </div>
                <Footer />
            </div>


        </>
    )
}