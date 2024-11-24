import sun from '@/images/images/sun.png'
const HireTopDev = () => {
  return (
    <div className='px-[5%] my-[100px]'>
      <div className=' flex justify-between items-center gap-[40px]  bg-[linear-gradient(90deg,_#F1F1F5,_#E4ECE7)] px-[60px] py-[100px] rounded-[10px]'>
        <h1 className='text-[35px] w-[50%] font-bold bg-[linear-gradient(90deg,_#29272E,_#27272E)] bg-clip-text text-transparent'>
          Hire the best developers and designers around!
        </h1>
        <div className='relative'>
          <button className='bg-[linear-gradient(90deg,_#FFC656,_#F16063)] py-[14px] px-[25px] rounded-md text-[18px] text-[#FAFAFA]'>
            Hire Top Developers
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
