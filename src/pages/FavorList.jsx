import React from 'react'
import { useSelector } from 'react-redux'
import { getLikedDust } from '../redux/reducers/misemeonjiReducer'
import Card from '../components/Card'

const FavorList = () => {
  const LikedDust = useSelector(getLikedDust)

  return (
    <div className="relative flex justify-center">
      <h3 className="text-center text-4xl font-bold text-indigo-700 translate-y-10">
        북 마크
      </h3>
      <div className="book-back">
        {LikedDust?.map((cur) => (
          <Card key={cur.stationName} {...cur} />
        ))}
      </div>
    </div>
  )
}

export default FavorList
