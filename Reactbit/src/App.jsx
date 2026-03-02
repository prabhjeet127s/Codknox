
import './App.css'
import Balatro from './Components/Balatro'

function App() {
  

  return (
    <>
      <Balatro className='h-full w-full'
        isRotate={false}
        mouseInteraction
        pixelFilter={745}
        color1="#DE443B"
        color2="#006BB4"
        color3="#162325"
      />
      <h2  className='text-9xl font-bold' >hello</h2>
    </>
  )
}

export default App
