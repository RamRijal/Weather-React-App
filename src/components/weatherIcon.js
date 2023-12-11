import React from 'react'
import ClearSky from '../Icons/ClearSky.png'
import Clouds from '../Icons/Clouds.png'
import FewClouds from '../Icons/FewClouds.png'
import Rain from '../Icons/Rain.png'
import Snow from '../Icons/Snow.png'
import Mist from '../Icons/Mist.png'

export default function WeatherIcon({ weatherData }) {
    const weatherIcons =
    {
        "clear": ClearSky,
        "Clouds": Clouds,
        "Few Clouds": FewClouds,
        "Rain": Rain,
        "Snow": Snow,
        "Mist": Mist,
        "Fog": Mist,
        "Haze": Mist,


    }
    const weatherMain = weatherData.weather[0].main;
    console.log(weatherMain);
    const iconSrc = weatherIcons[weatherMain];
    return (<div>
        <img src={iconSrc} alt={weatherMain} />
    </div>
    )
}

