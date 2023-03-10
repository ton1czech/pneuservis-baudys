import Navbar from './components/Navbar'
import Hero from './container/Hero'
import Services from './container/Services'
import OpeningHours from './container/OpeningHours'
import Pricelist from './container/Pricelist'
import Testimonials from './container/Testimonials'
import Footer from './components/Footer'

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
