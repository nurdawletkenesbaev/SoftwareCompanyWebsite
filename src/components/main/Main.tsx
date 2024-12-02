import mainImg from '@/images/images/mainImg.png'
import circle from '@/images/icons/circle.png'
const Main = () => {
  return (
    <div className='relative flex flex-col lg:flex-row text-center lg:text-start px-[5%] items-center min-h-[calc(100vh-60px)] gap-[10px] lg:gap-[30px]'>
      <div className='py-[20px] lg:py-0'>
        <span className='text-[35px] md:text-[40px] lg:[45px] font-[300]'>
          Great{' '}
          <span className='bg-gradient-to-r from-[#DE4396] to-[#0D1C9f] inline-block text-transparent bg-clip-text font-bold'>
            Product
          </span>
          is <br />
          <span className='font-bold'>
            built by great{' '}
            <span className='bg-gradient-to-r from-[#F7666F] to-[#406AFF] inline-block text-transparent bg-clip-text'>
              teams
            </span>
          </span>
        </span>
        <p className='text-[#4A5568] text-[14px] md:text-[16px] lg:text-[18px] mt-[10px] md:mt-[15px] lg:mt-[20px]'>
          We help build and manage a team of world-class developers to bring
          your vision to life
        </p>
        <div className='mt-[35px]'>
          <button className='text-[#FAFAFA] font-[600] text-[14px] px-[20px] md:px-[25px] lg:px-[30px] py-[15px] md:py-[17px] lg:py-[19px] bg-[#3D63EA] rounded-md'>
            Let’s get started!
          </button>
        </div>
      </div>
      <div>
        <img src={mainImg} alt='' />
      </div>
      <div className='absolute bottom-[-36px] z-[-2] left-[35%]'>
        <img src={circle} alt='' />
      </div>
    </div>
  )
}

export default Main
