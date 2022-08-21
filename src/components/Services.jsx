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
        <div className='relative'>
          <h2 className='darksubheading text-2xl sm:text-3xl text-left sm:text-center mb-2'>
            {subheading}
          </h2>
          <p className='darktext sm:pr-4 text-justify'>{text}</p>
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
        <div className='relative'>
          <h2 className='darksubheading text-2xl sm:text-3xl text-left sm:text-center mb-2'>
            {subheading}
          </h2>
          <p className='darktext sm:pl-4 text-justify'>{text}</p>
          {banner && (
            <p className='flex items-center gap-1 px-4 py-1 sm:ml-4 my-3 sm:mb-0 font-semibold text-2xl rounded text-dark tracking-widest bg-accent w-min'>
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
            text='Ventilky a diagnostika od značky Milwaukee pro zjištění tlaku v pneumatice, teploty pneumatiky nebo zjištění točivého momentu'
            banner
          />
          <Item
            image={tire1}
            subheading='Přezutí kol'
            text='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth'
            inverted
          />
          <Item
            image={tire2}
            subheading='Montáž kol'
            text='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.'
          />
          <Item
            image={tire3}
            subheading='Prodej ojetých pneumatik'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
            inverted
          />
          <Item
            image={tire5}
            subheading='Prodej použitých disků'
            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
          />
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
