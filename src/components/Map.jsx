export default function Map() {
  return (
    <div className='flex justify-end relative'>
      <div className='absolute w-full h-full bg-black opacity-[12%] pointer-events-none' />
      <iframe
        src='https://maps.google.com/maps?q=pneuservis%20baudy%C5%A1&t=&z=11&ie=UTF8&iwloc=&output=embed'
        className='max-h-[600px] w-full aspect-square rounded'
        scrolling='no'
        referrerpolicy='no-referrer-when-downgrade'
        loading='lazy'
      ></iframe>
    </div>
  )
}
