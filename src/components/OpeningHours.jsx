import Container from './Container'
import { Fade } from 'react-reveal'

const Item = ({ day, weekend }) => (
  <div className='grid grid-cols-2 gap-12 sm:gap-28'>
    <h2 className='darksubheading'>{day}</h2>
    <div className='darktext'>
      {weekend ? (
        <>
          <p>domluva</p>
          <p>
            <br />
            {''}
          </p>
        </>
      ) : (
        <>
          <p>8:30-11:30</p>
          <p>13:00-17:00</p>
        </>
      )}
    </div>
  </div>
)

export default function OpeningHours() {
  return (
    <Container dark>
      <div className='py-12 sm:py-24' id='openinghours'>
        <Fade>
          <div className='p-10 sm:p-16 bg-light rounded-lg relative grid justify-center space-y-4 sm:space-y-6'>
            <Item day='Pondělí' />
            <Item day='Úterý' />
            <Item day='Středa' />
            <Item day='Čtvrtek' />
            <Item day='Pátek' />
            <Item day='Sobota' weekend />
            <Item day='Neděle' weekend />
          </div>
        </Fade>
      </div>
    </Container>
  )
}
