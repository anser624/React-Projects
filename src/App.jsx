import './App.css'
import BgFull from './compo/BgFullDiv/BgFull'
import Card from './compo/Card/Card'
import Contact from './compo/Contact/Contact'
import Footer from './compo/Footer/Footer'
import Hero from './compo/Hero/Hero'
import LastHero from './compo/Last-Hero/LastHero'
import Navbar from './compo/Navbar/Navbar'

function App() {
 

  return (
    <>
      <Navbar/>
      <Hero/>
      <Card image="/img/landing_howitworks_1.webp" direction="row-reverse" display="none"/>
      <Card image="/img/landing_howitworks_2.webp" display="none"/>
      <Card image="/img/landing_howitworks_3.webp" direction="row-reverse" display="none"/>
      <Card image="/img/landing_howitworks_4.webp" button="Try It Out!"  />
      <LastHero/>
      <BgFull/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
