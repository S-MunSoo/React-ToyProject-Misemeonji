import React from 'react'

import { useSelector } from 'react-redux'
import Card from '../components/Card'
import Select from '../components/Select'
import { getMyAreaDust } from '../redux/reducers/misemeonjiReducer'

const MyHome = () => {
  const data = useSelector(getMyAreaDust)

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="home-back">
        <h3 className="text-center text-4xl font-bold text-indigo-700 translate-y-10">
          내 지역
        </h3>
        <Select />
        {data ? (
          <Card {...data} />
        ) : (
          <span className="flex items-center justify-center text-4xl font-bold ">
            내지역 찾기
          </span>
        )}
      </div>
    </div>
  )
}

export default MyHome
