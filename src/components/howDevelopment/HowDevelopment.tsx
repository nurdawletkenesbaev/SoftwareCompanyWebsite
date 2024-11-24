import HeadingPage from '../pageComponents/HeadingPage'
import HowDevelopmentCard from './howDevelopmentComp/HowDevelopmentCard'
import trophy from '@/images/images/trophy.png'

interface list {
  title: string
  description: string
  id: number
}
const cardsInfo: list[] = [
  {
    title: 'Assemble the right team',
    description: `We handle all aspects of vetting and choosing the right team that you don't have the time, expertise, or desire to do.`,
    id: 1,
  },
  {
    title: 'Tech architecture',
    description: `We break monolithic apps into microservices. Decoupling the code allows teams to move faster and more independently`,
    id: 2,
  },
  {
    title: 'Code reviews',
    description: `Code reviews before release help detect issues like memory leaks, file leaks, performance signs, and general bad smells`,
    id: 3,
  },
  {
    title: 'Sprint planning',
    description: `Sprint roadmap is a collective planning effort. Team members collaborate to clarify items and ensure shared understanding.`,
    id: 4,
  },
  {
    title: 'Standups & weekly demos',
    description: `Standups, weekly demos, and weekly reviews make sure everyone is on the same page and can raise their concerns.`,
    id: 5,
  },
  {
    title: 'Iterative delivery',
    description: `We divide the implementation process into several checkpoints rather than a single deadline.`,
    id: 6,
  },
]

const HowDevelopment = () => {
  return (
    <div className='px-[5%] pt-[70px] border-t-[1px] border-[#E7DAED] bg-white'>
      <HeadingPage
        heading='How development'
        span='through Alcaline works'
        isCenter={true}
      />
      <div className='flex gap-[30px] mt-[80px] pl-[30px]'>
        {cardsInfo.map(
          (item, index) =>
            index <= 2 && (
              <HowDevelopmentCard
                key={item.id}
                index={index}
                title={item.title}
                description={item.description}
                isTop={true}
              />
            )
        )}
      </div>
      <div className='flex mt-[15px] items-center gap-[20px]'>
        <div className='h-[2px] w-full bg-[linear-gradient(90deg,_#F76680,_#57007B)]'></div>
        <img src={trophy} alt='' />
      </div>
      <div className='flex justify-end gap-[30px] mt-[15px] pr-[30px]'>
        {cardsInfo.map(
          (item, index) =>
            index > 2 && (
              <HowDevelopmentCard
                key={item.id}
                index={index}
                title={item.title}
                description={item.description}
                isTop={false}
              />
            )
        )}
      </div>
    </div>
  )
}

export default HowDevelopment
