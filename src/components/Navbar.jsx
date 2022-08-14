export default function Navbar() {
  return (
    <nav className='flex justify-between items-center py-6'>
      <h1 className='text-5xl text-white uppercase'>Pneuservis Baudyš</h1>
      <ul className='list-none flex gap-5 items-center link'>
        <li>
          <a href='#info'>Info</a>
        </li>
        <li>
          <a href='#services'>Služby</a>
        </li>
        <li>
          <a href='#kontakt'>Kontakt</a>
        </li>
      </ul>
    </nav>
  )
}
