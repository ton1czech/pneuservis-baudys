export default function Map() {
  return (
    <div className='flex justify-end relative'>
      <div className='absolute w-full h-full bg-black opacity-[12%]' />
      <iframe
        src='https://maps.google.com/maps?q=h%C3%A1jek%2010%20v%C5%A1eruby&t=&z=11&ie=UTF8&iwloc=&output=embed'
        scrolling='no'
        className='max-h-[600px] w-full aspect-square rounded'
      ></iframe>
    </div>
  )
}
