import HeadingPage from '../pageComponents/HeadingPage'
import image2 from '@/images/resource/resource2.png'
import image3 from '@/images/resource/resource3.png'
import image4 from '@/images/resource/resource4.png'
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

interface cardInfo {
  image: string
  title: string
  id: number
}
const resourcesInfo: cardInfo[] = [
  {
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
    image: image3,
    id: 1,
  },
  {
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
    image: image2,
    id: 2,
  },
  {
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
    image: image3,
    id: 3,
  },
  {
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
    image: image4,
    id: 4,
  },
  {
    title: 'How to Build a Scalable Application up to 1 Million Users on AWS',
    image: image2,
    id: 5,
  },
]
const Resources: React.FC = () => {
  return (
    <div className='bg-white py-[90px]'>
      <HeadingPage heading='Featured' span='Resources' isCenter={true} />
      <div className='slider-container mt-[60px]'>
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
    </div>
  )
}

export default Resources
