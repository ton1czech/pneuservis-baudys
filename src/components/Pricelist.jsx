import Container from './Container'
import { Fade } from 'react-reveal'

const Item = ({ price, text }) => (
  <div className='grid grid-cols-[2fr_1fr] gap-20'>
    <h2 className='subheading'>{text}</h2>
    <p className='subheading text-2xl'>{price} Kč</p>
  </div>
)

export default function Pricelist() {
  return (
    <Container>
      <div id='pricelist' className='py-12 sm:py-24'>
        <Fade>
          <div className='py-10 sm:py-16 bg-dark rounded-lg relative grid justify-center space-y-4 sm:space-y-6'>
            <Item price='500' text='přezutí a vyvážení (4ks)' />
            <Item price='300-600' text='pneumatika' />
            <Item price='500' text='chytré ventýlky (4ks)' />
            <Item price='500' text='diagnostika ventýlků' />
          </div>
        </Fade>
      </div>
    </Container>
  )
}
