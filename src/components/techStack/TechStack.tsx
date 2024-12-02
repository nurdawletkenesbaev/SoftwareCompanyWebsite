import HeadingPage from '../pageComponents/HeadingPage'
import front1 from '@/images/techStack/techStact1.png'
import front2 from '@/images/techStack/techStact2.png'
import front3 from '@/images/techStack/techStact3.png'
import front4 from '@/images/techStack/techStact4.png'
import front5 from '@/images/techStack/techStact5.png'
import front6 from '@/images/techStack/techStact6.png'
import front7 from '@/images/techStack/techStact7.png'
import front8 from '@/images/techStack/techStact8.png'
import front9 from '@/images/techStack/techStact9.png'
import './techStackScss/techStack.css'
import { useDispatch, useSelector } from 'react-redux'
import { changeActiveTechStack } from '../../store/slices/pageActionSlice'
import { RootState } from '../../store/store'
interface stack {
  name: string
  id: number
}
interface frontend {
  image: string
  id: number
}
const techStack: stack[] = [
  {
    name: 'Backend',
    id: 1,
  },
  {
    name: 'Frontend',
    id: 2,
  },
  {
    name: 'Databases',
    id: 3,
  },
  {
    name: 'CMS',
    id: 4,
  },
  {
    name: 'CloudTesting',
    id: 5,
  },
  {
    name: 'DevOps',
    id: 6,
  },
]

const frontendStacks: frontend[] = [
  {
    id: 1,
    image: front1,
  },
  {
    id: 2,
    image: front2,
  },
  {
    id: 3,
    image: front3,
  },
  {
    id: 4,
    image: front4,
  },
  {
    id: 5,
    image: front5,
  },
  {
    id: 6,
    image: front6,
  },
  {
    id: 7,
    image: front7,
  },
  {
    id: 8,
    image: front8,
  },
  {
    id: 9,
    image: front9,
  },
]
const TechStack = () => {
  const { activeTechStack } = useSelector(
    (state: RootState) => state.pageActions
  )
  const dispatch = useDispatch()
  return (
    <div className='px-[5%] py-[80px] bg-white'>
      <HeadingPage heading='Наши' span='Технологии' isCenter={true} />
      <div className='flex gap-[30px] justify-center mt-[30px] mb-[60px] overflow-x-auto'>
        {techStack.map((item) => (
          <div
            onClick={() => dispatch(changeActiveTechStack(item.id))}
            key={item.id}
            className='flex flex-col justify-center items-center'
          >
            <span
              className={`text-[18px] font-[400] cursor-pointer ${
                item.id === activeTechStack
                  ? 'bg-gradient-to-r from-[#F76680] to-[#57007B] inline-block text-transparent bg-clip-text font-[600]'
                  : ''
              }`}
            >
              {item.name}
            </span>
            <div
              className={`h-[4px] w-[40px] rounded-sm bg-[linear-gradient(90deg,_#F76680,_#57007B)] ${
                item.id === activeTechStack ? '' : 'hidden'
              }`}
            ></div>
          </div>
        ))}
      </div>
      <div className='flex justify-center gap-[60px] flex-wrap items-center'>
        {frontendStacks.map((item) => (
          <img key={item.id} src={item.image} alt='' />
        ))}
      </div>
    </div>
  )
}

export default TechStack
