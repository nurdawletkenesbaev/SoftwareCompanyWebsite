import { toggleRecourseOpenModal } from '@/store/slices/pageActionSlice'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
interface props {
  image: string
  title: string
  isOpen: boolean
}
const RecourseModal: React.FC<props> = ({ image, title, isOpen }) => {
  const dispatch = useDispatch()
  return (
    <div
      className={`absolute z-[21] top-0 bottom-0 right-0 left-0 ${
        !isOpen ? 'hidden' : 'flex'
      }`}
    >
      <div
        onClick={() => dispatch(toggleRecourseOpenModal(false))}
        className='absolute items-center z-[22] top-0 bottom-0 right-0 left-0 bg-black backdrop-blur-md opacity-65'
      ></div>
      <div className='absolute z-[23] h-max translate-y-[-50%] top-[50%] translate-x-[-50%] left-[50%] flex flex-col items-center py-[20px] justify=-center bg-transparent w-[96%] md:w-[85%] rounded-xl'>
        <div className='flex w-full justify-end mb-[15px]'>
          <span
            onClick={() => dispatch(toggleRecourseOpenModal(false))}
            className='text-[25px] cursor-pointer bg-gray-200 duration-100 hover:bg-gray-400 p-[5px] rounded-md'
          >
            <AiOutlineClose />
          </span>
        </div>
        <div className='flex items-center justify-center rounded-lg '>
          <img
            src={image}
            alt=''
            className='w-full block border-[1px] border-gray-400 rounded-md max-h-[100vh] object-cover'
          />
        </div>
        <p className='hidden'>{title}</p>
      </div>
    </div>
  )
}

export default RecourseModal
