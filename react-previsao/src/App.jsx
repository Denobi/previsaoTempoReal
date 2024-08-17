import { useState, useRef } from 'react'
import './App.css'
import axios from 'axios';
import WeatherInformations from './components/WeatherInformations/WeatherInformations';
import WeatherFiveDays from './components/WeatherFiveDays/WeatherFiveDays';

function App() {
  const [weather, setWeather] = useState()
  const [weatherFiveDays, setweatherFiveDays] = useState()
  const inputRef = useRef();

  async function searchCity(){
   const city = inputRef.current.value;
    const key = "e9a7f56406a66e38334695dd7a26373f";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`;
    const urlFiveDays = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&lang=pt_br&units=metric`;
   

    const returnData = await axios.get(url);
    const returnFiveDays = await axios.get(urlFiveDays);
    setWeather(returnData.data)
    setweatherFiveDays(returnFiveDays.data)
    


  }

  return (
    <div className='container'>
     <h1>devClub Previsão</h1>
     <input ref={inputRef} type="text" placeholder='Digite o nome da cidade'/>
     <button onClick={searchCity} className='buttonSend'>Buscar</button>
      {weather && <WeatherInformations weather={weather}/>}
      {weatherFiveDays && <WeatherFiveDays weatherFiveDays={weatherFiveDays}/>}
    </div>
  )
}

export default App
