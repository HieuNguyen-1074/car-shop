
"use client"

import CarDetailLeft from "@/components/CarDetailLeft"
import CarDetailRight from "@/components/CarDetailRight"
import { RootState } from "@/lib/redux/store"
import { useSelector } from "react-redux"

interface IProps {
    params: {
        productId: string
    }

}

const ProductDetail = ({ params: { productId } }: IProps) => {

    const products = useSelector((state: RootState) => state.cars.data)

    return (
        <div>
            <div className="flex justify-start items-start">
                <CarDetailLeft />
                <CarDetailRight />
            </div>
        </div>
    )
}
export default ProductDetail