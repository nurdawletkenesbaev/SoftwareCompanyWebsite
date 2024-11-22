import mainImg from '../../images/images/mainImg.png'
import circle from '../../images/icons/circle.png'
const Main = () => {
  return (
    <div className='relative flex px-[5%] items-center h-[calc(100vh-60px)] gap-[30px]'>
      <div>
        <span className='text-[45px] font-[300]'>
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
        <p className='text-[#4A5568] text-[18px] mt-[20px]'>
          We help build and manage a team of world-class developers to bring
          your vision to life
        </p>
        <div className='mt-[35px]'>
          <button className='text-[#FAFAFA] font-[600] text-[14px] px-[30px] py-[19px] bg-[#3D63EA] rounded-md'>
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
