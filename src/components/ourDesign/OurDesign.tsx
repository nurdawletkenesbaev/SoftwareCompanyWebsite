import ourDesign1 from '@/images/icons/ourDesign/ourDesign1.png'
import ourDesign2 from '@/images/icons/ourDesign/ourDesign2.png'
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
      'Unlike other companies, we are a <span style="background: linear-gradient(#29272E, #27272E); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    from: '#29272E',
    to: '#27272E',
  },
  {
    image: ourDesign2,
    title: 'Proven Experience and Expertise',
    description:
      'Unlike other companies, we are a <span style="background: linear-gradient(#FF92AE, #FF3D9A); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    from: '#FF92AE',
    to: '#FF3D9A',
  },
  {
    image: ourDesign3,
    title: 'Code Reviews',
    description:
      'Unlike other companies, we are a <span style="background: linear-gradient(#FFEF5E, #F7936F); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    from: '#FFEF5E',
    to: '#F7936F',
  },
  {
    image: ourDesign4,
    title: 'UX Driven Engineering',
    description:
      'Unlike other companies, we are a <span style="background: linear-gradient(#68DBF2, #509CF5); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    from: '#68DBF2',
    to: '#509CF5',
  },
  {
    image: ourDesign5,
    title: 'UX Driven Engineering',
    description:
      'Unlike other companies, we are a <span style="background: linear-gradient(#67E9F1, #24E795); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    from: '#67E9F1',
    to: '#24E795',
  },
  {
    image: ourDesign6,
    title: 'UX Driven Engineering',
    description:
      'Unlike other companies, we are a <span style="background: linear-gradient(#F76680, #57007B); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">UX first</span> development company. Projects are driven by designers and they make sure design and experiences translate to code.',
    from: '#F76680',
    to: '#57007B',
  },
]
const OurDesign = () => {
  return (
    <div className='pt-[70px] px-[5%] pb-[90px] bg-[#F7F7FA] '>
      <HeadingPage
        heading='Our design and'
        span='development approach'
        isCenter={true}
      />
      <div className='grid grid-cols-2 gap-[25px] mt-[80px]'>
        {cardsInformation.map((item) => (
          <div
            key={item.title}
            className='flex gap-[20px] bg-[#FAFAFA] px-[33px] py-[50px] items-start'
          >
            <div>
              <div
                className={`bg-[linear-gradient(90deg,_${item.from},_${item.to})] rounded-md flex items-center justify-center w-[60px] h-[59px] `}
              >
                <img src={item.image} alt='' className='w-[40px]' />
              </div>
            </div>
            <div>
              <span className='text-[#1A202C] font-[600] text-[20px]'>
                {item.title}
              </span>
              <p
                className='text-[#4A5568] text-[14px]'
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
