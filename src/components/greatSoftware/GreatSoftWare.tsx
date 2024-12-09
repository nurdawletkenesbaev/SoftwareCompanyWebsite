import HeadingPage from '../pageComponents/HeadingPage'
import circle1 from '@/images/greatSoftware/circle1.png'
import circle2 from '@/images/greatSoftware/circle2.png'
import circle3 from '@/images/greatSoftware/circle3.png'
import circle4 from '@/images/greatSoftware/circle4.png'
import circle5 from '@/images/greatSoftware/circle5.png'
import circle6 from '@/images/greatSoftware/circle6.png'
import image1 from '@/images/greatSoftware/ourteam1.jpg'
import image2 from '@/images/greatSoftware/ourteam2.jpg'
import image3 from '@/images/greatSoftware/ourteam4.jpg'
import authoImage1 from '@/images/devs/dev1.jpg'
import authoImage2 from '@/images/devs/dev2.jpg'
import authoImage3 from '@/images/devs/dev5.jpg'
import GreatSoftwareCard from './gretSoftwareComp/GreatSoftwareCard'

interface softwareInformation {
  image: string
  title: string
  description: string
  content: string
  author: {
    authorImage: string
    authorName: string
    authorWork: string
  }
  circles: [string, string]
  position: [string, string]
  id: number
}
const softwareInfo: softwareInformation[] = [
  {
    image: image1,
    title: 'Развивайте свой бизнес с квалифицированными специалистами',
    description:
      'Найти идеальные таланты жизненно важно для роста бизнеса. Мы помогаем вам привлекать профессионалов, которые соответствуют вашим целям и требованиям, гарантируя долгосрочный успех.',
    content:
      '"Благодаря их проактивному подходу мы эффективно расширили нашу деятельность, сохранив бюджет."',
    author: {
      authorImage: authoImage1,
      authorName: 'Тимур',
      authorWork: 'Бэкeнд разработчик',
    },
    circles: [circle1, circle2],
    position: ['top-[-25px] left-[-25px]', 'bottom-[-15px] left-[35%]'],
    id: 1,
  },
  {
    image: image2,
    title: 'Оптимизируйте расходы с надежной командой',
    description:
      'Найти подходящую команду нелегко. Мы упрощаем этот процесс, предоставляя первоклассных специалистов, которые эффективно работают в вашем рабочем процессе и обеспечивают результаты в рамках бюджета.',
    content:
      '"Благодаря их опыту мы смогли сократить расходы и улучшить сроки выполнения."',
    author: {
      authorImage: authoImage2,
      authorName: 'Искандер',
      authorWork: 'Фронтенд разработчик',
    },
    circles: [circle3, circle4],
    position: ['right-[-10px] top-[-10px]', 'bottom-[-35px] left-[15%]'],
    id: 2,
  },
  {
    image: image3,
    title: 'Создавайте команды, которые стимулируют инновации',
    description:
      'Сотрудничайте с профессионалами, которые привносят инновации и поднимают ваши проекты на новый уровень. Наши индивидуальные решения обеспечивают качество и долгосрочное сотрудничество для вашего растущего бизнеса.',
    content:
      '"Их команда быстро адаптировалась к нашим требованиям и привнесла свежие идеи в наш продукт."',
    author: {
      authorImage: authoImage3,
      authorName: 'Бектемир',
      authorWork: 'Бэкeнд разработчик',
    },
    circles: [circle6, circle5],
    position: ['left-[50%] top-[-20px]', 'bottom-[-20px] left-[-20px]'],
    id: 3,
  },
]

const GreatSoftWare = () => {
  return (
    <div className='px-[5%] py-[50px] bg-[#F9F9F9]'>
      <HeadingPage
        heading='Способ создания'
        span='отличного программного обеспечения'
        isCenter={true}
      />
      <div className='flex flex-col gap-[80px] mt-[73px]'>
        {softwareInfo.map((item, index) => (
          <GreatSoftwareCard
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            content={item.content}
            author={item.author}
            circles={item.circles}
            index={index}
            position={item.position}
          />
        ))}
      </div>
    </div>
  )
}

export default GreatSoftWare
