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
    description: `В AralHub анализ требований проводится через командные обсуждения и сбор идей.
    На каждом этапе задачи и цели определяются на основе четкого плана.`,
    id: 1,
  },
  {
    title: 'Собираем правильную команду',
    description: `В AralHub формирование команды основывается на навыках и интересах участников.
    Каждый участник берет на себя роль, которая соответствует его сильным сторонам.`,
    id: 2,
  },
  {
    title: 'Планирование спринта',
    description: `В AralHub спринт планируется с учетом приоритетов задач и сроков их выполнения.
    Команда распределяет задачи так, чтобы достичь ключевых целей за отведенное время.`,
    id: 3,
  },
  {
    title: 'Проектирование архитектуры',
    description: `В AralHub архитектура проекта разрабатывается с упором на масштабируемость и надежность.
    Учитываются используемые технологии, интеграции и структура данных.`,
    id: 4,
  },
  {
    title: 'Разработка и тестирование',
    description: `В AralHub разработка ведется итеративно, с регулярной проверкой кода и функциональности.
    Тестирование проводится автоматизированными и ручными методами для обеспечения качества.`,
    id: 5,
  },
  {
    title: 'Развертывание',
    description: `В AralHub развертывание проекта осуществляется с использованием современных облачных платформ.
    Особое внимание уделяется стабильности и доступности приложения для пользователей.`,
    id: 6,
  },
]

const HowDevelopment = () => {
  return (
    <div
      className='px-[5%] pt-[70px] border-t-[1px] border-[#E7DAED] bg-white'
      id='how-it-works'
    >
      <HeadingPage
        heading='Как работает'
        span='процесс разработки в AralHub'
        isCenter={true}
      />
      <div className='mt-[50px] md:mt-[65px] lg:mt-[80px] flex justify-end sm:justify-between sm:gap-[20px] sm:flex-row md:flex-col '>
        <div className='flex flex-col md:flex-row gap-[30px] pl-[30px]'>
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
        <div className='flex flex-col-reverse md:flex-row h-full mt-[15px] justify-center items-center gap-[20px]'>
          <div className='md:h-[2px] w-[2px] md:w-full bg-[linear-gradient(90deg,_#F76680,_#57007B)]'></div>
          <img src={trophy} alt='' className='w-auto' />
        </div>
        <div className='flex flex-col items-start md:flex-row md:justify-end gap-[30px] mt-[15px] pr-[30px]'>
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
