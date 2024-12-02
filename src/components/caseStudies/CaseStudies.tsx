import img1 from '@/images/caseStudies/caseStudies1.png'
import img2 from '@/images/caseStudies/caseStudies2.png'
import img3 from '@/images/caseStudies/caseStudies3.png'
import arrow from '@/images/caseStudies/arrow.png'
import CaseStudiesCard from './caseStudeisComponents/CaseStudiesCard'
import HeadingPage from '../pageComponents/HeadingPage'
import ellipse from '@/images/icons/ellipse.png'

interface caseInfo {
  image: string
  title: string
  description: string
  id: number
}

const caseStudeisInfo: caseInfo[] = [
  {
    image: img1,
    title: 'Дизайн веб-сайта для AralHub',
    description:
      'AralHub основан на видении и четкой цели предоставлять выдающиеся услуги в области веб-разработки и цифрового маркетинга. Обязавшись предоставлять лучшие решения своим клиентам, AralHub зарекомендовал себя как надежный партнер в цифровом пространстве. Имея команду экспертов с многолетним опытом работы в отрасли, AralHub предлагает инновационные и индивидуально подобранные решения в области веб-дизайна и маркетинга для удовлетворения потребностей каждого клиента.',
    id: 1,
  },
  {
    image: img2,
    title: 'Веб-разработка для AralHub',
    description:
      'AralHub предоставляет услуги веб-разработки высшего класса с акцентом на производительность, пользовательский опыт и новейшие технологии. От адаптивного дизайна до сложных серверных решений, мы гарантируем, что каждый проект будет настроен с учетом специфических потребностей наших клиентов. Наша команда опытных разработчиков и дизайнеров тесно сотрудничает с клиентами, чтобы воплотить их идеи в реальность, создавая высококачественные, масштабируемые и безопасные веб-сайты, которые выделяются на современном конкурентном рынке',
    id: 2,
  },
  {
    image: img3,
    title: 'Цифровые маркетинговые решения для AralHub',
    description:
      'В AralHub мы специализируемся на предоставлении комплексных цифровых маркетинговых услуг, которые способствуют росту и повышению онлайн-видимости. От SEO и маркетинга в социальных сетях до платной рекламы и создания контента, наша команда использует стратегии, основанные на данных, чтобы гарантировать, что ваш бренд достигнет своего полного потенциала. Мы верим в построение долгосрочных отношений с нашими клиентами, помогая им достигать устойчивого успеха в цифровом мире.',
    id: 3,
  },
]
const CaseStudies = () => {
  return (
    <div id='case-studies' className='bg-[#F7F7FA] px-[5%] py-[80px] relative'>
      <div className='hidden md:flex absolute md:top-[60px] lg:top-[100px] left-[25%]'>
        <img src={ellipse} alt='' />
      </div>
      <HeadingPage
        heading='Наши последние'
        span='кейс-исследования'
        isCenter={true}
      />
      <div className='flex flex-col gap-[35px] mt-[80px]'>
        {caseStudeisInfo.map((item) => (
          <CaseStudiesCard
            key={item.id}
            title={item.title}
            image={item.image}
            description={item.description}
          />
        ))}
      </div>
      <div className='flex justify-end mt-[40px]'>
        <a
          href='#'
          className='flex gap-[10px] items-center bg-gradient-to-r from-[#F76680] to-[#57007B] text-transparent bg-clip-text text-[24px] font-[600]'
        >
          Читайте другие кейс-исследования{' '}
          <img src={arrow} alt='' className='w-[20px] translate-y-[3px]' />
        </a>
      </div>
    </div>
  )
}

export default CaseStudies
