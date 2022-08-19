import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sidoData: [],
  likedDust: [],
  myPlaceDust: null,
  error: undefined,
  loading: false,
  sidoDustContents: [
    {
      sidoName: '',
      stationName: '',
      pm10Value: '',
      pm10Grade: '',
      dataTime: '',
      isLiked: null,
    },
  ],
}

export const dustSlice = createSlice({
  name: 'dust',
  initialState,
  reducers: {
    // setSido는 aciont 함수이다
    setSido(state, action) {
      state.sidoData = action.payload
    },
    myplaceHandler(state, action) {
      state.myPlaceDust = state.sidoDustContents.find(
        (item) => item.stationName === action.payload,
      )
    },
  },
})

export const dustActions = dustSlice.actions
export const dustReudcer = dustSlice.reducer
