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
        className='absolute z-[22] top-0 bottom-0 right-0 left-0 bg-black backdrop-blur-md opacity-65'
      ></div>
      <div className='absolute z-[23] bottom-[5%] top-[5%] right-[3%] left-[3%] flex flex-col items-center py-[20px] justify=-center bg-white rounded-xl'>
        <div className='flex w-full justify-end pr-[5%] mb-[15px]'>
          <span
            onClick={() => dispatch(toggleRecourseOpenModal(false))}
            className='text-[25px] cursor-pointer bg-gray-200 duration-100 hover:bg-gray-400 p-[5px] rounded-md'
          >
            <AiOutlineClose />
          </span>
        </div>
        <div className='border-[1px] border-gray-300 rounded-lg w-full'>
          <img src={image} alt='' className='w-full' />
        </div>
        <p className='hidden'>{title}</p>
      </div>
    </div>
  )
}

export default RecourseModal
