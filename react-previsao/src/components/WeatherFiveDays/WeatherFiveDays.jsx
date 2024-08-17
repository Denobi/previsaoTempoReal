import "./WeatherFiveDays.css";


function WeatherFiveDays({ weatherFiveDays }) {

    // const weatherP = weather.weather[0];
    // const weatherM = weather.main;
    // console.log(weatherFiveDays.list)
    const dailyForecast = {};

    for (let forecast of weatherFiveDays.list) {

        const newDate = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[newDate]) {
            dailyForecast[newDate] = forecast;
        }

    }
    const nextFiveDays = Object.values(dailyForecast).slice(1, 6)
    console.log(nextFiveDays)
    function convertDate(date) {
        const newDate = new Date(date.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'long', day: "2-digit" });
        return newDate

    }



    return (
        <div className="weather-container">
            <h3>Previsão Proximos 5 Dias</h3>
            <div className="weather-list">
                {nextFiveDays.map(forecast => (
                    <div key={forecast.dt} className="weather-item">
                        <p className="daily">{convertDate(forecast)}</p>

                        <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="Icone do tipo do clima. exemplo: Nublado" />
                        <p className="daily-descript">{forecast.weather[0].description}</p>
                        <p>{Math.round(forecast.main.temp_min)}Min / {Math.round(forecast.main.temp_max)}Max</p>

                    </div>
                ))}

            </div>
        </div>
    )
}

export default WeatherFiveDays