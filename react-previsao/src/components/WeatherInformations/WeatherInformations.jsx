import "./WeatherInformations.css";


function WeatherInformations({ weather }) {

    const weatherP = weather.weather[0];
    const weatherM = weather.main;
    
    return (
        <div className="weather-container">

            <h2>{weather.name}</h2>

            <div className="weather-info">

                <img src={`https://openweathermap.org/img/wn/${weatherP.icon}.png`} />
                <p className="weather-temp">{Math.round(weather.main.temp)}°C</p>
            </div>

            <p className="weather-description">{weatherP.description}</p>

            <div className="weather-details">
                <p>Sensação termica: {Math.round(weatherM.feels_like)}°C</p>
                <p>Umidade: {weatherM.humidity}%</p>
                <p>Pressão: {weatherM.pressure}</p>
            </div>

        </div>
    )
}

export default WeatherInformations