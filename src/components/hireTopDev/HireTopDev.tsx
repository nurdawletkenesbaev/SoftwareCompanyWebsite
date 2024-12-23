import sun from '@/images/images/sun.png'
const HireTopDev = () => {
  return (
    <div className='px-[5%] my-[100px]' id='hire'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-[70px] md:gap-[35px] lg:gap-[40px]  bg-[linear-gradient(90deg,_#F1F1F5,_#E4ECE7)] px-[40px] md:px-[50px] lg:px-[60px] py-[60px] md:py-[80px] lg:py-[100px] rounded-[10px]'>
        <h1 className='text-[26px] md:text-[30px] lg:text-[35px] text-center md:text-start md:w-[50%] font-bold bg-[linear-gradient(90deg,_#29272E,_#27272E)] bg-clip-text text-transparent'>
          Наймите лучших разработчиков и дизайнеров!
        </h1>
        <div className='relative'>
          <button className='bg-[linear-gradient(90deg,_#FFC656,_#F16063)] py-[14px] px-[25px] rounded-md text-[18px] text-[#FAFAFA]'>
            Нанимайте лучших разработчиков
          </button>
          <div className='absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]'>
            <img src={sun} alt='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HireTopDev
