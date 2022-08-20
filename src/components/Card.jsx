import React from 'react'

const Card = ({ data }) => {
  console.log('myPlace', data)
  return (
    <div>
      <div>{data && data.stationName}</div>
    </div>
  )
}

export default Card
