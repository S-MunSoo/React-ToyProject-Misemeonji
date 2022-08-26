import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SIDO_ARRER } from '../util/constants'
import { getDustData } from '../redux/reducers/misemeonjiReducer'
import { fetchDust } from '../redux/reducers/misemeonjiReducer'
import { setMyArea } from '../redux/reducers/misemeonjiReducer'

const Select = () => {
  const dust = useSelector(getDustData)

  const [sido, setSido] = useState(SIDO_ARRER[0])

  const dispatch = useDispatch()

  const sidoHandlerChange = (e) => {
    setSido(e.target.value)
    dispatch(fetchDust(e.target.value))
  }

  const guGunHandler = (e) => {
    dispatch(setMyArea(e.target.value))
  }

  useEffect(() => {
    dispatch(fetchDust(sido))
  }, [dispatch, sido])

  return (
    <div className="flex items-center justify-center mb-12 gap-6 mt-16">
      <select
        id="sido"
        onChange={sidoHandlerChange}
        className="text-center  outline-none  bg-gray-50 border text-gray-900 text-sm font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block px-4 py-2 w-32 translate-y-6"
      >
        <option key={'시도'}>시도</option>
        {SIDO_ARRER.map((sido, idx) => (
          <option key={idx} className="option">
            {sido}
          </option>
        ))}
      </select>
      <select
        id="gungu"
        onChange={guGunHandler}
        className="text-center  outline-none  bg-gray-50 border text-gray-900 text-sm font-bold rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-34 px-4 py-2 translate-y-6"
      >
        <option key={'군구'}>군구</option>
        {dust?.map((data) => (
          <option key={data.stationName}>{data.stationName}</option>
        ))}
      </select>
    </div>
  )
}

export default Select
