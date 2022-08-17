import Container from './Container'

export default function Footer() {
  return (
    <Container dark>
      <div className='py-6 sm:py-8 text-center'>
        <div className='grid sm:grid-cols-2'>
          <ul className='sm:text-left'>
            <li>
              <h1 className='subheading pb-2 sm:pb-3'>odkazy</h1>
            </li>
            <li>
              <a
                href='https://www.facebook.com/marketplace/profile/100078154283635/?ref=share_attachment'
                target='_blank'
                className='link font-normal'
              >
                Facebook Marketplace
              </a>
            </li>
            <li>
              <a
                href='https://www.bazos.cz/search.php?hledat=777004000&rubriky=www&hlokalita=&humkreis=25&cenaod=&cenado=&Submit=Hledat&kitx=ano'
                target='_blank'
                className='link font-normal'
              >
                Bazoš
              </a>
            </li>
            <li>
              <a
                href='https://goo.gl/maps/zsaWsHR8UZAxUF7j6'
                target='_blank'
                className='link font-normal'
              >
                Mapy Google
              </a>
            </li>
          </ul>
          <ul className='sm:text-left pt-8 sm:pt-0'>
            <li>
              <h1 className='subheading pb-2 sm:pb-3'>kontakt</h1>
            </li>
            <li>
              <p className='text text-sm sm:text-base'>ladikmoto@seznam.cz</p>
            </li>
            <li>
              <p className='text text-sm sm:text-base'>+420 777 004 000</p>
            </li>
          </ul>
        </div>
        <p className='text mt-12 sm:mt-20'>
          &copy;{new Date().getFullYear()} Daniel Anthony Baudyš. Všechna práva
          vyhrazena.
        </p>
      </div>
    </Container>
  )
}