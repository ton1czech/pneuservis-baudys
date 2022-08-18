import Container from './Container'

const Link = ({ url, text }) => (
  <li>
    <a href={url} target='_blank' className='link font-normal'>
      {text}
    </a>
  </li>
)

const Item = ({ text }) => (
  <li>
    <p className='text text-sm sm:text-base'>{text}</p>
  </li>
)

const Heading = ({ text, first }) => (
  <h1 className={`subheading pb-2 sm:pb-3 ${!first && 'mt-16 sm:mt-0'}`}>
    {text}
  </h1>
)

const OpeningHoursItem = ({ day, weekend, last }) => (
  <li
    className={`flex justify-center gap-6 sm:gap-0 text-left sm:grid sm:grid-cols-2 text text-sm sm:text-base ${
      !last && 'pb-3'
    }`}
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
      <div className='py-6 sm:py-8 text-center'>
        <div className='flex flex-col sm:flex-row justify-between sm:text-left'>
          <div>
            <Heading text='Odkazy' first />
            <ul>
              <Link
                url='https://www.facebook.com/marketplace/profile/100078154283635/?ref=share_attachment'
                text='Facebook Marketplace'
              />
              <Link
                url='https://www.bazos.cz/search.php?hledat=777004000&rubriky=www&hlokalita=&humkreis=25&cenaod=&cenado=&Submit=Hledat&kitx=ano'
                text='Bazoš'
              />
              <Link
                url='https://goo.gl/maps/zsaWsHR8UZAxUF7j6'
                text='Mapy Google'
              />
            </ul>
          </div>
          <div>
            <Heading text='Kontakt' />
            <ul>
              <Item text='ladikmoto@seznam.cz' />
              <Item text='+420 777 004 000' />
            </ul>
          </div>
          <div>
            <Heading text='Otevírací doba' />
            <ul>
              <OpeningHoursItem day='Pondělí' />
              <OpeningHoursItem day='Úterý' />
              <OpeningHoursItem day='Středa' />
              <OpeningHoursItem day='Čtvrtek' />
              <OpeningHoursItem day='Pátek' />
              <OpeningHoursItem day='Sobota' weekend />
              <OpeningHoursItem day='Neděle' weekend last />
            </ul>
          </div>
        </div>
        <p className='text mt-12 sm:mt-20'>
          &copy;{new Date().getFullYear()} Daniel Anthony Baudyš. Všechna práva
          vyhrazena.
        </p>
      </div>
    </Container>
  )
}
