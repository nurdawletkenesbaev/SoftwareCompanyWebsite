import ourDesign1 from '@/images/icons/ourDesign/ourDesign1.png'
import ourDesign2 from '@/images/icons/ourDesign/OurDesign2.png'
import ourDesign3 from '@/images/icons/ourDesign/ourDesign3.png'
import ourDesign4 from '@/images/icons/ourDesign/ourDesign4.png'
import ourDesign5 from '@/images/icons/ourDesign/ourDesign5.png'
import ourDesign6 from '@/images/icons/ourDesign/ourDesign6.png'
import HeadingPage from '../pageComponents/HeadingPage'
interface cardInfo {
  image: string
  title: string
  description: string
  from: string
  to: string
}
const cardsInformation: cardInfo[] = [
  {
    image: ourDesign1,
    title: 'UX Driven Engineering',
    description:
      'В AralHub мы ставим опыт пользователя на первое место на каждом этапе проектирования и разработки, чтобы создавать интуитивно понятные и удобные решения.',
    from: '#29272E',
    to: '#27272E',
    // Unlike other companies, we are a <span style="background: linear-gradient(#29272E, #27272E); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.
  },
  {
    image: ourDesign2,
    title: 'Proven Experience and Expertise',
    description:
      'В AralHub мы обладаем богатым проверенным опытом и экспертизой, чтобы предоставлять исключительные решения, соответствующие потребностям наших клиентов.',
    from: '#FF92AE',
    to: '#FF3D9A',
    // Unlike other companies, we are a <span style="background: linear-gradient(#FF92AE, #FF3D9A); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.
  },
  {
    image: ourDesign3,
    title: 'Code Reviews',
    description:
      'В AralHub мы придаем большое значение тщательным проверкам кода, чтобы гарантировать высокие стандарты качества, безопасности и производительности во всех наших проектах.',
    from: '#FFEF5E',
    to: '#F7936F',
    // Unlike other companies, we are a <span style="background: linear-gradient(#FFEF5E, #F7936F); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.
  },
  {
    image: ourDesign4,
    title: 'Agile Development',
    description:
      'В AralHub мы придерживаемся гибкого процесса разработки, который обеспечивает гибкость, быстрые итерации и возможность адаптироваться к меняющимся требованиям на протяжении всего жизненного цикла проекта.',
    from: '#68DBF2',
    to: '#509CF5',
    // Unlike other companies, we are a <span style="background: linear-gradient(#68DBF2, #509CF5); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.
  },
  {
    image: ourDesign5,
    title: 'Scalable Solutions',
    description:
      'В AralHub мы разрабатываем масштабируемые решения, которые растут вместе с вашим бизнесом, обеспечивая долгосрочный успех и возможность расширения по мере изменения ваших потребностей.',
    from: '#67E9F1',
    to: '#24E795',
    // Unlike other companies, we are a <span style="background: linear-gradient(#67E9F1, #24E795); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.
  },
  {
    image: ourDesign6,
    title: 'Quality Assurance',
    description:
      'В AralHub мы внедряем надежные процессы обеспечения качества, чтобы гарантировать, что каждый продукт, который мы поставляем, соответствует самым высоким стандартам производительности и надежности.',
    from: '#F76680',
    to: '#57007B',
    // Unlike other companies, we are a <span style="background: linear-gradient(#F76680, #57007B); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.
  },
]
const OurDesign = () => {
  return (
    <div id='blog' className='pt-[70px] px-[5%] pb-[90px] bg-[#F7F7FA] '>
      <HeadingPage
        heading='Наш подход к проектированию и'
        span='разработке'
        isCenter={true}
      />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-[25px] mt-[80px]'>
        {cardsInformation.map((item) => (
          <div
            key={item.title}
            className='flex gap-[20px] bg-[#FAFAFA]  px-[25px] lg:px-[33px] py-[30px] lg:p-[40px] items-start'
          >
            <div>
              <div
                className={`bg-[linear-gradient(90deg,_${item.from},_${item.to})] rounded-md flex items-center justify-center w-[50px] md:w-[55px] lg:w-[60px] h-[53px] md:h-[56px] lg:h-[59px]`}
              >
                <img
                  src={item.image}
                  alt=''
                  className='w-[34px] md:w-[37px] lg:w-[40px]'
                />
              </div>
            </div>
            <div>
              <span className='text-[#1A202C] font-[600] text-[16px] md:text-[18px] lg:text-[20px]'>
                {item.title}
              </span>
              <p
                className='text-[#4A5568] text-[12px] md:text-[13px] lg:text-[14px]'
                dangerouslySetInnerHTML={{
                  __html: item.description,
                }}
              ></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default OurDesign
