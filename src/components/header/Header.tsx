import Logo from './headerComponents/Logo'
const Header = () => {
  return (
    <div className='h-[60px] flex justify-between items-center px-[3%] shadow-lg'>
      <div>
        <Logo />
      </div>
      <ul className='flex gap-[40px] text-[16px] text-[#4A5568]'>
        <li>
          <a href='#about-us'>About Us</a>
        </li>
        <li>
          <a href='#services'>Services</a>
        </li>
        <li>
          <a href='#case-studies'>Case Studies</a>
        </li>
        <li>
          <a href='#blog'>Blog</a>
        </li>
        <li>
          <a href='#how-it-works'>How it Works</a>
        </li>
        <li>
          <a href='#hire'>Hire</a>
        </li>
      </ul>
      <button className='bg-[linear-gradient(90deg,_#6675F7,_#57007B)] px-[20px] py-[7px] rounded-md text-[#FAFAFA] text-[14px]'>
        <a href='#'>Contact us</a>
      </button>
    </div>
  )
}

export default Header
