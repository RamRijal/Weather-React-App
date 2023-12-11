import React, { useState } from 'react'
import WeatherCSS from './weather.module.css'
import { TiWeatherWindy } from "react-icons/ti"
import { BsSearch } from 'react-icons/bs'
import { FaLocationDot } from 'react-icons/fa6'
import { AiFillCloud } from 'react-icons/ai'
import WeatherIcon from './weatherIcon.js'

let Weather = () => {
    const [city, setCity] = useState("")
    const [weatherData, setWeatherData] = useState("")

    async function changeCity() {
        try {
            const apiKey = "823518edc4bac84c6f01daee967901fb"
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
            const data = await response.json()
            setWeatherData(data)

        }
        catch (error) {
            console.log(error);
        }
    }

    return (

        <div className={WeatherCSS.weatherBlock}>
            <div className={WeatherCSS.cityInput}>
                <FaLocationDot className={WeatherCSS.locationIcon} />
                <input onChange={(e) => setCity(e.target.value)} />
                <button onClick={changeCity}>
                    <BsSearch />
                </button>
            </div>
            {weatherData ?
                (
                    <>
                        <div className={WeatherCSS.cityName}>
                            <h2>{weatherData.name}</h2>
                        </div>
                        <div className={WeatherCSS.weathericon}>
                           <WeatherIcon  weatherData={weatherData} />
                            <p>{weatherData.weather[0].description.toUpperCase()}</p>
                        </div>
                        <div className={WeatherCSS.weatherInfoBlock}>
                            <h1>°C {(weatherData.main.temp -273).toFixed(0)}</h1>
                        <div className={WeatherCSS.weatherInfo}>
                            <p>
                                <TiWeatherWindy/>
                                Wind:{weatherData.wind.speed.toFixed(0)}m/s
                            </p>
                            <p>
                                <AiFillCloud/>
                                Cloudy: {weatherData.clouds.all} %
                            </p>
                        </div>
                        </div>

                    </>
                ):<h2>Choose the city</h2>
                }
        </div>

    )
}
export default Weather