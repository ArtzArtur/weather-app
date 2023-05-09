import WeatherForecast from "./WeatherForecast"
import {Routes, Route } from "react-router-dom"
import CountryInfo from './CountryInfo'
import FollowingDaysForecast from './FollowingDaysForecast'

function TheResults({ data, error, isLoading, setIsLoading, setError }) {
  return (
    <div>
        <Routes>
          <Route path="/weather-app" element={<WeatherForecast
            data={data}
            error={error}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            setError={setError}
          />} />
          <Route path="/weather-app/CountryInfo/:id" element={<CountryInfo />} />
          <Route path="/weather-app/FollowingDaysForecast/:id" element={<FollowingDaysForecast />} />
        </Routes>
    </div>
  )
}

export default TheResults