import Container from './Container'
import { Fade } from 'react-reveal'

const Item = ({ price, text }) => (
  <>
    <div className='grid grid-cols-[2fr_1fr] gap-20'>
      <h2 className='subheading sm:text-3xl text-base'>{text}</h2>
      <p className='subheading sm:text-2xl text-base'>{price} Kč</p>
    </div>
    <div className='h-px bg-light w-full opacity-50' />
  </>
)

export default function Pricelist() {
  return (
    <Container>
      <div id='pricelist' className='py-12 sm:py-24'>
        <Fade>
          <div className='p-10 sm:p-16 bg-dark rounded-lg relative grid justify-center space-y-4 sm:space-y-6'>
            <Item price='500' text='přezutí a vyvážení (4ks)' />
            <Item price='300' text='pneumatika' />
            <Item price='500' text='chytré ventýlky (4ks)' />
            <Item price='500' text='diagnostika ventýlků' />
          </div>
        </Fade>
      </div>
    </Container>
  )
}
