import Container from '../components/Container'
import Map from '../components/Map'

import { Fade } from 'react-reveal'
import { TbArrowLoopLeft2 } from 'react-icons/tb'
import Rim from '../components/3D/Rim'

export default function Hero() {
  return (
    <Container dark>
      <div
        className='sm:grid sm:grid-cols-2 gap-2 flex flex-col w-full pt-6 pb-12'
        id='home'
      >
        <Fade left>
          <div className='flex flex-col justify-between gap-1'>
            <h1 className='text-light text-xl sm:text-5xl font-semibold mb-6 sm:mb-0'>
              Veškeré služby pro Vaše kola na jednom místě
            </h1>
            <div className='h-full lg:block hidden relative after:absolute after:bg-light after:inset-0 after:w-full after:h-full after:blur-3xl after:pointer-events-none after:opacity-[7%] after:rounded-full'>
              <Rim />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div>
            <Map />
            <div className='flex mt-6 justify-center'>
              <p className='text-light text-xl sm:text-2xl font-semibold'>
                Najdi si k nám cestu!
              </p>
              <TbArrowLoopLeft2 className='text-light text-2xl sm:text-4xl rotate-90 ml-2' />
            </div>
          </div>
        </Fade>
      </div>
    </Container>
  )
}
