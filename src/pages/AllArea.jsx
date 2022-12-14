import React, { useEffect } from 'react'
import Card from '../components/Card'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDust } from '../redux/reducers/misemeonjiReducer'
import { getDustData } from '../redux/reducers/misemeonjiReducer'

const AllArea = () => {
  const dispatch = useDispatch()
  const dust = useSelector(getDustData)

  useEffect(() => {
    dispatch(fetchDust('전국'))
  }, [])

  return (
    <div className="relative flex justify-center">
      <h3 className="mt-10 text-4xl font-bold text-indigo-700">전국 지역</h3>
      <div className="all-back">
        {dust?.map((cur) => (
          <Card key={cur.stationName} {...cur} />
        ))}
      </div>
    </div>
  )
}

export default AllArea
