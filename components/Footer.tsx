import Link from 'next/link'
import React from 'react'

export default function Footer() {
    return (
        <div className='w-[100vw] h-[100] fixed bottom-[40px]'>

            <ul className='  flex flex-row gap-3 justify-center items-center'>
                <li>
                    <Link href={""}>Meta </Link>
                </li>
                <li>
                    <Link href={""}> About</Link>
                </li>
                <li>
                    <Link href={""}>Blog</Link>
                </li>
                <li>
                    <Link href={""}>Jobs</Link>
                </li>

                <li>
                    <Link href={""}>API  </Link>
                </li>
                <li>
                    <Link href={""}>
                        Terms </Link>
                </li>
                <li>
                    <Link href={""}>Locations</Link>
                </li>
                <li>
                    <Link href={""}>Instargram Lite</Link>
                </li>
                <li>
                    <Link href={""}></Link>
                </li>
                <li>
                    <Link href={""}>Contact Uploading & Non-Users</Link>
                </li>
                <li>
                    <Link href={""}>Meta Verified</Link>
                </li>
            </ul>
        </div>
    )
}
