import Image from "next/image";


import iconLoading from "../../assets/images/b7bcdb32152391.57a57ef801018.gif"

export default function Loading() {
    // Or a custom loading skeleton component
    return (
        <div className="fixed bg-[rgba(0,0,0,.5)] flex items-center justify-center h-full w-full top-0 left-0">
            <Image width={100} alt="loading-icon" src={iconLoading} />
        </div>
    )
}