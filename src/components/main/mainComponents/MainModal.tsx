import { AiOutlineInstagram } from 'react-icons/ai'
import { FaTelegramPlane } from 'react-icons/fa'
import { toggleMainOpenModal } from '@/store/slices/pageActionSlice'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'

interface props {
  isOpen: boolean
}
const MainModal: React.FC<props> = ({ isOpen }) => {
  const dispatch = useDispatch()
  return (
    <div
      className={`absolute z-[21] top-0 bottom-0 right-0 left-0 ${
        !isOpen ? 'hidden' : 'flex'
      }`}
    >
      <div
        onClick={() => dispatch(toggleMainOpenModal(false))}
        className='absolute items-center z-[22] top-0 bottom-0 right-0 left-0 bg-black backdrop-blur-md opacity-65'
      ></div>
      <div className='absolute z-[23] h-max translate-y-[-50%] top-[50%] w-max translate-x-[-50%] left-[50%] px-[40px] flex flex-col items-center py-[20px] justify-center bg-white rounded-xl'>
        <div className='flex w-full justify-end  mb-[15px]'>
          <span
            onClick={() => dispatch(toggleMainOpenModal(false))}
            className='text-[20px] cursor-pointer bg-gray-200 duration-100 hover:bg-gray-400 p-[5px] rounded-md '
          >
            <AiOutlineClose />
          </span>
        </div>
        <div className='flex flex-col text-[20px]'>
          <span className='border-b-[1px] border-gray-200 px-[10px]'>
            Телефон: +998885610180
          </span>
          <li className='flex list-none py-[5px] hover:bg-gray-100 duration-100 border-b-[1px] border-gray-200 px-[10px]'>
            <a
              className='flex gap-[10px] items-center w-full justify-between'
              href='https://t.me//aralhub'
            >
              Телеграм{' '}
              <span className='text-[#3D63EA] text-[24px]'>
                <FaTelegramPlane />
              </span>
            </a>
          </li>
          <li className='flex list-none py-[5px] hover:bg-gray-100 duration-100 border-b-[1px] border-gray-200 px-[10px]'>
            <a
              className='flex gap-[10px] items-center w-full justify-between'
              href='https://www.instagram.com/aralhub.uz/'
            >
              Инстаграм{' '}
              <span className='text-[#3D63EA] text-[24px]'>
                <AiOutlineInstagram />
              </span>
            </a>
          </li>
        </div>
      </div>
    </div>
  )
}

export default MainModal
