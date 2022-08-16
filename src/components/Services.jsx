import tire1 from '../assets/tire-1.jpg'
import tire2 from '../assets/tire-2.jpg'
import tire3 from '../assets/tire-3.jpg'

export default function Services() {
  return (
    <div className='pb-24' id='services'>
      <h1 className='heading'>Co nabízíme?</h1>
      <div className='grid'>
        <div className='grid md:grid-cols-2'>
          <h2 className='text text-center'>přezouvání kol</h2>
          <img src={tire1} alt='' />
        </div>
        <div className='flex flex-col-reverse md:grid md:grid-cols-2'>
          <img src={tire2} alt='' />
          <h2 className='text text-center'>výměna kol</h2>
        </div>
        <div className='grid md:grid-cols-2'>
          <h2 className='text text-center'>prodej ojetých pneumatik</h2>
          <img src={tire3} alt='' />
        </div>
      </div>
    </div>
  )
}
