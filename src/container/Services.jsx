import Container from '../components/Container'

import { Fade } from 'react-reveal'
import { AiFillTag } from 'react-icons/ai'

import services1 from '/assets/services1.jpg'
import services2 from '/assets/services2.jpg'
import services3 from '/assets/services3.jpg'
import services4 from '/assets/services4.jpg'
import services5 from '/assets/services5.jpg'
import services6 from '/assets/services6.jpg'

const Item = ({ image, subheading, banner }) => (
  <Fade left>
    <div className=''>
      <img
        className='relative aspect-square overflow-hidden object-cover'
        src={image}
        alt={subheading}
      />
      <div className='absolute bg-black opacity-75 inset-0' />
      <div className='absolute inset-0 grid content-center'>
        <h2 className='text-light font-semibold text-2xl sm:text-4xl text-center'>
          {subheading}
        </h2>
      </div>
      {banner && (
        <p className='absolute bottom-1/2 left-1/2 -translate-x-1/2 translate-y-[150px] flex items-center px-4 py-1 font-semibold text-2xl rounded text-dark tracking-widest bg-accent w-min'>
          Novinka!
          {<AiFillTag />}
        </p>
      )}
    </div>
  </Fade>
)

export default function Services() {
  return (
    <Container>
      <div className='py-12 sm:py-24' id='services'>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-1'>
          <Item
            image={services1}
            subheading='TPMS instalace a diagnostika'
            banner
          />
          <Item image={services2} subheading='Přezutí kol' />
          <Item image={services3} subheading='Montáž kol' />
          <Item image={services4} subheading='Prodej ojetých pneumatik' />
          <Item
            image={services5}
            subheading='Programování funkcí do BMW'
            banner
          />
          <Item image={services6} subheading='Prodej použitých disků' />
        </div>
      </div>
    </Container>
  )
}
