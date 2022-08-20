import Container from './Container'
import { Fade } from 'react-reveal'
import { SiFacebook, SiGooglemaps } from 'react-icons/si'

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

const Item = ({ text }) => (
  <li>
    <p className='text text-sm sm:text-base'>{text}</p>
  </li>
)

const OpeningHoursItem = ({ day, weekend, last }) => (
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
              <Item text='ladikmoto@seznam.cz' />
              <Item text='+420 777 004 000' />
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
          <p className='text text-xs mt-4 sm:mt-8'>
            &copy;{new Date().getFullYear()} Daniel Anthony Baudyš. Všechna
            práva vyhrazena.
          </p>
        </Fade>
      </div>
    </Container>
  )
}
