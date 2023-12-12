'use client'

import Image from "next/image"
import { GrFormNextLink, GrNext } from "react-icons/gr"
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import imageCar from "@/assets/images/Group 3.png"
import CarCardComponent from "@/components/CarCardComponent"
import { useEffect } from "react"
//api
import { carApi } from "@/api/car"
//redux
import { useAppDispatch } from "@/lib/redux/hooks"
import { setCars } from "@/lib/redux/features/cars/loadingSlice"
import { RootState } from "@/lib/redux/store";
import { useSelector } from "react-redux";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";


const responsiveSettings = [
  {
    autoplay: false,
    breakpoint: 800,

    settings: {
      slidesToShow: 8,
      slidesToScroll: 4,
      transitionDuration: 500,
      // autoplay: false,
    }
  },
  {
    autoplay: false,
    breakpoint: 900,

    settings: {
      slidesToShow: 7,
      slidesToScroll: 6,
      transitionDuration: 500,
      // autoplay: false,
    }
  },
  {
    autoplay: false,
    breakpoint: 500,
    settings: {
      slidesToShow: 5,
      autoplay: false,
      slidesToScroll: 5,
      transitionDuration: 500,
    }
  }
];
const properties = {
  prevArrow: <p className="absolute top-[50%] left-[70px] bg-white z-10 p-2">Prev</p>,
  nextArrow: <p className="absolute top-[50%] right-[70px] bg-white z-10 p-2">Next</p>
}

export default function Home({ children }: { children: React.ReactNode }) {
  // hook
  const dispatch = useAppDispatch()
  const router = useRouter()
  // Hook state
  const cars = useSelector((state: RootState) => state?.cars.data)
  // hook effect
  useEffect(() => {

    carApi.getCars().then((res) => {

      if (res) {
        dispatch(setCars({
          res
        }))
      }
    })

  }, [])

  // hendle event DOM
  const handleGoShop = () => {
    const mainElement = document.getElementsByClassName("home")

    mainElement[0]?.classList?.add("home_shop")

  }
  const handleBackBanner = () => {
    const mainElement = document.getElementsByClassName("home")

    mainElement[0]?.classList?.remove("home_shop")
  }
  const handlePageDetail = (id: number) => {
    if (id) {
      router.push(`/product/${id}`)
    }

  }
  return (
    <main className=' home w-[fit-content] h-full flex flex-row'>
      <div className='w-[100vw] h-full home'>
        <h1 className='home-title'>Porsche</h1>
        <div className="home-main w-full h-full  flex  justify-between flex-col bg-yellow-100 ">
          <div className='flex items-center flex-1 justify-center m-[40px]'>
            <div className='w-full relative'>
              <p className='absolute left-[45%] top-[0%] text-[90px] z-0 text-yellow-300'>Racing Yellow</p>
              <Image className='w-full relative z' alt='icon' src={imageCar} />
            </div>

            <GrNext onClick={handleGoShop} className="home-toshop-btn border-[2px] text-[50px] cursor-pointer  p-[4px]  pl-[6px] border-[#3333] text-[#3333] rounded-[40%] hover:text-[#3e3e3e] hover:border-[#3e3e3e] " />
          </div>
          <div className='home-infor  flex justify-center gap-20 text-[20px] mb-5'>

            <div >
              <p className='text-[#3333]' >Top Speed</p>
              <p>182 mph</p>
            </div>
            <div>
              <p className='text-[#3333]'>Power (PS)</p>
              <p>385 PS</p>
            </div>
            <div>
              <p className='text-[#3333]'>Max. torque (Manual)</p>
              <p>450 Nm</p>
            </div>
            <div>
              <p className='text-[#3333]'>Displacement</p>
              <p>2,981 cm³</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-[100vw] shop h-full'>
        <div className="shop-header">
          <div className="shop-user">

          </div>
          <div className="shop-list-car mt-[100px] flex flex-col  h-[100vh] overflow-hidden flex-nowrap  p-[50px] w-full relative">
            <div className=" shop-list-car-back-btn self-center flex w-fit  items-center flex-col justify-center group" onClick={handleBackBanner} >
              <p className="w-full text-center text-[3rem] leading-[33px] ">back</p>
              <div className="opacity-0 mb-[20px] translate-y-[-30px]">
                <GrFormNextLink className="text-[35px]" />
              </div>

            </div>


            <div>
              <Slide {...properties} slidesToScroll={5} slidesToShow={5} indicators={true} responsive={responsiveSettings}>
                {
                  [...cars, ...cars, ...cars].map((car: Car) => {
                    return <CarCardComponent name="car1"
                      key={car?.id}
                      price={car.price}
                      id={car?.id}
                      onClickDetail={() => { handlePageDetail(car?.id) }}
                      viewImage={car?.viewImage} />

                  })
                }
              </Slide>


            </div>

          </div>
        </div>
        <Footer />
      </div>

    </main>
  )
}