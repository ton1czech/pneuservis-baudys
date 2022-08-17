import { GiFlatTire } from 'react-icons/gi'
import Container from './Container'

export default function Navbar() {
  return (
    <Container dark>
      <nav className='flex justify-between items-center py-6'>
        <div className='logo flex gap-2 sm:gap-3'>
          <GiFlatTire className='-mr-2 sm:-mr-3 w-4 h-4 sm:w-6 sm:h-6' />
          servis baudyš
        </div>
        <ul className='list-none flex gap-3 sm:gap-4 items-center'>
          <li className='link'>
            <a href='#info'>Info</a>
          </li>
          <li className='link'>
            <a href='#services'>Služby</a>
          </li>
          <li className='link'>
            <a href='#contact'>Kontakt</a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
