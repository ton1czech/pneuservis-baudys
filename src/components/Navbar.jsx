import { GiFlatTire } from 'react-icons/gi'
import Container from './Container'
import { Fade } from 'react-reveal'

const Link = ({ url, text }) => (
  <li className='link'>
    <a href={url}>{text}</a>
  </li>
)

export default function Navbar() {
  return (
    <Container dark>
      <nav className='flex justify-between items-center py-6'>
        <Fade left top>
          <div className='logo flex gap-2 sm:gap-3'>
            <GiFlatTire className='-mr-2 sm:-mr-3 w-4 h-4 sm:w-6 sm:h-6' />
            servis baudyš
          </div>
        </Fade>
        <Fade top>
          <ul className='list-none flex gap-3 sm:gap-4 items-center'>
            <Link url='#services' text='Služby' />
            <Link url='#pricelist' text='Ceník' />
            <Link url='#contact' text='Kontakt' />
          </ul>
        </Fade>
      </nav>
    </Container>
  )
}
