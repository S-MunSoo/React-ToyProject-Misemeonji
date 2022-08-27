import { configureStore } from '@reduxjs/toolkit'
import { dustReudcer } from '../reducers/misemeonjiReducer'
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, dustReudcer)

const store = configureStore({
  reducer: {
    dust: persistedReducer,
  },
})

export default store
