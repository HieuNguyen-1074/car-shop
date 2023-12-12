import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { GrFormNextLink } from "react-icons/gr";

interface IProps {
    name: string,
    id: number,
    price: number,
    viewImage: string,
    onClickDetail: () => void
}
function CarCardComponent({ name, id, price, viewImage, onClickDetail }: IProps) {
    return (
        <div className='car-item relative flex items-end group overflow-hidden h-[400px] px-2 bg-white z-0 hover:w-[300px] m-1 hover:z-10 transition duration-150 ease-in-out  rounded-[10px] '>
            <div className=' w-full h-full car-item-image absolute group-hover:translate-y-[-70px] transition-all '>
                <Image className='w-full h-full object-cover rounded-[10px]' width={1000} height={1000} src={viewImage} alt='car' />
            </div>
            <div className='car-item-infor flex items-end justify-between w-full '>
                <div className='car-item-infor-main'>
                    <p>{name}</p>
                    <p>{price} $</p>

                </div>
                <button onClick={onClickDetail} className=' car-item-btn-detail flex justify-start group-scoped items-center'><GrFormNextLink className="translate-x-[60px] opacity-0 text-[35px] " /><p className='mt-[5px]'>View details</p></button>
            </div>
        </div>
    )
}



export default CarCardComponent

