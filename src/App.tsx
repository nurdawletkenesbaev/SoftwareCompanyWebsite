import CaseStudies from './components/caseStudies/CaseStudies'
import Footer from './components/footer/Footer'
import GreatSoftWare from './components/greatSoftware/GreatSoftWare'
import Header from './components/header/Header'
import HireTopDev from './components/greatSoftware/hireTopDev/HireTopDev'
import HowDevelopment from './components/howDevelopment/HowDevelopment'
import Main from './components/main/Main'
import OurDesign from './components/ourDesign/OurDesign'
import Resources from './components/resources/Resources'
import Services from './components/services/Services'
import TechStack from './components/techStack/TechStack'
import Brands from './components/brands/Brands'
import Customers from './components/customers/Customers'
import DevelopSoftware from './components/developSoftware/DevelopSoftware'

const App = () => {
  return (
    <div className='bg-transparent'>
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
    </div>
  )
}

export default App
