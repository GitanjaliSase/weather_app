import React from 'react';
import { useState ,useEffect} from 'react'
import WeatherDetail from './Weather_details';
import axios from 'axios';
import {imgtemp}  from './assets/imgtemp.jpeg';

const KelvinToCelsius=(fahrenheit)=>{
  return((fahrenheit-273.15).toFixed(2));
}

function App(){
  const API_KEY="495e9b380d2bea256681c7b13960bedc";
  const [city,setCity]=useState("");
  const [weather,setWeather]=useState({
  temp:30,
  visibility:10,
  humidity:50,
  minTemp:20,
  maxTemp:40,
  feelsLike:32,
  });

const getWeatherData=async()=>{
  const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY} `);
  const weatherData=response.data;
  setWeather({
    temp:weatherData.main.temp,
    visibility:weatherData.visibility,
    humidity:weatherData.main.humidity,
    minTemp:weatherData.main.minTemp,
    maxTemp:weatherData.main.maxTemp,
    feelsLike:weatherData.main.feelsLike,
  });
};

useEffect(()=>{
  getWeatherData();
}),[city];

  return(
  <div className="bg-amber-300 min-h-screen pb-10">
    <img src={imgtemp} alt="Weather Main" className='h-[300px] mx-auto'/>
    <h1 className="text-center">Wheather App</h1>
    <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} 
    className="border-2 border-gray-400 p-2 w-1/2 block mx-auto bg-white text-5xl text-center focus:outline-none rounded-full "></input>
     
     <div className="bg-white opacity-80 p-4 mt-4 w-1/2 mx-auto rounded-lg text-2xl">
        <WeatherDetail detail={"Temperature"} value={`${KelvinToCelsius(weather.temp)}°C `}/>
        <WeatherDetail detail={"Feels Like"} value={`${KelvinToCelsius(weather.feelsLike)}°C `}/>
        <WeatherDetail detail={"Min Temp"} value={`${KelvinToCelsius(weather.minTemp)}°C `}/>
        <WeatherDetail detail={"Max Temp"} value={`${KelvinToCelsius(weather.maxTemp)}°C `}/>
        <WeatherDetail detail={"Visibility"} value={`${weather.visibility} miles `}/>
        <WeatherDetail detail={"Humidity"} value={`${weather.humidity} % `}/>
     </div>
  
  </div>
  );
}
export default App;


     