import HeadingPage from '../pageComponents/HeadingPage'
import image2 from '@/images/resource/recourse1.jpg'
import image3 from '@/images/resource/recourse2.jpg'
import image4 from '@/images/resource/recourse3.jpg'
import image1 from '@/images/resource/recourse5.jpg'
import image5 from '@/images/resource/recourse4.jpg'
import image6 from '@/images/resource/recourse6.jpg'
import './resourceScss/Resource.scss'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import React from 'react'
import ResourceCard from './resourceComponents/ResourceCard'
import { SwiperSlide, Swiper } from 'swiper/react'
import { Grid } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/grid'
import 'swiper/css/pagination'
import RecourseModal from './resourceComponents/RecourseModal'
import { useSelector } from 'react-redux'
import { RootState } from '@/store/store'

interface cardInfo {
  image: string
  title: string
  id: number
}
const resourcesInfo: cardInfo[] = [
  {
    title: 'Въезд на парковку',
    image: image3,
    id: 1,
  },
  {
    title: 'Eco Filter',
    image: image1,
    id: 2,
  },
  {
    title: 'Анализ',
    image: image6,
    id: 3,
  },
  {
    title: 'Face ID',
    image: image4,
    id: 4,
  },
  {
    title: 'Control',
    image: image2,
    id: 5,
  },
  {
    title: 'Las Vegas Restaurant',
    image: image5,
    id: 6,
  },
]
const Resources: React.FC = () => {
  const { recourseModalImage, recourseModalTitle, recourseOpenModal } =
    useSelector((state: RootState) => state.pageActions)
  return (
    <div className='bg-[#F9F9F9] py-[90px]'>
      <HeadingPage heading='Избранные' span='ресурсы' isCenter={true} />
      <div className='slider-container mt-[60px] '>
        <Swiper
          loop={true}
          slidesPerView={1}
          grid={{
            rows: 1,
          }}
          spaceBetween={30}
          modules={[Grid]}
          className='mySwiper'
          breakpoints={{
            460: {
              slidesPerView: 2,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        >
          {resourcesInfo.map((item) => (
            <SwiperSlide key={item.id}>
              <ResourceCard
                key={item.id}
                image={item.image}
                title={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <RecourseModal
        image={recourseModalImage}
        title={recourseModalTitle}
        isOpen={recourseOpenModal}
      />
    </div>
  )
}

export default Resources
