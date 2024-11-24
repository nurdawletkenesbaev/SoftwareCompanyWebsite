import logo from '@/images/icons/logo.png'
import '../headerScss/Header.scss'
const Logo = () => {
  return (
    <a href='#' className='flex items-center gap-[5px]'>
      <img src={logo} alt='' />
      <span className='logo-font text-[24px]'>Ik developers</span>
    </a>
  )
}

export default Logo
