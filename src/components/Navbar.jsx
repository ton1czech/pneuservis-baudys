import { GiFlatTire } from 'react-icons/gi'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center py-6'>
      <h1 className='logo flex items-center content-center gap-2 md:gap-5'>
        <span className='flex items-center content-center'>
          <GiFlatTire className='md:w-12 md:h-12 md:pb-1' />
          servis
        </span>{' '}
        baudyš
      </h1>
      <ul className='list-none flex gap-3 md:gap-5 items-center'>
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
  )
}
