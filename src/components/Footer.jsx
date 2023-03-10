import Container from './Container'

import { Fade } from 'react-reveal'
import { SiFacebook, SiGooglemaps } from 'react-icons/si'
import { AiFillPhone } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

const Link = ({ url, text, logo }) => (
  <li>
    <a
      href={url}
      target='_blank'
      className='link font-normal flex gap-1 items-center justify-center sm:justify-start'
    >
      <div className='font-bold'>{logo}</div>
      {text}
    </a>
  </li>
)

const Item = ({ text, logo }) => (
  <li>
    <p className='text text-sm sm:text-base flex justify-center sm:justify-start items-center gap-1'>
      <div className='font-bold'>{logo}</div>
      {text}
    </p>
  </li>
)

const OpeningHoursItem = ({ day, weekend }) => (
  <li
    className='flex justify-center gap-6 sm:gap-0 text-left sm:grid sm:grid-cols-2 text text-sm sm:text-base
    '
  >
    <p>{day}</p>
    {weekend ? (
      <>
        <p>domluva</p>
        <p>
          <br />
          {''}
        </p>
      </>
    ) : (
      <div>
        <p>8:30-11:30</p>
        <p>13:00-17:00</p>
      </div>
    )}
  </li>
)

export default function Footer() {
  return (
    <Container dark>
      <div className='h-px w-full bg-light opacity-50' />
      <div className='py-6 text-center'>
        <Fade top>
          <div className='flex flex-col sm:flex-row justify-between sm:text-left'>
            <ul>
              <Link
                url='https://www.facebook.com/marketplace/profile/100078154283635/?ref=share_attachment'
                text='Facebook Marketplace'
                logo={<SiFacebook />}
              />
              <Link
                url='https://www.bazos.cz/search.php?hledat=777004000&rubriky=www&hlokalita=&humkreis=25&cenaod=&cenado=&Submit=Hledat&kitx=ano'
                text='Bazoš'
                logo='@('
              />
              <Link
                url='https://goo.gl/maps/zsaWsHR8UZAxUF7j6'
                text='Mapy Google'
                logo={<SiGooglemaps />}
              />
            </ul>
            <ul className='mt-12 sm:mt-0'>
              <a href='mailto:ladikmoto@seznam.cz'>
                <Item logo={<MdEmail />} text='ladikmoto@seznam.cz' />
              </a>
              <a href='tel:+420777004000'>
                <Item logo={<AiFillPhone />} text='+420 777 004 000' />
              </a>
            </ul>
            <ul className='hidden sm:block space-y-3'>
              <OpeningHoursItem day='Pondělí' />
              <OpeningHoursItem day='Úterý' />
              <OpeningHoursItem day='Středa' />
              <OpeningHoursItem day='Čtvrtek' />
              <OpeningHoursItem day='Pátek' />
              <OpeningHoursItem day='Sobota' weekend />
              <OpeningHoursItem day='Neděle' weekend />
            </ul>
          </div>
        </Fade>
        <Fade bottom>
          <p className='text text-xs mt-12 sm:mt-20'>Hájek 10, Kdyně 345 06</p>
          <div className='mt-4 sm:mt-8'>
            <a
              className='text text-xs  hover:text-accent'
              href='https://www.flaticon.com/free-icons/tire'
              target='_blank'
            >
              Tire icons created by Vichanon Chaimsuk - Flaticon
            </a>
          </div>
          <p className='text text-xs mt-2 sm:mt-4'>
            &copy;{new Date().getFullYear()} Daniel Anthony Baudyš. Všechna
            práva vyhrazena.
          </p>
        </Fade>
      </div>
    </Container>
  )
}
