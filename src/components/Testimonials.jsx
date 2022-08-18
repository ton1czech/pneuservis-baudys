import Container from './Container'
import man1 from '../assets/man-1.jpg'
import man2 from '../assets/man-2.jpg'
import man3 from '../assets/man-3.jpg'

const Card = ({ img, name, text }) => (
  <div className='flex items-center justify-center py-20 bg-light rounded-lg relative flex-1 min-h-[400px]'>
    <img
      src={img}
      alt={name}
      className='rounded-[50%] absolute w-16 h-16 top-2 left-2'
    />
    <p className='darksubheading px-8'>{text}</p>
    <p className='absolute darktext bottom-2 left-2'>{name}</p>
  </div>
)

export default function Testimonials() {
  return (
    <Container dark>
      <div className='py-12 sm:py-24'>
        <div className='flex flex-wrap gap-10'>
          <Card
            img={man1}
            name='Jakub Novák'
            text='Výborný přístup, dobré ceny.'
          />
          <Card
            img={man2}
            name='Matyáš Svoboda'
            text='Dobré ceny, dobrá práce.'
          />
          <Card img={man3} name='Vojtěch Dvořák' text='Vstřícnost,ceny 👍' />
        </div>
      </div>
    </Container>
  )
}
