import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import logo1 from '@/images/autoPlay/logo1.png'
import logo2 from '@/images/autoPlay/logo2.png'
import logo3 from '@/images/autoPlay/logo3.png'
import logo4 from '@/images/autoPlay/logo4.png'
import logo5 from '@/images/autoPlay/logo5.png'
import logo6 from '@/images/autoPlay/logo6.png'
// import circle from '../../images/icons/circle.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import HeadingPage from '../pageComponents/HeadingPage'
import { Autoplay, Navigation } from 'swiper/modules'
import './brandScss/Brands.scss'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/grid'
import { useRef } from 'react'

interface brands {
  image: string
  id: number
}
const brandsList: brands[] = [
  {
    image: logo1,
    id: 1,
  },
  {
    image: logo2,
    id: 2,
  },
  {
    image: logo3,
    id: 3,
  },
  {
    image: logo4,
    id: 4,
  },
  {
    image: logo5,
    id: 5,
  },
  {
    image: logo6,
    id: 6,
  },
]

const Brands = () => {
  const swiperRef = useRef<any>(null)
  return (
    <div className='bg-white'>
      <div className='px-[5%] pt-[70px] relative'>
        <HeadingPage
          heading='Познакомьтесь с людьми,'
          span='с которыми мы работаем'
          isCenter={false}
        />
        <div className='flex justify-end gap-[10px]'>
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className='border-[1px] border-[#57007B] text-[#57007B] p-[10px] rounded-full hover:text-[white] hover:bg-[#57007B] text-[20px] duration-200'
          >
            <BsArrowLeft />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className='border-[1px] border-[#57007B] text-[#57007B] p-[10px] rounded-full hover:text-[white] hover:bg-[#57007B] text-[20px] duration-200'
          >
            <BsArrowRight />
          </button>
        </div>
      </div>

      <div className='bg-[#F7F7FA] py-[20px] md:py-[30px] lg:py-[40px] mt-[20px] relative'>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          loop={true}
          spaceBetween={30}
          slidesPerView={5}
          grid={{
            rows: 1,
          }}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className='mySwiper static z-[3]'
        >
          {brandsList.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.image} alt='' />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Brands
