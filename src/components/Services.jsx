import tire1 from '../assets/tire-1.jpg'
import tire2 from '../assets/tire-2.jpg'
import tire3 from '../assets/tire-3.jpg'
import tire4 from '../assets/tire-4.jpg'
import tire5 from '../assets/tire-5.jpg'
import Container from './Container'
import { Fade } from 'react-reveal'
import { AiFillTag } from 'react-icons/ai'
import dots from '../assets/dots.svg'

const Item = ({ image, subheading, text, inverted, banner, buy }) =>
  inverted ? (
    <Fade left>
      <div className='grid sm:grid-cols-2 content-center items-center'>
        <div className='relative sm:pr-4'>
          <h2 className='darksubheading text-2xl sm:text-4xl text-center mb-2'>
            {subheading}
          </h2>
          {banner && (
            <p className='px-4 py-1 mt-3 font-semibold text-2xl rounded text-dark tracking-widest bg-accent w-min'>
              Novinka!
              {<AiFillTag />}
            </p>
          )}
          <div className='absolute circle-gradient left-0 top-0 w-full h-full' />
        </div>
        <img src={image} alt={subheading} />
      </div>
    </Fade>
  ) : (
    <Fade right>
      <div className='flex flex-col-reverse sm:grid sm:grid-cols-2 content-center items-center'>
        <img src={image} alt={subheading} />
        <div className='relative sm:pl-4'>
          <h2 className='darksubheading text-2xl sm:text-4xl text-center mb-2'>
            {subheading}
          </h2>
          {banner && (
            <p className='flex items-center gap-1 px-4 py-1 my-3 sm:mb-0 font-semibold text-2xl rounded text-dark tracking-widest bg-accent w-min'>
              {<AiFillTag />}
              Novinka!
            </p>
          )}
          <div className='absolute circle-gradient left-0 top-0 w-full h-full' />
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
            image={tire4}
            subheading='TPMS instalace a diagnostika'
            banner
          />
          <Item image={tire1} subheading='Přezutí kol' inverted />
          <Item image={tire2} subheading='Montáž kol' />
          <Item image={tire3} subheading='Prodej ojetých pneumatik' inverted />
          <Item image={tire5} subheading='Prodej použitých disků' />
        </div>
        <img
          className='hidden 2xl:block absolute top-4 left-4'
          src={dots}
          alt='dots'
        />
        <div className='cover hidden 2xl:block absolute top-4 left-4 w-64 h-[26rem]' />
        <img
          className='hidden 2xl:block absolute bottom-4 right-4'
          src={dots}
          alt='dots'
        />
        <div className='reversecover hidden 2xl:block absolute bottom-4 right-4 w-64 h-[26rem]' />
      </div>
    </Container>
  )
}
