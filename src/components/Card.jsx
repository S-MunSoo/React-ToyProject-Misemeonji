import React, { useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  addLikeFavor,
  removeLikeFavor,
} from '../redux/reducers/misemeonjiReducer'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useDispatch } from 'react-redux'

const Card = (data) => {
  const dispatch = useDispatch()
  const bookMarkRef = useRef(null)

  const onAddLikdedHandler = () => {
    !data.isLikded
      ? dispatch(addLikeFavor(data))
      : dispatch(removeLikeFavor(data.stationName))
  }

  return (
    <div
      className={
        'relative w-[300px] h-[250px] border-2 border-green-600 rounded-xl transition-colors duration-500 text-white font-bold ml-36 mt-24 -mb-20 '
      }
    >
      {data && (
        <div
          className={`${
            data?.pm10Grade === '1'
              ? 'bg-violet-500'
              : data.pm10Grade === '2'
              ? 'bg-green-500'
              : data.pm10Grade === '3'
              ? 'bg-yellow-500'
              : data.pm10Grade === '4'
              ? 'bg-orange-500'
              : 'bg-red-600'
          } absolute w-full h-full border rounded-xl `}
        >
          <div className="flex flex-col justify-center items-center mt-12">
            {data.sidoName}
            {data.stationName}
            <button
              ref={bookMarkRef}
              onClick={onAddLikdedHandler}
              className="block translate-x-28 -translate-y-12 text-3xl"
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <div className=" -mt-2 text-4xl">
              {data?.pm10Grade === '1'
                ? '좋음'
                : data.pm10Grade === '2'
                ? '보통'
                : data.pm10Grade === '3'
                ? '나쁨'
                : data.pm10Grade === '4'
                ? '매우나쁨'
                : ''}
            </div>
            <div className="mt-4 text-sm">미세먼지 수치 : {data.pm10Grade}</div>
          </div>
          <div className="text-xs flex justify-end mt-8 mr-4">
            {data.dataTime}
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
