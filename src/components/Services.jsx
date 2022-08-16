import tire1 from '../assets/tire-1.jpg'
import tire2 from '../assets/tire-2.jpg'
import tire3 from '../assets/tire-3.jpg'

const Item = ({ image, text, inverted }) =>
  inverted ? (
    <div className='grid md:grid-cols-2'>
      <h2 className='text text-center'>{text}</h2>
      <img src={image} alt='' />
    </div>
  ) : (
    <div className='flex flex-col-reverse md:grid md:grid-cols-2'>
      <img src={image} alt='' />
      <h2 className='text text-center'>{text}</h2>
    </div>
  )

export default function Services() {
  return (
    <div className='pb-24' id='services'>
      <h1 className='heading'>Co nabízíme?</h1>
      <div className='grid'>
        <Item image={tire1} text='přezouvání kol' />
        <Item image={tire2} text='výměna kol' inverted />
        <Item image={tire3} text='prodej ojetých pneumatik' />
      </div>
    </div>
  )
}
