import logo from '@/images/icons/logoPng.png'
import '../headerScss/Header.scss'
const Logo = () => {
  return (
    <a href='#' className='flex items-center gap-[5px]'>
      <img src={logo} alt='' className='w-[140px]' />
      {/* <span className='logo-font text-[24px] font-bold'>АралХаб</span> */}
    </a>
  )
}

export default Logo
