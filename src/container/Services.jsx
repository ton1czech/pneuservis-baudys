import Container from '../components/Container'

import { Fade } from 'react-reveal'
import { AiFillTag } from 'react-icons/ai'

import services1 from '/assets/services1.jpg'
import services2 from '/assets/services2.jpg'
import services3 from '/assets/services3.jpg'
import services4 from '/assets/services4.jpg'
import services5 from '/assets/services5.jpg'
import services6 from '/assets/services6.jpg'
import services7 from '/assets/services7.png'
import dots from '/assets/dots.svg'

const Item = ({ image, subheading, inverted, banner }) =>
  inverted ? (
    <Fade left>
      <div className='grid sm:grid-cols-2 content-center items-center'>
        <div className='flex flex-col items-center relative sm:pr-4'>
          <h2 className='text-dark font-semibold text-2xl sm:text-4xl text-center mb-2'>
            {subheading}
          </h2>
          {banner && (
            <p className='px-4 py-1 mt-3 font-semibold text-2xl rounded text-dark tracking-widest bg-accent w-min'>
              Novinka!
              {<AiFillTag />}
            </p>
          )}
          <div className='absolute circle-gradient left-0 top-0 w-full h-full pointer-events-none' />
        </div>
        <img src={image} alt={subheading} />
      </div>
    </Fade>
  ) : (
    <Fade right>
      <div className='flex flex-col-reverse sm:grid sm:grid-cols-2 content-center items-center'>
        <img src={image} alt={subheading} />
        <div className='flex flex-col items-center relative sm:pl-4'>
          <h2 className='text-dark font-semibold text-2xl sm:text-4xl text-center mb-2'>
            {subheading}
          </h2>
          {banner && (
            <p className='flex items-center gap-1 px-4 py-1 my-3 sm:mb-0 font-semibold text-2xl rounded text-dark tracking-widest bg-accent w-min'>
              {<AiFillTag />}
              Novinka!
            </p>
          )}
          <div className='absolute circle-gradient left-0 top-0 w-full h-full pointer-events-none' />
        </div>
      </div>
    </Fade>
  )

export default function Services() {
  return (
    <Container>
      <div className='py-12 sm:py-24' id='services'>
        <div className='grid space-y-20 sm:space-y-0'>
          <Item
            image={services1}
            subheading='TPMS instalace a diagnostika'
            banner
          />
          <Item image={services2} subheading='Přezutí kol' inverted />
          <Item image={services3} subheading='Montáž kol' />
          <Item
            image={services4}
            subheading='Prodej ojetých pneumatik'
            inverted
          />
          <Item
            image={services5}
            subheading='Prodej nových pneumatik značky Diplomat (pod značkou Goodyear)'
            banner
          />
          <Item
            image={services6}
            subheading='Prodej použitých disků'
            inverted
          />
          <Item
            image={services7}
            subheading='Programování funkcí do BMW'
            banner
          />
        </div>
      </div>
    </Container>
  )
}
