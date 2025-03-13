import { useState ,useEffect} from 'react'
import WeatherDetail from './Weather_details';
import axios from 'axios';

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

const getWeatherData=()=>{
  const response=axios.get{`https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key} `}
};

useEffect(()=>{
  getWeatherData();
}),[city];

// const WEATHER_DETAIL_CLASSES= "flex justify-between border-b-1 pb-2 border-dashed border-gray-400";

  return(
  <div className='bg-amber-300 min-h-screen pb-10'>
    <img src={Img} alt="Weather Main" className='h-[300px] mx-auto'/>
    <h1 className="text-center">Wheather App</h1>
    <input type="text" value={city} onChange={(e)=>setCity(e.target.value)} 
    className='border-2 border-gray-400 p-2 w-1/2 block mx-auto bg-white text-5xl text-center focus:outline-none rounded-full '></input>
     
     <div className='bg-white opacity-80 p-4 mt-4 w-1/2 mx-auto rounded-lg text-2xl'>
        <WeatherDetail detail={"Temperature"} value={`${weather.temp}°F `}/>
        <WeatherDetail detail={"Feels Like"} value={`${weather.feelsLike}°F `}/>
        <WeatherDetail detail={"Min Temp"} value={`${weather.minTemp}°F `}/>
        <WeatherDetail detail={"Max Temp"} value={`${weather.maxTemp}°F `}/>
        <WeatherDetail detail={"Visibility"} value={`${weather.visibility} miles `}/>
        <WeatherDetail detail={"Humidity"} value={`${weather.humidity} % `}/>

    
    
    
     {/*<p className={WEATHER_DETAIL_CLASSES}>
     <span>Temperature:</span>
          <span>{weather.temp} °F</span> 
      </p>
      <p className={WEATHER_DETAIL_CLASSES}>
         <span>Feels Like:</span>
          <span>{weather.feelsLike} °F</span> 
      </p>
      <p className={WEATHER_DETAIL_CLASSES}>
         <span>Min Temp:</span>
          <span>{weather.minTemp} °F</span> 
      </p>
      <p className={WEATHER_DETAIL_CLASSES}>
         <span> Max Temp:</span>
          <span>{weather.maxTemp} °F</span> 
      </p>
      <p className={WEATHER_DETAIL_CLASSES}>
         <span>Visibility:</span>
          <span>{weather.visibility} miles</span> 
      </p>
      <p className={WEATHER_DETAIL_CLASSES}>
         <span>Humidity:</span>
          <span>{weather.humidity} %</span> 
      </p>
      
https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key} 

     */}
     </div>
  
  </div>
  );
}
export default App

