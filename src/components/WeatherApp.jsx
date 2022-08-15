import axios from 'axios'
import React, { useEffect, useState } from 'react'

const WeatherApp = (props) => {

  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [isCeslsius, setIsCeslsius] = useState(true)

  let backgroundImg = {}


  useEffect(() => {
    
  
    const handleBackground = () => {
      if (weather?.weather[0].description === "clear sky") {
        backgroundImg = {
          backgroundImage: "url(/clear-sky.jpg)"
        }
        
      } else if (weather?.weather[0].main === "Thunderstorm") {
        backgroundImg = {
          backgroundImage: "url(/thunderstorm.jpg)"
        }
        
      } else if (weather?.weather[0].main === "Drizzle") {
        backgroundImg = {
          backgroundImage: "url(/Drizzle.jpg)"
        }
        
      } else if (weather?.weather[0].description === "scattered clouds") {
        backgroundImg = {
          backgroundImage: "url(/scattered-clouds.jpg)"
        }
        
      } else if (weather?.weather[0].description === "few clouds") {
        backgroundImg = {
          backgroundImage: "url(/few-clouds.jpg)"
        }
        
      } else if (weather?.weather[0].description === "broken clouds") {
        backgroundImg = {
          backgroundImage: "url(/broken-clouds.jpg)"
        }
        
      } else if (weather?.weather[0].description === "overcast clouds") {
        backgroundImg = {
          backgroundImage: "url(/overcast-clouds.jpg)"
        }
        
      } else if (weather?.weather[0].main === "Rain") {
        backgroundImg = {
          backgroundImage: "url(/rain.jpg)"
        }
        
      } else if (weather?.weather[0].main === "Snow") {
        backgroundImg = {
          backgroundImage: "url(/snow.jpg)"
        }
        
      } else if (weather?.weather[0].main === "Mist") {
        backgroundImg = {
          backgroundImage: "url(/mist.jpg)"
        }
        
      } else if (weather?.weather[0].main === "Mist") {
        backgroundImg = {
          backgroundImage: "url(/fog.jpg)"
        }
        
      } else if (weather?.weather[0].main === "Smoke") {
        backgroundImg = {
          backgroundImage: "url(/smoke.jpg)"
        }
        
      } else if (weather?.weather[0].main === "Haze") {
        backgroundImg = {
          backgroundImage: "url(/haze.jpg)"
        }
        
      } else if (weather?.weather[0].main === "Dust") {
        backgroundImg = {
          backgroundImage: "url(/dust.jpg)"
        }
        
      } else if (weather?.weather[0].main === "Fog") {
        backgroundImg = {
          backgroundImage: "url(/fog.jpg)"
        }
        
      } else if (weather?.weather[0].main === "Sand") {
        backgroundImg = {
          backgroundImage: "url(/sand.jpg)"
        }
        
      } else if (weather?.weather[0].main === "Dust") {
        backgroundImg = {
          backgroundImage: "url(/dust.jpg)"
        }
        
      } else if (weather?.weather[0].main === "Ash") {
        backgroundImg = {
          backgroundImage: "url(/volcanic-ash.jpg)"
        }
        
      } else if (weather?.weather[0].main === "Squall") {
        backgroundImg = {
          backgroundImage: "url(/squall.jpg)"
        }
        
      } else if (weather?.weather[0].main === "Tornado") {
        backgroundImg = {
          backgroundImage: "url(/tornado.jpg)"
        }
        
      }
      props.setBgImg(backgroundImg)
    }

    handleBackground()
 
  }, [weather])
  

  useEffect(() => {

    if (props.lat) {
      const APIKey = "9e4cc85e3d6a90e73ab6528b3d590405"
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&appid=${APIKey}`
    
      axios.get(URL)
        .then(res => {
          setWeather(res.data)

          const temp = {
            celsius: {
              celsius_temp: `${Math.round(res.data.main.temp - 273.15)}°C`,
              celsius_min: `${Math.round(res.data.main.temp_min - 273.15)}°C`,
              celsius_max: `${Math.round(res.data.main.temp - 273.15)}°C`,
              celsius_feels_like: `${Math.round(res.data.main.feels_like - 273.15)}°C`
            },
            farenheit: {
              farenheit_temp: `${Math.round((res.data.main.temp - 273.15) * 9 / 5 + 32)}°F`,
              farenheit_min: `${Math.round((res.data.main.temp_min - 273.15) * 9 / 5 + 32)}°F`,
              farenheit_max: `${Math.round((res.data.main.temp_max - 273.15) * 9 / 5 + 32)}°F`,
              farenheit_feels_like: `${Math.round((res.data.main.feels_like - 273.15) * 9 / 5 + 32)}°F`
            }
          }
          
          setTemperature(temp)

        })
        .catch(err => console.log(err))
    }
  }, [props.lat, props.lon ])



  const changeTemperature = () => setIsCeslsius(!isCeslsius)


  return (
      <nav className='weather'>

        <div className='container-city'>
          <h1 className='city'>{weather?.name}, {weather?.sys.country}</h1>
          <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
          <p className='temperature'>{
            isCeslsius ?
              temperature?.celsius.celsius_temp :
              temperature?.farenheit.farenheit_temp}
          </p>
        </div>
        <ul>
          <li>{weather?.weather[0].description}</li>
          <li>Humidity: {weather?.main.humidity}%</li>
        </ul>
        <div className='container-temeperatures'>
          <p>min:{isCeslsius ? temperature?.celsius.celsius_min : temperature?.farenheit.farenheit_min} </p>
          <p>max: {isCeslsius ? temperature?.celsius.celsius_max : temperature?.farenheit.farenheit_max}</p>
        </div>
        <button onClick={changeTemperature}>{isCeslsius ? "Change to °F" : "Change to °C"}</button>


      </nav>
  )
}

export default WeatherApp