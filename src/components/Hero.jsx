import Container from './Container'
import Map from './Map'
import { Fade } from 'react-reveal'
import { TbArrowLoopLeft2 } from 'react-icons/tb'

const Card = ({ text }) => (
  <div className='bg-light rounded-md w-min h-min'>
    <h1 className='darksubheading text-2xl uppercase p-4 tracking-widest'>
      {text}
    </h1>
  </div>
)

export default function Hero() {
  return (
    <Container dark>
      <div
        className='sm:grid sm:grid-cols-2 flex flex-col w-full pt-6 pb-12 sm:pb-24'
        id='home'
      >
        <Fade left>
          <div className='flex flex-col justify-between'>
            <h1 className='heading leading-snug mb-6 sm:mb-0 pr-4'>
              Veškeré služby pro Vaše kola na jednom místě
            </h1>
            <Fade bottom>
              <div className='hidden lg:flex flex-col space-y-6'>
                <Card text='levné' />
                <Card text='rychlé' />
                <Card text='spolehlivé' />
              </div>
            </Fade>
          </div>
        </Fade>
        <Fade right>
          <div className='relative'>
            <Map />
            <div className='hidden 2xl:block absolute top-44 -right-72'>
              <TbArrowLoopLeft2 className='text-light text-[8rem]' />
              <p className='text-light text-2xl font-semibold'>
                Najdi si k nám cestu!
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </Container>
  )
}
