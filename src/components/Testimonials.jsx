import Container from './Container'
import man1 from '../assets/man-1.jpg'
import man2 from '../assets/man-2.jpg'
import man3 from '../assets/man-3.jpg'
import { Fade } from 'react-reveal'
import { AiFillStar } from 'react-icons/ai'
import { SiGooglemaps } from 'react-icons/si'

const Card = ({ img, name, text }) => (
  <div className='flex items-center justify-center py-20 bg-light rounded-lg relative min-h-[222px] sm:min-h-[400px]'>
    <img
      src={img}
      alt={name}
      className='rounded-[50%] absolute w-16 h-16 top-2 left-2'
    />
    <p className='darksubheading px-8'>{text}</p>
    <div className='absolute bottom-2 left-2'>
      <div className='text-yellow-500 text-lg flex'>
        {Array.from({ length: 5 }, _ => (
          <AiFillStar />
        ))}
      </div>
      <p className='darktext'>{name}</p>
    </div>
  </div>
)

export default function Testimonials() {
  return (
    <Container dark>
      <div className='pt-12 sm:pt-24 pb-6' id='testimonials'>
        <Fade bottom>
          <div className='grid sm:grid-cols-3 flex-wrap gap-10 relative'>
            <Fade left>
              <div className='hidden 2xl:block absolute bottom-40 -left-72'>
                <p className='text text-xl mb-2'>Nezapomeň nás ohodnotit!</p>
                <a
                  href='https://goo.gl/maps/zsaWsHR8UZAxUF7j6'
                  target='_blank'
                  className='bg-accent cursor-pointer py-2 flex gap-1 items-center justify-center text-2xl uppercase font-semibold hover:scale-[99%]'
                >
                  <SiGooglemaps className='darktext w-7 h-7' />
                  <p>Mapy Google</p>
                </a>
              </div>
            </Fade>
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
        </Fade>
      </div>
    </Container>
  )
}
