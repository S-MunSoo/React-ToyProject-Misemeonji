import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SIDO_ARRER } from '../util/constants'
import { getDustData } from '../redux/reducers/misemeonjiReducer'
import { fetchDust, getStatus } from '../redux/reducers/misemeonjiReducer'
import { setMyArea } from '../redux/reducers/misemeonjiReducer'

const Select = () => {
  const dust = useSelector(getDustData)
  const isStatus = useSelector(getStatus)
  console.log('dust왓?', dust)

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
    if (isStatus === 'idle') {
      dispatch(fetchDust(sido))
    }
  }, [isStatus, dispatch, sido])

  return (
    <div>
      <select id="sido" onChange={sidoHandlerChange}>
        <option key={'시도'}>시도</option>
        {SIDO_ARRER.map((sido, idx) => (
          <option key={idx}>{sido}</option>
        ))}
      </select>
      <select id="gungu" onChange={guGunHandler}>
        <option key={'군구'}>군구</option>
        {dust?.map((data) => (
          <option key={data.stationName}>{data.stationName}</option>
        ))}
      </select>
    </div>
  )
}

export default Select
