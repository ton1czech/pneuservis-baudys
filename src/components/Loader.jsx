import { Html, useProgress } from '@react-three/drei'

const Loader = () => {
  const { progress } = useProgress()

  return (
    <Html>
      <p className='text-light text-xl'>{progress.toFixed(2)}%</p>
    </Html>
  )
}

export default Loader
