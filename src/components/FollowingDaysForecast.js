import { useParams } from "react-router-dom"
import useFetchFollowingDays from "./services/useFetchFollowingDays"
import TheLoader from "./TheLoader"
import BackBtn from "./BackBtn"
function FollowingDaysForecast() {
  const { id } = useParams()
  const { state } = useFetchFollowingDays(id)
  console.log(state.data.list)
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

      <div className=" text-white p-1">        {state.data.city ?
          <div className="text-center p-2 bg-orange-900 text-white text-2xl font-bold col-span-full grid ">
            <span>
              {state.data.city.name}
            </span>
          </div>
          : null}
        <div className="flex flex-col lg:flex-row overflow-x-scroll">
          {state.data.list ? state.data.list.map((weather,index)=>
          <div key={index} className="p-2 border border-1 text-center">
            <p>Date:{weather.dt_txt}</p>
            <p>Max temperature: {weather.main.temp_min}</p>
            <p>Min temperature {weather.main.temp_max}</p>
            <img className="mx-auto" src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`} alt="" />
          </div>) :null}
        </div>
      </div>
    </div>


  )
}

export default FollowingDaysForecast