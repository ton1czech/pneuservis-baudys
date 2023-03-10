import Container from './Container'

import { GiFlatTire } from 'react-icons/gi'
import { BiLinkExternal } from 'react-icons/bi'
import { Fade } from 'react-reveal'

const Link = ({ url, text, external }) => (
  <li>
    <a
      className={`text-sm font-medium flex items-center gap-1 ease-out duration-100 ${
        external
          ? 'bg-accent rounded py-1 px-2 text-dark hover:text-dark hover:scale-[98%]'
          : 'text-light hover:text-accent'
      }`}
      href={url}
      target={`${external ? '_blank' : ''}`}
    >
      {text}
      {external && <BiLinkExternal />}
    </a>
  </li>
)

export default function Navbar() {
  return (
    <Container dark>
      <nav className='flex justify-between items-center py-6'>
        <Fade left top>
          <a
            href='#home'
            className='font-semibold text-sm sm:text-xl text-light uppercase flex gap-2 sm:gap-3'
          >
            <GiFlatTire className='-mr-2 sm:-mr-3 w-4 h-4 sm:w-6 sm:h-6' />
            baudyš
          </a>
        </Fade>
        <Fade top>
          <ul className='list-none flex gap-3 sm:gap-4 items-center'>
            <Link url='#services' text='Služby' />
            <Link url='#pricelist' text='Ceník' />
            <div className='hidden sm:block'>
              <Link url='#openinghours' text='Otevírací doba' />
            </div>
            <Link
              url='https://www.bazos.cz/search.php?hledat=777004000&rubriky=www&hlokalita=&humkreis=25&cenaod=&cenado=&Submit=Hledat&kitx=ano'
              text='Koupit'
              external
            />
          </ul>
        </Fade>
      </nav>
      <div className='h-[1px] w-full bg-light opacity-50' />
    </Container>
  )
}
