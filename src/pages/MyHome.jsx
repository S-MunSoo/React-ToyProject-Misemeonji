import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { misemeonjiAction } from '../redux/actions/misemeonjiAction'
import { useDispatch } from 'react-redux'
import Card from '../components/Card'
import Select from '../components/Select'

const MyHome = () => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.dust.sidoData)
  console.log('data', data)

  useEffect(() => {
    dispatch(misemeonjiAction.getDust())
  }, [])

  return (
    <div>
      <Select />
      {data[0] ? <Card data={data} /> : <>내지역</>}
    </div>
  )
}

export default MyHome
