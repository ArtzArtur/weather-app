import React from 'react'

function TheLoader({isLoading}) {
  return (
    <div>
      {isLoading && <div className="grid bg-opacity-80 place-content-center text-white p-2 mx-auto min-h-[300px]">
        <p className="animate text-3xl">
          Loading..
          </p>
      
      </div>}
    </div>
  )
}

export default TheLoader