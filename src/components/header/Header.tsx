import { IoMdClose } from 'react-icons/io'
import { CgMenuRight } from 'react-icons/cg'
import Logo from './headerComponents/Logo'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store/store'
import { toggleMenu } from '@/store/slices/pageActionSlice'
const Header = () => {
  const dispatch = useDispatch()
  const { openMenu } = useSelector((state: RootState) => state.pageActions)
  return (
    <div className='h-[60px] flex justify-between items-center px-[3%] shadow-lg'>
      <div>
        <Logo />
      </div>
      <ul className='hidden lg:flex gap-[40px] text-[16px] text-[#4A5568]'>
        <li>
          <a href='#about-us'>О нас</a>
        </li>
        <li>
          <a href='#services'>Услуги</a>
        </li>
        <li>
          <a href='#case-studies'>Кейсы</a>
        </li>
        <li>
          <a href='#blog'>Блог</a>
        </li>
        <li>
          <a href='#how-it-works'>Как это работает</a>
        </li>
        <li>
          <a href='#hire'>Нанять</a>
        </li>
      </ul>
      <div className='flex items-center gap-[15px]'>
        <button
          className='text-[22px] font-bold md:hidden'
          onClick={() => dispatch(toggleMenu(true))}
        >
          <CgMenuRight />
        </button>
        <button className='bg-[linear-gradient(90deg,_#6675F7,_#57007B)] px-[20px] py-[7px] rounded-md text-[#FAFAFA] text-[14px]'>
          <a href='#contact-us'>Свяжитесь с нами</a>
        </button>
      </div>
      <div
        className={`w-full h-max absolute z-[10] bg-black backdrop-blur-lg opacity-85 text-white left-0 right-0 ${
          openMenu ? 'top-0 duration-300' : 'top-[-100%] duration-300'
        }`}
      >
        <ul className='flex flex-col text-[20px] py-[20px] text-center'>
          <li className='p-[10px] pr-[20px] flex justify-end text-[25px]'>
            <button
              onClick={() => dispatch(toggleMenu(false))}
              className='hover:bg-gray-800 rounded-sm p-[7px]'
            >
              <IoMdClose />
            </button>
          </li>
          <li className=''>
            <a
              className='cursor-pointer w-full hover:bg-gray-800 p-[7px] duration-300 text-center flex justify-center'
              href='#about-us'
            >
              О нас
            </a>
          </li>
          <li className=''>
            <a
              className='cursor-pointer w-full hover:bg-gray-800 p-[7px] duration-300 text-center flex justify-center'
              href='#services'
            >
              Услуги
            </a>
          </li>
          <li className=''>
            <a
              className='cursor-pointer w-full hover:bg-gray-800 p-[7px] duration-300 text-center flex justify-center'
              href='#case-studies'
            >
              Кейсы
            </a>
          </li>
          <li className=''>
            <a
              className='cursor-pointer w-full hover:bg-gray-800 p-[7px] duration-300 text-center flex justify-center'
              href='#blog'
            >
              Блог
            </a>
          </li>
          <li className=''>
            <a
              className='cursor-pointer w-full hover:bg-gray-800 p-[7px] duration-300 text-center flex justify-center'
              href='#how-it-works'
            >
              Как это работает
            </a>
          </li>
          <li className=''>
            <a
              className='cursor-pointer w-full hover:bg-gray-800 p-[7px] duration-300 text-center flex justify-center'
              href='#hire'
            >
              Нанять
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
