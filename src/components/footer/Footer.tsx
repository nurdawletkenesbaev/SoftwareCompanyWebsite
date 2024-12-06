import { FaTelegramPlane } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { CgFacebook } from 'react-icons/cg'
import Logo from '../header/headerComponents/Logo'
import google from '@/images/images/google.png'

const Footer = () => {
  return (
    <div id='contact-us'>
      <div className='px-[5%] flex  justify-between flex-wrap gap-[60px] pt-[35px] pb-[80px]'>
        <div className='max-w-[300px]'>
          <Logo />
          <p className='text-[18px] text-[#718096] font-[400] my-[20px]'>
            Достигайте успеха с инновационными решениями и качественным
            дизайном.
          </p>
          <img src={google} alt='' />
        </div>
        <div>
          <span className='text-[#4A5568] text-[18px] font-bold'>Ссылки</span>
          <ul className='mt-[20px] text-[16px] text-[#718096]'>
            <li className='py-[5px]'>
              <a href='#'>О нас</a>
            </li>
            <li className='py-[5px]'>
              <a href='#'>Услуги</a>
            </li>
            <li className='py-[5px]'>
              <a href='#'>Примеры работ</a>
            </li>
            <li className='py-[5px]'>
              <a href='#'>Как это работает</a>
            </li>
            <li className='py-[5px]'>
              <a href='#'>Блог</a>
            </li>
            <li className='py-[5px]'>
              <a href='#'>Карьера</a>
            </li>
            <li className='py-[5px]'>
              <a href='#'>Области, которые мы обслуживаем</a>
            </li>
          </ul>
        </div>
        <div className='text-[18px] text-[#718096] max-w-[300px]'>
          <span className='text-[#4A5568] text-[18px] font-bold'>Контакты</span>
          <p className='my-[20px]'>
            Свяжитесь с нами для обсуждения вашего проекта и получения
            консультации.{' '}
          </p>
          <p>+923183561921</p>
        </div>
        <div className='flex flex-col items-end justify-end'>
          <div className='flex gap-[10px]'>
            <button className='rounded-full p-[10px] shadow-lg'>
              <CgFacebook />
            </button>
            <button className='rounded-full p-[10px] shadow-lg'>
              <a href='https://www.instagram.com/aralhub.uz/'>
                <AiOutlineInstagram />
              </a>
            </button>
            <button className='rounded-full p-[10px] shadow-lg'>
              <a href='https://t.me//aralhub'>
                <FaTelegramPlane />
              </a>
            </button>
            <button className='rounded-full p-[10px] shadow-lg'>
              <a href='#'>
                <AiOutlineTwitter />
              </a>
            </button>
          </div>
        </div>
      </div>
      <div className='py-[35px] border-t-[1px] border-[#CDD5EO] text-center'>
        <span className='text-[14px] text-[#4A5568] '>
          © 2023 AralHub. Все права защищены.
        </span>
      </div>
    </div>
  )
}

export default Footer
