import { useEffect, useState } from "react";
const apiKey = "3d1500d87a7ce7f53538d22f4d37f492"

const useFetch = (query,setQuery) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const timeTransform = (timestamp) => {
    let date = new Date(timestamp * 1000)
    let hours = date.getHours()
    hours = hours < 10 ? '0' + hours : hours
    let minutes = date.getMinutes()
    minutes = minutes < 10 ? '0' + minutes : minutes
    let time = `${hours}:${minutes}`
    return time
  }

  useEffect(() => {
    if (query) {
      setIsLoading(true)
      setError(false)
      fetch(`https://api.openweathermap.org/data/2.5/weather?${query}&units=metric&appid=${apiKey}`)
        .then(response => {
          if(response.status===404){
            throw new Error(response.statusText)
          }
          else if (!response.ok) {
            throw new Error("Something went wrong..")
          }
          else {
            return response.json()
          }
        })
        .then(response => {
          response.icon = `http://openweathermap.org/img/wn/${response.weather[0].icon}@4x.png`
          response.sunsetTime = timeTransform(response.sys.sunset)
          response.sunriseTime = timeTransform(response.sys.sunrise)
          response.time = timeTransform(response.dt)
          setError(null)
          setIsLoading(false)
          setData(response)
          setQuery("")
        })
        .catch(err => {
          setData('')
          setIsLoading(false)
          setError(err.message)
        }
        
        )
    }
    
  }
  ,[query,setQuery])
  return { data,setData, error, setError, isLoading, setIsLoading }
}

export default useFetch;