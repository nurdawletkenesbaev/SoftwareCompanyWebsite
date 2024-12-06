import HeadingPage from '../pageComponents/HeadingPage'
import circle1 from '@/images/greatSoftware/circle1.png'
import circle2 from '@/images/greatSoftware/circle2.png'
import circle3 from '@/images/greatSoftware/circle3.png'
import circle4 from '@/images/greatSoftware/circle4.png'
import circle5 from '@/images/greatSoftware/circle5.png'
import circle6 from '@/images/greatSoftware/circle6.png'
import image1 from '@/images/greatSoftware/software1.jpg'
import image2 from '@/images/greatSoftware/software2.jpg'
import image3 from '@/images/greatSoftware/software3.jpg'
import authoImage1 from '@/images/greatSoftware/author1.png'
import authoImage2 from '@/images/greatSoftware/author2.png'
import authoImage3 from '@/images/greatSoftware/author3.png'
import GreatSoftwareCard from './gretSoftwareComp/GreatSoftwareCard'

interface softwareInformation {
  image: string
  title: string
  description: string
  mainP: string
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
    title: 'Build the right team to scale',
    description:
      'Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers',
    mainP:
      'Our <span style="background: linear-gradient(#F76680, #57007B); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">delivery model</span> helps you cut costs and deliver within budget.',
    content:
      '"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"',
    author: {
      authorImage: authoImage1,
      authorName: 'Jeewa markram',
      authorWork: 'CEO',
    },
    circles: [circle1, circle2],
    position: ['top-[-25px] left-[-25px]', 'bottom-[-15px] left-[35%]'],
    id: 1,
  },
  {
    image: image2,
    title: 'Build the right team to scale',
    description:
      'Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers',
    mainP:
      'Our <span style="background: linear-gradient(#F76680, #57007B); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">delivery model</span> helps you cut costs and deliver within budget.',
    content:
      '"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"',
    author: {
      authorImage: authoImage2,
      authorName: 'Jeewa markram',
      authorWork: 'CEO',
    },
    circles: [circle3, circle4],
    position: ['right-[-10px] top-[-10px]', 'bottom-[-35px] left-[15%]'],
    id: 2,
  },
  {
    image: image3,
    title: 'Build the right team to scale',
    description:
      'Finding the right talent is not easy. We help you find the talent that suits your needs, follows your processes, and sticks with you long term (not the case with freelancers',
    mainP:
      'Our <span style="background: linear-gradient(#F76680, #57007B); -webkit-text-fill-color: transparent; -webkit-background-clip: text;">delivery model</span> helps you cut costs and deliver within budget.',
    content:
      '"Simform is quick to identify larger problem with the Software so we decided to expand our scope to build new modules"',
    author: {
      authorImage: authoImage3,
      authorName: 'Jeewa markram',
      authorWork: 'CEO',
    },
    circles: [circle6, circle5],
    position: ['left-[50%] top-[-20px]', 'bottom-[-20px] left-[-20px]'],
    id: 3,
  },
]

const GreatSoftWare = () => {
  return (
    <div className='px-[5%] py-[80px]'>
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
            mainP={item.mainP}
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
