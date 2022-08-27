import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  dustDataArr: [],
  likedDust: [],
  myAreaDust: null,
  loading: false,
  error: null,
}
const API_KEY = process.env.REACT_APP_SERVICE_KEY
const getParameters = {
  serviceKey: API_KEY,
  returnType: 'json',
  numOfRows: '100',
  pageNo: '1',
  ver: '1.0',
}

// 비동기 createAsyncThunk
// axios.defaults
// const path = axios.create({})

export const fetchDust = createAsyncThunk(
  'dust/fetchDust',
  async (sidoName) => {
    try {
      const response = await axios.get(
        'B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty',
        { params: { ...getParameters, sidoName } },
      )
      const dust = response.data.response.body.items.map((item) => {
        return (item = {
          ...item,
          isLiked: false,
        })
      })
      return dust //action.payload
    } catch (error) {
      return error
    }
  },
)

export const dustSlice = createSlice({
  name: 'dust',
  initialState,
  reducers: {
    // payload: stationName(stationName 군구의 첫번째 값을 find해서 dustDataArr에 넣어준다)
    setMyArea(state, action) {
      const myArea = state.dustDataArr.find(
        (cur) => cur.stationName === action.payload,
      )
      if (!myArea) return
      state.myAreaDust = myArea
    },
    // payload: dustDataArr 즐겨찾기
    addLikeFavor(state, action) {
      // eslint-disable-next-line array-callback-return
      state.dustDataArr.map((ele) => {
        if (ele.stationName === action.payload.stationName) {
          ele.isLiked = true
          state.likedDust.push(ele)
        }
      })
    },
    removeLikeFavor(state, action) {
      let pastData = action.payload
      // eslint-disable-next-line array-callback-return
      state.dustDataArr.map((element) => {
        if (element.stationName === action.payload.stationName) {
          element.isLiked = false
          state.likedDust = state.likedDust.filter(
            (item) => item.stationName !== pastData.stationName,
          )
        }
      })
    },
  },
  extraReducers(builder) {
    // 비동기 처리 후 첫번쨰 실행
    // 데이터 통신중
    builder.addCase(fetchDust.pending, (state) => {
      state.loading = 'true'
    })
    // 데이터 통신 요청 성공
    builder.addCase(fetchDust.fulfilled, (state, action) => {
      const result = action.payload
      state.dustDataArr = result
      state.loading = 'false'
    })
    // 요청 실패
    builder.addCase(fetchDust.rejected, (state, action) => {
      state.error = action.error.message
      state.loading = 'false'
    })
  },
})

export const { setMyArea, addLikeFavor, removeLikeFavor } = dustSlice.actions
export const dustReudcer = dustSlice.reducer

export const getDustData = (state) => state.dust.dustDataArr
export const getMyAreaDust = (state) => state.dust.myAreaDust
export const getLikedDust = (state) => state.dust.likedDust
export const getLoading = (state) => state.dust.loading
