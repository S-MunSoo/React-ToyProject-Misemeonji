import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  dustDataArr: [],
  likedDust: [],
  myAreaDust: null,
  loading: false,
  status: 'idle',
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
      console.log(error)
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
      state.likedDust.push({ ...action.payload, isLiked: true })
    },
    removeLikeFavor(state, action) {
      let pastData = action.payload
      pastData = { ...pastData, isLiked: false }
      state.likedDust = state.likedDust.filter(
        (item) => item.stationName !== pastData.stationName,
      )
    },
  },
  extraReducers(builder) {
    // 비동기 처리 후 첫번쨰 실행
    builder.addCase(fetchDust.pending, (state) => {
      state.loading = 'true'
    })
    builder.addCase(fetchDust.fulfilled, (state, action) => {
      const result = action.payload
      state.status = 'succeeded'
      state.dustDataArr = result
      state.loading = 'false'
    })
    builder.addCase(fetchDust.rejected, (state, action) => {
      state.status = 'failed'
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
export const getStatus = (state) => state.dust.status
export const getLoading = (state) => state.dust.loading
