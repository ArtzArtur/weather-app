import { useEffect } from "react";
import { useReducer } from "react";


const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_PENDING":
      return {
        ...state,
        isLoading: true,
        data:[]
      };
    case "FETCH_SUCCESS":
      return {
        isLoading: false,
        error: null,
        data:action.payload
      };
    case "FETCH_ERROR":
      return {
        isLoading: false,
        error: action.payload,
        data: []
      };
      default:
      return state
    }
  }
  
  const initialState = {
    data: [], error: null, isLoading: null
  }
  
  const useFetchCountry = (id) => {
    const [state, dispatch] = useReducer(reducer,initialState)
    const getData = (id) => {
      dispatch({ type: "FETCH_PENDING" })
      setTimeout(() => {
        if(id){
        fetch(`https://restcountries.com/v3.1/alpha/${id}`)
        
        .then(response => {
          if (response.status === 404) {
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
          dispatch({ type: "FETCH_SUCCESS", payload: response })
        })
        .catch(err => {
          dispatch({ type: "FETCH_ERROR", payload: err.message })
        }
        )}
    }, 500)
  }
  useEffect(()=>{
  getData(id)  
  },[id])
  return {state}
}

export default useFetchCountry;