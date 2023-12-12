import Image from "next/image"
import { useState } from "react"

const CarDetailLeft = () => {
    const [imageUrl, setImageUrl] = useState<string>('')
    return (
        <div className="flex justify-center items-center">
            <div className="h-[50vh]  overflow-auto">
                <div className="flex gap-[4px] flex-col flex-nowrap w-[60px]  overflow-auto  justify-center items-center" >
                    <div className="w-[60px] h-[60px] cursor-pointer  rounded-[6px] border-[1px] border-[#3333] shadow-2xl"> <Image alt="image list" width={1000} height={1000} src={"https://firebasestorage.googleapis.com/v0/b/foodimg-13877.appspot.com/o/cars%2F13.jpg?alt=media&token=237f443a-0ce7-46fa-a382-f71dfbdc9fe8"} />
                    </div>
                    <Image className="w-[60px] h-[60px] cursor-pointer object-contain rounded-[6px] border-[1px] border-[#3333] shadow-2xl" alt="image list" width={1000} height={1000} src={"https://firebasestorage.googleapis.com/v0/b/foodimg-13877.appspot.com/o/cars%2F13.jpg?alt=media&token=237f443a-0ce7-46fa-a382-f71dfbdc9fe8"} />

                    <Image className="w-[60px] h-[60px] cursor-pointer object-contain rounded-[6px] border-[1px] border-[#3333] shadow-2xl" alt="image list" width={1000} height={1000} src={"https://firebasestorage.googleapis.com/v0/b/foodimg-13877.appspot.com/o/cars%2F13.jpg?alt=media&token=237f443a-0ce7-46fa-a382-f71dfbdc9fe8"} />

                    <Image className="w-[60px] h-[60px] cursor-pointer object-contain rounded-[6px] border-[1px] border-[#3333] shadow-2xl" alt="image list" width={1000} height={1000} src={"https://firebasestorage.googleapis.com/v0/b/foodimg-13877.appspot.com/o/cars%2F13.jpg?alt=media&token=237f443a-0ce7-46fa-a382-f71dfbdc9fe8"} />

                    <Image className="w-[60px] h-[60px] cursor-pointer object-contain rounded-[6px] border-[1px] border-[#3333] shadow-2xl" alt="image list" width={1000} height={1000} src={"https://firebasestorage.googleapis.com/v0/b/foodimg-13877.appspot.com/o/cars%2F13.jpg?alt=media&token=237f443a-0ce7-46fa-a382-f71dfbdc9fe8"} />

                    <Image className="w-[60px] h-[60px] cursor-pointer object-contain rounded-[6px] border-[1px] border-[#3333] shadow-2xl" alt="image list" width={1000} height={1000} src={"https://firebasestorage.googleapis.com/v0/b/foodimg-13877.appspot.com/o/cars%2F13.jpg?alt=media&token=237f443a-0ce7-46fa-a382-f71dfbdc9fe8"} />

                    <Image className="w-[60px] h-[60px] cursor-pointer object-contain rounded-[6px] border-[1px] border-[#3333] shadow-2xl" alt="image list" width={1000} height={1000} src={"https://firebasestorage.googleapis.com/v0/b/foodimg-13877.appspot.com/o/cars%2F13.jpg?alt=media&token=237f443a-0ce7-46fa-a382-f71dfbdc9fe8"} />

                    <Image className="w-[60px] h-[60px] cursor-pointer object-contain rounded-[6px] border-[1px] border-[#3333] shadow-2xl" alt="image list" width={1000} height={1000} src={"https://firebasestorage.googleapis.com/v0/b/foodimg-13877.appspot.com/o/cars%2F13.jpg?alt=media&token=237f443a-0ce7-46fa-a382-f71dfbdc9fe8"} />
                    <Image className="w-[60px] h-[60px] cursor-pointer object-contain rounded-[6px] border-[1px] border-[#3333] shadow-2xl" alt="image list" width={1000} height={1000} src={"https://firebasestorage.googleapis.com/v0/b/foodimg-13877.appspot.com/o/cars%2F13.jpg?alt=media&token=237f443a-0ce7-46fa-a382-f71dfbdc9fe8"} />
                    <Image className="w-[60px] h-[60px] cursor-pointer object-contain rounded-[6px] border-[1px] border-[#3333] shadow-2xl" alt="image list" width={1000} height={1000} src={"https://firebasestorage.googleapis.com/v0/b/foodimg-13877.appspot.com/o/cars%2F13.jpg?alt=media&token=237f443a-0ce7-46fa-a382-f71dfbdc9fe8"} />
                    <Image className="w-[60px] h-[60px] cursor-pointer object-contain rounded-[6px] border-[1px] border-[#3333] shadow-2xl" alt="image list" width={1000} height={1000} src={"https://firebasestorage.googleapis.com/v0/b/foodimg-13877.appspot.com/o/cars%2F13.jpg?alt=media&token=237f443a-0ce7-46fa-a382-f71dfbdc9fe8"} />

                </div>
            </div>
            <div className="w-[50vw] h-[50vh] rounded-[5px] border-2  overflow-hidden">
                <Image className="w-full h-full object-cover" alt="image list" width={1000} height={1000} src={imageUrl} />

            </div>
        </div>
    )
}
export default CarDetailLeft