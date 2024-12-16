import video from '@/images/videos/video.mp4'
import HeadingPage from '../pageComponents/HeadingPage'
import ReactPlayer from 'react-player'

const DevelopSoftware = () => {
  return (
    <div className='px-[5%] bg-white flex flex-col md:flex-row gap-[50px] py-[80px] items-center'>
      <div className='w-full md:w-[50%]'>
        <HeadingPage
          isCenter={false}
          heading='Ведущие компании доверяют нам'
          span='разработку программного обеспечения.'
        />
        <p className='text-gray-700 font-[400] text-[14px] md:text-[16px] lg:text-[18px] leading-7 md:leading-8  lg:leading-9 my-[20px] md:my-[25px] lg:my-[30px]'>
          Мы{' '}
          <span className='bg-gradient-to-r from-[#F76680] to-[#57007B] inline-block text-transparent bg-clip-text'>
            увеличиваем возможности разработки
          </span>{' '}
          для технических команд. Наша ценность не ограничивается только
          созданием команд, она равномерно распределена на протяжении всего
          жизненного цикла проекта. Мы — компания по разработке индивидуального
          программного обеспечения, которая гарантирует успешную доставку вашего
          проекта.
        </p>
        {/* <a className='flex items-center gap-[10px] text-[#57007B] text-[16px] cursor-pointer'>
          Увидеть больше информации{' '}
          <span>
            <BsArrowRight />
          </span>
        </a> */}
      </div>
      <div className='w-full md:w-[50%] h-full relative  '>
        <ReactPlayer
          controls={true}
          className='react-player'
          url={video}
          width='100%'
          height='100%'
          style={{ borderRadius: '10px', height: '100%' }}
        />
      </div>
    </div>
  )
}

export default DevelopSoftware
