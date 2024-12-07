import { BsArrowRight } from 'react-icons/bs'
import React from 'react'
import { useDispatch } from 'react-redux'
import {
  selectRecourseModalImage,
  selectRecourseModalTitle,
  toggleRecourseOpenModal,
} from '@/store/slices/pageActionSlice'
// import { RootState } from '@/store/store'

interface props {
  image: string
  title: string
}
const ResourceCard: React.FC<props> = ({ title, image }) => {
  const dispatch = useDispatch()
  // const {recourseOpenModal} = useSelector((state:RootState) => state.pageActions)
  return (
    <div className='flex flex-col  shadow-md rounded-md bg-white'>
      <div
        onClick={() => {
          dispatch(selectRecourseModalImage(image)),
            dispatch(selectRecourseModalTitle(title)),
            dispatch(toggleRecourseOpenModal())
        }}
        className='h-[180px] overflow-hidden rounded-md border-gray-200 border-[1px] '
      >
        <img
          src={image}
          alt=''
          className='rounded-md h-full scale-110 object-contain hover:scale-100 duration-200 cursor-pointer'
        />
      </div>
      <p className='my-[20px] text-start px-[10px]'>{title}</p>
      <div className='flex justify-end px-[10px] pb-[10px]'>
        <a
          href=''
          className='text-[16px] text-[#57007B] flex items-center gap-[10px]'
        >
          Read More{' '}
          <span>
            <BsArrowRight />
          </span>
        </a>
      </div>
    </div>
  )
}

export default ResourceCard
