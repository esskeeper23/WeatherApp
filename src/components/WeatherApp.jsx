import axios from 'axios'
import React, { useEffect, useState } from 'react'

const WeatherApp = ({ lon, lat, setBgImg }) => {

  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [isCeslsius, setIsCeslsius] = useState(true)

  useEffect(() => {
    if (lat) {
      const APIKey = "9e4cc85e3d6a90e73ab6528b3d590405"
      const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKey}`

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


            if (weather?.weather[0].description === "clear sky") {
              let backgroundImg = {
                backgroundImage: "url(/clear-sky.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].main === "Thunderstorm") {
              let backgroundImg = {
                backgroundImage: "url(/thunderstorm.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].main === "Drizzle") {
              let backgroundImg = {
                backgroundImage: "url(/Drizzle.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].description === "scattered clouds") {
              let backgroundImg = {
                backgroundImage: "url(/scattered-clouds.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].description === "few clouds") {
              let backgroundImg = {
                backgroundImage: "url(/few-clouds.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].description === "broken clouds") {
              let backgroundImg = {
                backgroundImage: "url(/broken-clouds.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].description === "overcast clouds") {
              let backgroundImg = {
                backgroundImage: "url(/overcast-clouds.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].main === "Rain") {
              let backgroundImg = {
                backgroundImage: "url(/rain.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].main === "Snow") {
              let backgroundImg = {
                backgroundImage: "url(/snow.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].main === "Mist") {
              let backgroundImg = {
                backgroundImage: "url(/mist.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].main === "Mist") {
              let backgroundImg = {
                backgroundImage: "url(/fog.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].main === "Smoke") {
              let backgroundImg = {
                backgroundImage: "url(/smoke.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].main === "Haze") {
              let backgroundImg = {
                backgroundImage: "url(/haze.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].main === "Dust") {
              let backgroundImg = {
                backgroundImage: "url(/dust.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].main === "Fog") {
              let backgroundImg = {
                backgroundImage: "url(/fog.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].main === "Sand") {
              let backgroundImg = {
                backgroundImage: "url(/sand.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].main === "Dust") {
              let backgroundImg = {
                backgroundImage: "url(/dust.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].main === "Ash") {
              let backgroundImg = {
                backgroundImage: "url(/volcanic-ash.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].main === "Squall") {
              let backgroundImg = {
                backgroundImage: "url(/squall.jpg)"
              }
              setBgImg(backgroundImg)
            } else if (weather?.weather[0].main === "Tornado") {
              let backgroundImg = {
                backgroundImage: "url(/tornado.jpg)"
              }
              setBgImg(backgroundImg)
            }


        })
        .catch(err => console.log(err))
    }
  }, [lat, lon])


  console.log(weather);

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