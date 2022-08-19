import axios from 'axios'
import { dustActions } from '../reducers/misemeonjiReducer'
const API_KEY = process.env.REACT_APP_SERVICE_KEY

function getDust() {
  return async (dispatch, getState) => {
    const getParameters = {
      serviceKey: API_KEY,
      returnType: 'json',
      numOfRows: '100',
      pageNo: '1',
      sidoName: '서울',
      ver: '1.0',
    }
    try {
      // dispatch 로딩
      const response = await axios.get(
        'B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
        { params: getParameters },
      )
      const dust = response.data.response.body.items.map((item) => {
        return (item = {
          ...item,
          isLiked: false,
        })
      })
      dispatch(dustActions.setSido(dust))
    } catch (error) {
      console.log(error)
    }
  }
}

export const misemeonjiAction = { getDust }
