import Footer from '@/components/Footer'
import type { Metadata } from 'next'
export const metadata: Metadata = {
    title: ' ',
    description: '',
}
export default function ProductLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>   {children}  <Footer /></>
    )
}