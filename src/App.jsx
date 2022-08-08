import { useEffect, useState } from 'react'
import './App.css'
import WeatherApp from './components/WeatherApp'

function App() {

  const [coords, setCoords] = useState()
  const [bgImg, setBgImg] = useState()

  useEffect(() => {

    const success = (pos) => {
      const location = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setCoords(location)
    }

    navigator.geolocation.getCurrentPosition(success)
  }, [])

  console.log(coords);
  

  return (
    <div className="App" style={bgImg}>
      <WeatherApp lon={coords?.lon} lat={coords?.lat} setBgImg={setBgImg}/>
    </div>
  )
}

export default App
