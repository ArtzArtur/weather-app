import { Link, useParams, useNavigate } from 'react-router-dom'
import TheLoader from './TheLoader'
import useFetchCountry from './services/useFetchCountry'
function CountryInfo() {


  const navigate = useNavigate()
  const { id } = useParams()
  const { state } = useFetchCountry(id)
  return (
    <div 
    className='bg-slate-200 min-h-screen text-center grid place-content-center'>
      {state.error ? <div>{state.error.message}</div> : null}
      {state.isLoading ? <div className='bg-slate-800 min-h-[400px] min-w-[300px] grid place-content-center'>
        <TheLoader isLoading={state.isLoading} />
      </div> : null}
      <div className="flex flex-wrap justify-center gap-10 px-6">
        {state.data ?
          state.data.map((country, idx) => (
            <div key={idx} 
            className="grid sm:grid-cols-2 place-content-center p-4 rounded-lg bg-slate-100 m-2">
              <div className='p-2'>
                  <p className='p-1 text-center text-2xl'>
                  <img src={country.flags.png} alt="" />
                  Country: {country.name.common}</p>
              </div>
              <div className='max-w-[300px]'>
                <p className='p-1 text-center'>Population: {country.population}</p>
                <p className='p-1 text-center'>Region: {country.region}</p>
                <p className='p-1 text-center'>Subregion: {country.subregion}</p>
                <p className='p-1 text-center'>Capital: {country.capital}</p>
                  <h1>Timezones:</h1>
                <div className='p-2 flex flex-wrap justify-center'>
                  {country.timezones.map((time,i)=>
                    <p className='m-1' key={i}>{time}</p>)}
                </div>
                <div className='p-2'>
                  <h1>Borders:</h1>
                    <div className='flex flex-wrap justify-center'>
                  {country.borders.map((border,index)=>
                      <span 
                      key={index} 
                      onClick={()=>navigate(`/weather-app/CountryInfo/${border}`)} className='m-1 bg-slate-200 p-1 rounded hover:bg-slate-400 hover:text-slate-50 cursor-pointer'>
                        {border}
                      </span>
                      )}
                      
                    </div>

                </div>
              </div>
            </div>
          )) : null}
      </div>
      <div className='p-2 grid place-content-center'>
        <Link
          className='p-2 bg-black text-white rounded hover:bg-white hover:text-black'
          to={"/weather-app/"}>Back</Link>
      </div>
    </div>
  )
}

export default CountryInfo