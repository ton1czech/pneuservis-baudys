import Container from '../components/Container'

import { Fade } from 'react-reveal'
import { AiFillStar } from 'react-icons/ai'
import { SiGooglemaps } from 'react-icons/si'

import man1 from '/assets/man-1.jpg'
import man2 from '/assets/man-2.jpg'
import man3 from '/assets/man-3.jpg'

const Card = ({ img, name, text }) => (
  <div className='flex items-center justify-center py-20 bg-light rounded-lg relative h-[190px] sm:min-h-[280px]'>
    <img
      src={img}
      alt={name}
      className='rounded-[50%] absolute w-10 h-10 sm:w-16 sm:h-16 top-2 left-2'
    />
    <p className='font-semibold text-dark px-8 sm:text-2xl'>{text}</p>
    <div className='absolute bottom-2 left-2'>
      <div className='text-yellow-500 text-lg flex'>
        {Array.from({ length: 5 }, _ => (
          <AiFillStar />
        ))}
      </div>
      <p className='text-dark sm:text-lg'>{name}</p>
    </div>
  </div>
)

export default function Testimonials() {
  return (
    <Container dark>
      <div className='py-12 sm:py-24' id='testimonials'>
        <Fade bottom>
          <div className='grid sm:grid-cols-3 flex-wrap gap-10'>
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
          <Fade bottom>
            <div className='pt-12 sm:pt-20 flex flex-col sm:flex-row sm:gap-20 items-center'>
              <p className='text-light sm:text-5xl uppercase font-semibold mb-2'>
                Nezapomeň nás ohodnotit!
              </p>
              <a
                href='https://goo.gl/maps/zsaWsHR8UZAxUF7j6'
                target='_blank'
                className='bg-accent cursor-pointer py-2 flex flex-1 w-full gap-1 items-center justify-center text-2xl uppercase font-semibold hover:scale-[99%] rounded-md'
              >
                <SiGooglemaps className='darktext w-7 h-7' />
                <p>Mapy Google</p>
              </a>
            </div>
          </Fade>
        </Fade>
      </div>
    </Container>
  )
}
