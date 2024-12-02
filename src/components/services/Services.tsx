import icon1 from '@/images/services/serviceIcon1.png'
import icon2 from '@/images/services/serviceIcon2.png'
import icon3 from '@/images/services/serviceIcon3.png'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './serviceScss/Service.css'
import ServiceCard from './serviceComponents/ServiceCard'

interface cardsInfo {
  image: string
  id: number
  title: string
  description: string
}
const services: cardsInfo[] = [
  {
    image: icon1,
    id: 1,
    title: 'Mobile App Development',
    description:
      'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
  },
  {
    image: icon2,
    id: 2,
    title: 'Mobile App Development',
    description:
      'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
  },
  {
    image: icon3,
    id: 3,
    title: 'Web Design & Development',
    description:
      'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
  },
  {
    image: icon1,
    id: 4,
    title: 'Software Testing Service',
    description:
      'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
  },
  {
    image: icon2,
    id: 5,
    title: 'Software Testing Service',
    description:
      'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
  },
]
const Services = () => {
  const settings: Settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    // initialSlide: 0,
    dots: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '0px',
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '160px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '20px',
        },
      },
    ],
  }
  return (
    <div className='bg-[#F9F9F9] py-[50px]' id='services'>
      <h1 className='text-[28px] md:text-[31px] lg:text-[35px] font-bold text-center text-[#1A202C]'>
        Services we offer
      </h1>
      <div className='slider-container mt-[40px] box-border mb-[20px]'>
        <Slider {...settings}>
          {services.map((item) => (
            <ServiceCard
              key={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Services
