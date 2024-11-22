import Logo from './headerComponents/Logo'
const Header = () => {
  return (
    <div className='h-[60px] flex justify-between items-center px-[3%] shadow-lg'>
      <div>
        <Logo/>
      </div>
      <ul className='flex gap-[40px] text-[16px] text-[#4A5568]'>
        <li>
          <a href='#'>About Us</a>
        </li>
        <li>
          <a href='#'>Services</a>
        </li>
        <li>
          <a href='#'>Case Studies</a>
        </li>
        <li>
          <a href='#'>Blog</a>
        </li>
        <li>
          <a href='#'>How it Works</a>
        </li>
        <li>
          <a href='#'>Hire</a>
        </li>
      </ul>
      <button className='bg-[linear-gradient(90deg,_#6675F7,_#57007B)] px-[20px] py-[7px] rounded-md text-[#FAFAFA] text-[14px]'>
        <a href='#'>Contact us</a>
      </button>
    </div>
  )
}

export default Header
