import { FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineInstagram } from 'react-icons/ai'
import { CgFacebook } from 'react-icons/cg'
import Logo from '../header/headerComponents/Logo'
import google from '../../images/images/google.png'

const Footer = () => {
  return (
    <div>
      <div className='px-[5%] flex justify-between gap-[60px] pt-[35px] pb-[80px]'>
        <div>
          <Logo />
          <p className='text-[18px] text-[#718096] font-[400] my-[20px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <img src={google} alt='' />
        </div>
        <div>
          <span className='text-[#4A5568] text-[18px] font-bold'>Links</span>
          <ul className='mt-[20px] text-[16px] text-[#718096]'>
            <li className='py-[5px]'>
              <a href='#'>About Us</a>
            </li>
            <li className='py-[5px]'>
              <a href='#'>Services</a>
            </li>
            <li className='py-[5px]'>
              <a href='#'>Case Studies</a>
            </li>
            <li className='py-[5px]'>
              <a href='#'>How it works</a>
            </li>
            <li className='py-[5px]'>
              <a href='#'>Blog</a>
            </li>
            <li className='py-[5px]'>
              <a href='#'>Careers</a>
            </li>
            <li className='py-[5px]'>
              <a href='#'>Areas We Serve</a>
            </li>
          </ul>
        </div>
        <div className='text-[18px] text-[#718096]'>
          <span className='text-[#4A5568] text-[18px] font-bold'>
            Contact us
          </span>
          <p className='my-[20px]'>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.{' '}
          </p>
          <p>+923183561921</p>
        </div>
        <div className='flex flex-col items-end justify-end'>
          <div className='flex gap-[10px]'>
            <button className='rounded-full p-[10px] shadow-lg'>
              <CgFacebook />
            </button>
            <button className='rounded-full p-[10px] shadow-lg'>
              <AiOutlineInstagram />
            </button>
            <button className='rounded-full p-[10px] shadow-lg'>
              <AiOutlineTwitter />
            </button>
            <button className='rounded-full p-[10px] shadow-lg'>
              <FaLinkedinIn />
            </button>
          </div>
        </div>
      </div>
      <div className='py-[35px] border-t-[1px] border-[#CDD5EO] text-center'>
        <span className='text-[14px] text-[#4A5568] '>
          © 2023 Copyright by IK Developers. All rights reserved.
        </span>
      </div>
    </div>
  )
}

export default Footer
