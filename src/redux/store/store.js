import { configureStore } from '@reduxjs/toolkit'
import { dustReudcer } from '../reducers/misemeonjiReducer'

const store = configureStore({
  reducer: {
    dust: dustReudcer,
  },
})

export default store
