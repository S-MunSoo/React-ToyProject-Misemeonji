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
        <Select />
        {data ? <Card data={data} /> : '지역 찾기'}
      </div>
    </div>
  )
}

export default MyHome
