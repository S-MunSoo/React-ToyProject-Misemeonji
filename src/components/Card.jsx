import React from 'react'

const Card = ({ data }) => {
  console.log('datadata', data)
  return (
    <div>
      <div>{data && data[0].stationName}</div>
    </div>
  )
}

export default Card
