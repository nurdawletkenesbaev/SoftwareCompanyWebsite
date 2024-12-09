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
    title: 'Планирование и анализ требований',
    description: `В AralHub требования анализируются через обсуждения и сбор идей, задачи и цели строятся по плану.`,
    id: 1,
  },
  {
    title: 'Собираем правильную команду',
    description: `В AralHub команда формируется по навыкам и интересам, роли распределяются по сильным сторонам.`,
    id: 2,
  },
  {
    title: 'Планирование спринта',
    description: `В AralHub спринт планируется по приоритетам задач и срокам.`,
    id: 3,
  },
  {
    title: 'Проектирование архитектуры',
    description: `В AralHub архитектура проекта создается с учетом масштабируемости и надежности.`,
    id: 4,
  },
  {
    title: 'Разработка и тестирование',
    description: `В AralHub разработка идет итеративно с регулярным тестированием и проверкой кода.`,
    id: 5,
  },
  {
    title: 'Развертывание',
    description: `В AralHub развертывание проводится на облачных платформах с упором на стабильность и доступность.`,
    id: 6,
  },
]

const HowDevelopment = () => {
  return (
    <div
      className='px-[5%] pt-[70px] border-t-[1px] border-[#E7DAED] bg-[#F9F9F9]'
      id='how-it-works'
    >
      <HeadingPage
        heading='Как работает'
        span='процесс разработки в AralHub'
        isCenter={true}
      />
      <div className='mt-[50px] md:mt-[65px] lg:mt-[80px] flex justify-center sm:justify-between sm:gap-[5px] sm:flex-row md:flex-col '>
        <div className='flex flex-col md:flex-row gap-[30px] pl-[10px]'>
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
        <div className='flex flex-col-reverse md:flex-row h-full justify-center items-center gap-[20px]'>
          <div className='h-[550px] md:h-[2px] w-[2px] md:w-full bg-[linear-gradient(90deg,_#F76680,_#57007B)]'></div>
          <img src={trophy} alt='' className='w-[60px] md:w-auto' />
        </div>
        <div className='flex flex-col items-start md:flex-row md:justify-end gap-[30px] mt-[15px] pr-[10px]'>
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
    </div>
  )
}

export default HowDevelopment
