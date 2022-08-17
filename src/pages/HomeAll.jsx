import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { misemeonjiAction } from '../redux/actions/misemeonjiAction'

const HomeAll = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(misemeonjiAction.getDust())
  }, [])
  return <div></div>
}

export default HomeAll
