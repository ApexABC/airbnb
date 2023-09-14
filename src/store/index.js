import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import entireReducer from './modules/entire'
import detaileReducer from './modules/detail'
const store = configureStore({
  reducer: {
    home: homeReducer,
    entire: entireReducer,
    detaile: detaileReducer
  }
})

export default store
