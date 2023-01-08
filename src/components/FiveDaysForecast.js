import { Link, useParams } from "react-router-dom"
import useFetchFiveDays from "./services/useFetchFiveDays"
import TheLoader from "./TheLoader"

function FiveDaysForecast() {
  const { id } = useParams()
  const { state } = useFetchFiveDays(id)
  return (
    <div>
      {state.isLoading ? <div className="min-h-screen bg-orange-800 grid place-content-center">
        <TheLoader isLoading={state.isLoading} />
      </div> :null}
      {state.error ? <div className="text-center min-h-[400px] grid place-content-center">
       <p>
       Error: {state.error}
        </p> </div> : null}
      {state.data.city ?
        <div className="text-center p-2 bg-orange-700 text-white text-2xl font-bold">{state.data.city.name}</div>
        : null}
      <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 max-w-[1000px] mx-auto">
        {state.data.list ? state.data.list.map((w, i) =>

          <div key={i} className="no-empty">
            {i % 2 === 0 ?
              <div className="bg-orange-300 text-center p-2 m-1">
                <p>{w.weather[0].main}</p>
                <img src={`http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`} alt="" className="mx-auto" />
                <strong className="text-xl font-extrabold block">{w.dt_txt.split(" ")[0]}</strong>
                <strong className="text-md block">Time: {w.dt_txt.split(" ")[1]}</strong>
                <div className="bg-orange-100 inline-block rounded m-2 p-2">

                  <p className="p-1">Temp: {w.main.temp.toFixed(0)}°C</p>
                  <p className="p-1">Pressure: {w.main.pressure}hPa</p>
                  <p className="p-1">Humidity: {w.main.humidity}%</p>
                </div>
              </div>
              : null}
          </div>
        ) : null}
      </div>
      <div className='p-2 m-6 grid place-content-center'>
        <Link
          className='p-2 bg-black text-white rounded hover:bg-white hover:text-black'
          to={"/weather-app/"}>Back</Link>
      </div>
    </div>


  )
}

export default FiveDaysForecast