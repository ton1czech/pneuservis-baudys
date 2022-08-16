import tire1 from '../assets/tire-1.jpg'
import tire2 from '../assets/tire-2.jpg'
import tire3 from '../assets/tire-3.jpg'

const Item = ({ image, subheading, text, inverted, padding }) =>
  inverted ? (
    <div className='grid sm:grid-cols-2 content-center items-center'>
      <div>
        <h2 className='subheading text-center'>{subheading}</h2>
        <p className='text sm:pr-4'>{text}</p>
      </div>
      <img src={image} alt='' className={padding && 'pb-8 sm:pb-0'} />
    </div>
  ) : (
    <div className='flex flex-col-reverse sm:grid sm:grid-cols-2 content-center items-center'>
      <img src={image} alt='' className={padding && 'pb-8 sm:pb-0'} />
      <div>
        <h2 className='subheading text-center'>{subheading}</h2>
        <p className='text sm:pl-4'>{text}</p>
      </div>
    </div>
  )

export default function Services() {
  return (
    <div className='pb-40 scroll-mt-7' id='services'>
      <h1 className='heading mb-8'>U nás Vám nic chybět nebude</h1>
      <div className='grid'>
        <Item
          image={tire1}
          subheading='přezouvání kol'
          text='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth'
          padding
        />
        <Item
          image={tire2}
          subheading='výměna kol'
          text='At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui.'
          inverted
          padding
        />
        <Item
          image={tire3}
          subheading='prodej ojetých pneumatik'
          text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        />
      </div>
    </div>
  )
}
