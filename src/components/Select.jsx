import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SIDO_ARRER } from '../util/constants'
import { misemeonjiAction } from '../redux/actions/misemeonjiAction'
// import { useLocation } from 'react-router-dom'
import { dustActions } from '../redux/reducers/misemeonjiReducer'

const Select = () => {
  const dustState = useSelector((state) => state.dust)
  const [sido, setSido] = useState(SIDO_ARRER[0])
  const [guGun, setGuGun] = useState('')
  // const myplaceLocation = useLocation()
  const dispatch = useDispatch()
  console.log('dustState???', dustState)

  const sidoHandlerChange = (e) => {
    setSido(e.target.value)
    setGuGun(e.target.value)
    dispatch(misemeonjiAction.getDust(e.target.value))
  }

  const guGunHandler = (e) => {
    setGuGun(e.target.value)
    dispatch(dustActions.myplaceHandler(e.target.value))
  }

  return (
    <div>
      <select id="sido" value={sido} onChange={sidoHandlerChange}>
        <option key={'시도'}>시도</option>
        {SIDO_ARRER.map((sido, idx) => (
          <option key={idx}>{sido}</option>
        ))}
      </select>
      <select id="gungu" value={guGun} onChange={guGunHandler}>
        <option key={'군구'}>군구</option>
        {dustState.sidoData?.map((data) => (
          <option key={data.stationName}>{data.stationName}</option>
        ))}
      </select>
    </div>
  )
}

export default Select
