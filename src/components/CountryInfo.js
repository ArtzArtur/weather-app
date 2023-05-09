import { useParams, useNavigate } from 'react-router-dom'
import TheLoader from './TheLoader'
import useFetchCountry from './services/useFetchCountry'
import BackBtn from "./BackBtn"

function CountryInfo() {


  const navigate = useNavigate()
  const { id } = useParams()
  const { state } = useFetchCountry(id)

  return (
    <div className='text-white bg-orange-800 bg-opacity-50'>
      <BackBtn />
      <div
        className="p-1 text-center
    md:py-[2rem] text-lg md:text-xl">
        {state.error ? <div>{state.error.message}</div> : null}
        {state.isLoading ?
          <TheLoader isLoading={state.isLoading} />
          : null}
        <div className="px-6 flex justify-center">
          {state.data ?
            state.data.map((country, idx) => (
              <div key={idx}
                className="grid md:grid-cols-2 pb-4 rounded-lg mb-2">
                <div className='p-2'>
                  <img src={country.flags.png} alt="country flag" />
                  <p className='text-2xl'>
                    Country: {country.name.common}</p>
                </div>
                <div>
                  <p className='p-1'>Population: {country.population}</p>
                  <p className='p-1'>Region: {country.region}</p>
                  <p className='p-1'>Subregion: {country.subregion}</p>
                  <p className='p-1'>Capital: {country.capital}</p>
                  <h1>Timezones:</h1>
                  <div className='p-2 flex flex-wrap justify-center'>
                    {country.timezones.map((time, i) =>
                      <p className='m-1' key={i}>{time}</p>)}
                  </div>
                  <div className='p-2'>
                    <h1>Borders:</h1>
                    <div className='flex flex-wrap justify-center'>
                      {country.borders.map((border, index) =>
                        <span
                          key={index}
                          onClick={() => navigate(`/weather-app/CountryInfo/${border}`)} className='m-1 bg-orange-400 p-1 rounded hover:bg-orange-600 hover:text-orange-50 cursor-pointer'>
                          {border}
                        </span>
                      )}

                    </div>

                  </div>
                </div>
              </div>
            )) : null}
        </div>


      </div>
    </div>
  )
}

export default CountryInfo