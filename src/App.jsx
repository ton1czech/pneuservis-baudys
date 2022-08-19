import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import OpeningHours from './components/OpeningHours'
import Pricelist from './components/Pricelist'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <OpeningHours />
      <Pricelist />
      <Testimonials />
      <Footer />
    </>
  )
}
