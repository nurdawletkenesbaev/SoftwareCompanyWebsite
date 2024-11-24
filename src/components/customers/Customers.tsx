import { BsArrowLeft, BsArrowRight } from 'react-icons/bs'
import HeadingPage from '../pageComponents/HeadingPage'
import fluentComma1 from '@/images/customers/fluentComma1.png'
import fluentComma2 from '@/images/customers/fluentComma2.png'
import image from '@/images/images/customer.png'
import arrow1 from '@/images/customers/arrow1.png'
import arrow2 from '@/images/customers/arrow2.png'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CustomerCard from './customerComponents/CustomerCard'
import './customersScss/Customers.scss'
import { useRef } from 'react'

interface customers {
  image: string
  id: number
  name: string
  work: string
}
const customersList: customers[] = [
  {
    image: image,
    id: 1,
    name: 'Romeena De Silva',
    work: 'Janet Cosmetics',
  },
  {
    image: image,
    id: 2,
    name: 'Romeena De Silva',
    work: 'Janet Cosmetics',
  },
  {
    image: image,
    id: 3,
    name: 'Imran Khan',
    work: 'Software Engineer',
  },
  {
    image: image,
    id: 4,
    name: 'Romeena De Silva',
    work: 'Janet Cosmetics',
  },
  {
    image: image,
    id: 5,
    name: 'Romeena De Silva',
    work: 'Janet Cosmetics',
  },
  {
    image: image,
    id: 6,
    name: 'Romeena De Silva',
    work: 'Janet Cosmetics',
  },
]
const Customers = () => {
  const sliderRef = useRef<Slider | null>(null)
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0px',
    slidesToShow: 5,
    speed: 500,
  }
  return (
    <div className='bg-white py-[80px] px-[5%] relative'>
      <div>
        <HeadingPage
          heading='Why cutomers love'
          span='working with us'
          isCenter={true}
        />
      </div>
      <div className='flex justify-between mt-[50px] gap-[50px] items-center'>
        <div>
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className='border-[1px] border-[#57007B] text-[#57007B] p-[10px] rounded-full hover:text-[white] hover:bg-[#57007B] text-[20px] duration-200'
          >
            <BsArrowLeft />
          </button>
        </div>
        <div className='max-w-[700px] flex justify-between gap-[40px]'>
          <div className='flex flex-col justify-start'>
            <img src={fluentComma1} alt='' className='w-[100px]' />
          </div>
          <p className='text-[18px] text-center text-[#718096] leading-9'>
            Without any doubt I recommend Alcaline Solutions as one of the best
            web design and digital marketing agencies. One of the best agencies
            I’ve came across so far. Wouldn’t be hesitated to introduce their
            work to someone else.
          </p>
          <div className='flex flex-col justify-end'>
            <img src={fluentComma2} alt='' className='w-[100px]' />
          </div>
        </div>
        <div>
          <button
            onClick={() => sliderRef.current?.slickNext()}
            className='border-[1px] border-[#57007B] text-[#57007B] p-[10px] rounded-full hover:text-[white] hover:bg-[#57007B] text-[20px] duration-200'
          >
            <BsArrowRight />
          </button>
        </div>
      </div>
      <div className='slider-container py-[50px]'>
        <Slider {...settings} ref={sliderRef}>
          {customersList.map((item) => (
            <CustomerCard
              key={item.id}
              name={item.name}
              work={item.work}
              image={item.image}
            />
          ))}
        </Slider>
      </div>
      <div className='absolute bottom-[-100px] z-[10]'>
        <img src={arrow1} alt='' />
      </div>
      <div className='absolute bottom-[-160px] z-[10] right-[10%]'>
        <img src={arrow2} alt='' />
      </div>
    </div>
  )
}

export default Customers
