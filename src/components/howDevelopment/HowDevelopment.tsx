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
    description: `В AralHub мы начинаем каждый проект с понимания ваших бизнес-потребностей и определения четких целей. Через детальные обсуждения и исследования мы собираем информацию, чтобы наши решения соответствовали вашему видению.`,
    id: 1,
  },
  {
    title: 'Собираем правильную команду',
    description: `Правильный выбор специалистов может решить судьбу проекта. В AralHub мы тщательно формируем команду экспертов, соответствующих вашим требованиям, обеспечивая бесперебойное сотрудничество и долгосрочный успех.`,
    id: 2,
  },
  {
    title: 'Планирование спринта',
    description: `Наш подход Agile к планированию спринта гарантирует, что каждый участник команды согласован с целями проекта. Мы совместно приоритезируем задачи, устанавливаем четкие этапы и обеспечиваем эффективное продвижение к успешной доставке.`,
    id: 3,
  },
  {
    title: 'Проектирование архитектуры',
    description: `В AralHub мы проектируем гибкую и масштабируемую архитектуру, соответствующую потребностям вашего продукта. Наши опытные архитекторы обеспечивают эффективное взаимодействие всех компонентов системы и безопасное, эффективное течение данных.`,
    id: 4,
  },
  {
    title: 'Разработка и тестирование',
    description: `Наш процесс разработки соответствует лучшим отраслевым практикам, обеспечивая высококачественный код, соответствующий вашим спецификациям. Мы применяем как ручное, так и автоматизированное тестирование, чтобы обеспечить надежность и отсутствие ошибок в финальном продукте.`,
    id: 5,
  },
  {
    title: 'Развертывание',
    description: `После завершения тестирования AralHub обеспечивает плавный процесс развертывания. Мы гарантируем, что ваше решение будет запущено без сбоев, и постоянно мониторим его производительность, чтобы оптимизировать для достижения успеха.`,
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
