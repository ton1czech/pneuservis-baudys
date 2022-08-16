import Hero from './components/Hero'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className='bg-dark w-full overflow-hidden font-poppins px-5'>
      <div className='md:max-w-[60%] m-auto'>
        <Navbar />
        <Hero />
      </div>
    </div>
  )
}
