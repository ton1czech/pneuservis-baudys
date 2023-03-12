import Navbar from './components/Navbar'
import Hero from './container/Hero'
import OpeningHours from './container/OpeningHours'
import Pricelist from './container/Pricelist'
import Testimonials from './container/Testimonials'
import Footer from './components/Footer'
import Services from './container/Services'

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
