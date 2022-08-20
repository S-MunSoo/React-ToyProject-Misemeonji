import React from 'react'

const Card = ({ data }) => {
  console.log('myPlace', data)

  return (
    <div
      className={
        'relative w-[300px] h-[250px] border-2 border-green-600 rounded-xl transition-colors duration-500 text-white font-bold ml-36 mt-32 -mb-28 '
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
            <div className=" mt-2 text-4xl">
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
            <div className="mt-2 text-sm">미세먼지 수치 : {data.pm10Grade}</div>
          </div>
          <div className="text-xs flex justify-end mt-14 mr-4">
            {data.dataTime}
          </div>
        </div>
      )}
    </div>
  )
}

export default Card
