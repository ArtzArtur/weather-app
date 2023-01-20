import { useParams } from "react-router-dom"
import useFetchFollowingDays from "./services/useFetchFollowingDays"
import TheLoader from "./TheLoader"
import BackBtn from "./BackBtn"

function FollowingDaysForecast() {
  const { id } = useParams()
  const { state } = useFetchFollowingDays(id)
  return (
    <div className="bg-orange-800 bg-opacity-50">
      <BackBtn />
      {state.isLoading ?
        <TheLoader isLoading={state.isLoading} />
        : null}

      {state.error ? <div className="text-center min-h-[400px] grid">
        <p>
          Error: {state.error}
        </p> </div> : null}

      <div className=" text-white p-1">

        {state.data.city ?
          <div className="text-center p-2 bg-orange-900 text-white text-2xl font-bold col-span-full grid ">

            <span>
              {state.data.city.name}
            </span>
          </div>
          : null}
        <div className="grid justify-stretch md:justify-center md:grid-flow-col-dense">
          {state.data.list ? state.data.list.map((w, i) =>
            w.actualDay < w.day && w.hour === 13 ?(
              <div key={i} className="bg-orange-800 bg-opacity-50 text-center p-2 m-1">
                <p>{w.weather[0].main}</p>
                <img src={`http://openweathermap.org/img/wn/${w.weather[0].icon}@2x.png`} alt="weather icon" className="mx-auto" />
                <strong className="text-md font-extrabold block">{w.dt_txt.split(" ")[0]}</strong>
                <div className="inline-block rounded m-1 p-1">

                  <p>Temperature: {w.main.temp.toFixed(0)}°C</p>
                  <p>Pressure: {w.main.pressure}hPa</p>
                  <p>Humidity: {w.main.humidity}%</p>
                </div>
              </div>
            )
            :null
          ) : null}
        </div>
      </div>
    </div>


  )
}

export default FollowingDaysForecast