import Container from './Container'
import Map from './Map'
import { Fade } from 'react-reveal'

const Card = ({ text }) => (
  <div className='bg-light rounded-md w-min h-min'>
    <h1 className='darksubheading uppercase p-4 tracking-widest'>{text}</h1>
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
              Veškeré služby pro Vaše auto na jednom místě
            </h1>
            <Fade bottom>
              <div className='hidden sm:flex flex-col space-y-6'>
                <Card text='levné' />
                <Card text='rychlé' />
                <Card text='spolehlivé' />
              </div>
            </Fade>
          </div>
        </Fade>
        <Fade right>
          <Map />
        </Fade>
      </div>
    </Container>
  )
}
