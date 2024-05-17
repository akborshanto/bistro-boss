import React from 'react'

const UseTitle = ({heading,statement}) => {
  return (
    <div className='text-center text-bold '>
      <h1>{heading}</h1>
      <p>{statement}</p>
    </div>
  )
}

export default UseTitle
