import React from 'react'

import { useSelector } from 'react-redux'
import Card from '../components/Card'
import Select from '../components/Select'
import { getMyAreaDust } from '../redux/reducers/misemeonjiReducer'

const MyHome = () => {
  const data = useSelector(getMyAreaDust)

  return (
    <div>
      <Select />
      {data ? <Card data={data} /> : '서울 지역 보기'}
    </div>
  )
}

export default MyHome
