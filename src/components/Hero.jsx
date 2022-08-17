import Container from './Container'
import Map from './Map'

export default function Hero() {
  return (
    <Container dark>
      <div
        className='sm:grid sm:grid-cols-2 flex flex-col-reverse w-full pb-12 sm:pb-24 scroll-mt-7'
        id='info'
      >
        <div>
          <h1 className='heading'>levně a rychle</h1>
        </div>
        <Map />
      </div>
    </Container>
  )
}
