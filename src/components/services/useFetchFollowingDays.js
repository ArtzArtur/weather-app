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


function useFetchFollowingDays(query) {
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
      const today = res.list[0].dt_txt.split(" ")[0]
      const filtered = res.list.filter(weather=>
        weather.dt_txt.indexOf("15:00:00") !== -1 && weather.dt_txt.indexOf(today) 
      )
      dispatch({type:'FETCH_SUCCESS',payload:filtered})
    }
      )
    .catch(err=>dispatch({type:'FETCH_ERROR',payload:err.message}))
  } 

useEffect(()=>{
  getData(query)  
  },[query])
  return {state}
}

export default useFetchFollowingDays