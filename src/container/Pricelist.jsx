import Container from '../components/Container'

import { Fade } from 'react-reveal'
import { GiMoneyStack } from 'react-icons/gi'

const Item = ({ price, text, last }) => (
  <>
    <div className='grid grid-cols-[2fr_1fr] gap-8 sm:gap-20'>
      <h2 className='sm:text-xl text-[15px] text-light'>{text}</h2>
      <p className='font-semibold sm:text-2xl text-[17px] text-light text-right'>
        {price}
      </p>
    </div>
    {!last && <div className='h-px bg-light w-full opacity-50' />}
  </>
)

export default function Pricelist() {
  return (
    <Container>
      <div id='pricelist' className='py-12 sm:py-24'>
        <Fade>
          <div className='py-6 px-4 sm:p-16 bg-dark rounded-lg relative grid justify-center space-y-4 sm:space-y-6'>
            <Item price='500+ Kč' text='Přezutí a vyvážení (4ks)' />
            <Item price='400+ Kč' text='Pneumatika' />
            <Item price='1200 kč' text='Chytré ventilky (1ks)' />
            <Item price='500 kč' text='Diagnostika ventilků' last />
            <GiMoneyStack className='block text-light opacity-5 absolute left-0 top-0 w-full h-full pointer-events-none' />
          </div>
        </Fade>
      </div>
    </Container>
  )
}
