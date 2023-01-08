import { useState } from "react"
import useFetchWeather from "../components/services/useFetchWeather"
import TheResults from "./TheResults"


const SearchForm = () => {

  const findLocation = (e) => {
    e.preventDefault()
    setIsLoading(true)
    setData('')
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(actualPosition, positionError)
    }
  }
  const [query, setQuery] = useState();
  const [city, setCity] = useState("");
  const [minChars, setMinChars] = useState(false);
  const handleChange = (e) => {
    e.preventDefault()
    setCity(e.target.value)
  }

  const citySearch = (e) => {
    e.preventDefault()
    if (city.trim().length > 2) {
      setMinChars(false)
      setQuery(`q=${city}`)
    }
    else {
      setMinChars(true)
    }
  }
  const positionError = (err) => {
    setError(err.message)
    setIsLoading(false)
  }
  const actualPosition = (pos) => {
    setQuery(`lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`
    )
  }

  const { data, setData, error, setError, isLoading, setIsLoading } = useFetchWeather(query)

  return (
    <section>
      <form className="p-2 grid place-content-center text-center bg-orange-600 bg-opacity-80 mx-auto  max-w-[400px] md:max-w-[850px]">
        <label className="text-white">Search location:</label>
        <div className="flex justify-center items-center p-2">
          <input
            value={city}
            onChange={handleChange}
            type="text" className="p-2 rounded-l border-none outline-none" placeholder="City" />
          <i className="fa fa-crosshairs cursor-pointer bg-slate-200 p-3 rounded-r hover:bg-slate-600 hover:text-white"
            onClick={(e) => findLocation(e)}
            aria-hidden="true"></i>
        </div>
        {minChars ? 
          <span className="text-red-200 pb-2">Enter minimum 3 characters</span>
          :null
        }
        <button
          onClick={citySearch}

          className="p-2 bg-orange-700 text-white max-w-[80px] mx-auto rounded-xl hover:bg-orange-900"
        >Search</button>
      </form>

      <TheResults
        data={data}
        error={error}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        setError={setError}
      />
    </section>
  );
}

export default SearchForm;