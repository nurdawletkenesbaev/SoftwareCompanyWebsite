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
    title: 'Website Design for SCFC Canada',
    description:
      'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.',
    id: 1,
  },
  {
    image: img2,
    title: 'Website Design for SCFC Canada',
    description:
      'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.',
    id: 2,
  },
  {
    image: img3,
    title: 'Website Design for SCFC Canada',
    description:
      'Born out of a vision, a single-minded objective that puts service before anything else, Swift Clearance and Forwarding Corp. surging forth to deliver the best services in the shipping and logistics scenario. Its meteoric rise stems out of a solid foundation. The management boasts of over 20 years of rich and varied experience in the shipping and freight forwarding industry.',
    id: 3,
  },
]
const CaseStudies = () => {
  return (
    <div id='case-studies' className='bg-[#F7F7FA] px-[5%] py-[80px] relative'>
      <div className='hidden md:flex absolute md:top-[60px] lg:top-[100px] left-[25%]'>
        <img src={ellipse} alt='' />
      </div>
      <HeadingPage heading='Our recent' span='Case studies' isCenter={true} />
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
          Read more case studies{' '}
          <img src={arrow} alt='' className='w-[20px] translate-y-[3px]' />
        </a>
      </div>
    </div>
  )
}

export default CaseStudies
