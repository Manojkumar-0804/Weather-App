import React from 'react'
import axios from 'axios';
import { useState } from 'react';

const Weather = () => {

    const [city, setcity] = useState("")
    const [weather, setweather] = useState("")
    const [temp, settemp] = useState("")
    const [description, setdescription] = useState("")


    function handleCity(event) {
        setcity(event.target.value);
    }

    function getWeather() {
        var weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=404361c8736390bb51161b23da9de185`)

        weatherData.then(function (success) {
            console.log(success.data);
            setweather(success.data.weather[0].main)
            settemp(success.data.main.temp)
            setdescription(success.data.weather[0].description)
        })
    }

    return (
        <div className="bg-red-700 p-20">
            <div className='bg-yellow-400 p-10 rounded-md'>
                <h1 className='text-2xl font-medium'>Weather Report</h1>
                <p>I can give you a weather report about your city !</p>
                <input onChange={handleCity} type="text" className='mt-2 border border-black rounded-md p-1 outline-none flex text-black' placeholder="Enter city name " />
                <button onClick={getWeather} className='bg-red-700 text-white p-2 rounded-md mt-2'>Get report</button>

                <div>
                    <h1><b>Weather: {weather}</b></h1>
                    <p><b>Temperature: {temp} </b></p>
                    <p><b>Description: {description} </b></p>
                </div>
            </div>
        </div>
    )
}

export default Weather
