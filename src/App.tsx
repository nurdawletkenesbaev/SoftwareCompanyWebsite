import CaseStudies from './components/caseStudies/CaseStudies'
import Footer from './components/footer/Footer'
import GreatSoftWare from './components/greatSoftware/GreatSoftWare'
import Header from './components/header/Header'
import HireTopDev from './components/hireTopDev/HireTopDev'
import HowDevelopment from './components/howDevelopment/HowDevelopment'
import Main from './components/main/Main'
import OurDesign from './components/ourDesign/OurDesign'
import Resources from './components/resources/Resources'
import Services from './components/services/Services'
import TechStack from './components/techStack/TechStack'
import Brands from './components/brands/Brands'
import Customers from './components/customers/Customers'
import DevelopSoftware from './components/developSoftware/DevelopSoftware'
import './App.css'
import Top from './components/top/Top'

const App = () => {
  return (
    <div className='max-w-[1600px] m-auto max-h-[100vh] min-h-[100vh] overflow-y-scroll overflow-x-hidden'>
      <Header />
      <Main />
      <Services />
      <DevelopSoftware />
      <Brands />
      <Customers />
      <CaseStudies />
      <GreatSoftWare />
      <OurDesign />
      <TechStack />
      <HowDevelopment />
      <Resources />
      <HireTopDev />
      <Footer />
      <Top />
    </div>
  )
}

export default App
