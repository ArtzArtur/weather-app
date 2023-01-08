import { Link } from "react-router-dom";
import TheLoader from "./TheLoader";

const WeatherForecast = ({ error, isLoading, data }) => {

  return (
    <div>
      {data.main&&!isLoading ?
        <div 
        className="grid place-content-center text-white bg-orange-800 bg-opacity-50 p-1 max-w-[400px] mx-auto text-center
      md:max-w-[850px] md:grid-cols-2 md:py-[2rem] text-lg md:text-xl">
          <div className="bg-opacity-20 grid place-content-center max-w-[400px] border-b-2 md:border-r-[1px] md:border-b-0 p-2">
            <h1 className="text-2xl font-bold md:text-5xl">{data.name}</h1>
            <img src={data.icon} alt="weather condition icon" className="justify-self-center w-[clamp(3rem,15vw,8rem)]" />
            <span>Sunrise: {data.sunriseTime} </span>
            <span>Sunset: {data.sunsetTime} </span>
          </div>
          <div className="font-[400] md:flex md:flex-col md:justify-center md:items-center md:border-l-[1px]">
            <div>
              <p className="uppercase p-1 bg-orange-600 bg-opacity-70 mt-2">{data.weather[0].description}</p>
            </div>
            <div className="grid grid-cols-2 justify-between">
              <div className="text-left p-2">
                <p className="p-1">Humidity: {data.main.humidity} %</p>
                <p className="p-1">Pressure: {data.main.pressure} hPa</p>
                <p className="p-1">Wind speed: {data.wind.speed} m/s</p>
              </div>
              <div className="text-left p-2">
                <p className="p-1">Temperature: {data.main.temp} °C</p>
                <p className="p-1">Feels like: {data.main.feels_like} °C</p>
                <p className="p-1">Actual time: {data.time} </p>
              </div>
              <div className="text-center col-span-full">
                <p className="p-1">Country: {data.sys.country} </p>
              </div>
            </div>
            <div className="p-1 bg-orange-600 bg-opacity-25 border-t-2">
              <p className="tracking-[.5ch] text-md p-2">More Info</p>
              <div className="pb-2">

                <Link className="bg-orange-700 mx-1 p-1 rounded hover:bg-orange-500" to={`/weather-app/CountryInfo/${data.sys.country}`}>Country info</Link>
                <Link className="bg-orange-700 mx-1 p-1 rounded hover:bg-orange-500" to={`/weather-app/FiveDaysForecast/${data.name}`}>5-day forecast</Link>

              </div>
            </div>
          </div>
        </div> : null}

      <TheLoader isLoading={isLoading}/>

      {error ? <div className="grid place-content-center text-white bg-orange-800 p-2 mx-auto bg-opacity-40 max-w-[400px] md:max-w-[900px] text-2xl">{error}</div> : null}
    </div>
  );
}
export default WeatherForecast;