import { useEffect,useReducer } from "react"


const reducer = (state,action) => {
  switch (action.type){
    case 'FETCH_LOADING':
      return {
        ...state,
        isLoading:true,
        data:[]
      }
      case 'FETCH_SUCCESS':
      return {
        ...state,
        error:null,
        isLoading:false,
        data:action.payload
      }
      case 'FETCH_ERROR':
      return {
        ...state,
        isLoading:false,
        error:action.payload
      }
    default:
      return state
  }
}


function useFetchFiveDays(query) {
  const apiKey = "3d1500d87a7ce7f53538d22f4d37f492"
  const [state,dispatch] = useReducer(reducer,{
    data:[],
    error:null,
    isLoading:null
  })
  const getData = (query) => {
    dispatch({type:'FETCH_LOADING'})
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${apiKey}`)
    .then(res=>{
      if(!res.ok){
        throw new Error(res.statusText)
      }
      return res.json()
    })
    .then(res=>{
      res.list.forEach(weather=>{
        const convertedTime = new Date(weather.dt*1000)
        const actualTime = new Date()
        weather.actualDay = actualTime.getDate()
        weather.hour = convertedTime.getHours()
        weather.day = convertedTime.getDate()
      })
      dispatch({type:'FETCH_SUCCESS',payload:res})
    }
      )
    .catch(err=>dispatch({type:'FETCH_ERROR',payload:err.message}))
  } 

useEffect(()=>{
  getData(query)  
  },[query])
  return {state}
}

export default useFetchFiveDays