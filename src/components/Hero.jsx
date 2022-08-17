import Container from './Container'
import Map from './Map'

export default function Hero() {
  return (
    <Container dark>
      <div
        className='sm:grid sm:grid-cols-2 flex flex-col-reverse w-full pb-24 scroll-mt-7'
        id='info'
      >
        <div>
          <p className='text'>hello</p>
        </div>
        <Map />
      </div>
    </Container>
  )
}
