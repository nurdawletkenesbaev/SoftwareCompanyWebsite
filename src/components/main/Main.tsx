import mainImg from '@/images/images/mainImg.png'
import { ReactTyped } from 'react-typed'
import './MainScss/Main.scss'
const Main = () => {
  return (
    <div className='relative bg-white flex flex-col lg:flex-row text-center lg:text-start px-[5%] items-center min-h-[calc(100vh-60px)] lg:h-[calc(100vh-60px)] gap-[10px] lg:gap-[30px] lg:max-h-[600px]'>
      <div className='py-[20px] lg:py-0 md:w-[50%] w-full'>
        <span className='text-[35px] md:text-[40px] lg:[45px] font-[300]'>
          Великолепные{' '}
          <span className='bg-gradient-to-r from-[#DE4396] to-[#0D1C9f] inline-block text-transparent bg-clip-text font-bold'>
            продукты
          </span>
          <span className='font-bold'>
            создаются отличными <br />
            <span className='bg-gradient-to-r from-[#F7666F] to-[#406AFF] inline-block text-transparent bg-clip-text'>
              <ReactTyped
                strings={['командами']}
                typeSpeed={150}
                backSpeed={150}
                loop
              />
            </span>
          </span>
        </span>
        <p className='text-[#4A5568] text-[14px] md:text-[16px] lg:text-[18px] mt-[10px] md:mt-[15px] lg:mt-[20px]'>
          Мы помогаем создавать и управлять командой разработчиков мирового
          класса, чтобы воплотить вашу идею в реальность.
        </p>
        <div className='mt-[35px]'>
          <button className='text-[#FAFAFA] font-[600] text-[14px] px-[20px] md:px-[25px] lg:px-[30px] py-[15px] md:py-[17px] lg:py-[19px] bg-[#3D63EA] rounded-md  hover:scale-105 active:scale-95 duration-300 shadow-lg'>
            Давайте начнем!
          </button>
        </div>
      </div>
      <div className='md:w-[50%] w-full'>
        <img src={mainImg} alt='' className='w-full h-full animate-bounce' />
      </div>
    </div>
  )
}

export default Main
