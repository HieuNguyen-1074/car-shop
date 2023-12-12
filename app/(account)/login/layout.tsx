import type { Metadata } from 'next'
import Link from 'next/link'
export const metadata: Metadata = {
    title: ' ',
    description: '',
}
export default function LoginLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            {children}

        </>
    )
}