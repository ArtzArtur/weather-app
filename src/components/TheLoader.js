import React from 'react'

function TheLoader({isLoading}) {
  return (
    <div>
      {isLoading && <div className="grid bg-opacity-40 place-content-center text-white p-2 mx-auto min-h-[300px] bg-orange-600 w-screen max-w-[400px] md:max-w-[850px]">
        <p className="animate text-3xl">
          Loading..
          </p>
      
      </div>}
    </div>
  )
}

export default TheLoader