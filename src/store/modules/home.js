import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { reqDiscountData, reqHeightScoreData, reqHomeGoodPriceData, reqHotRecommendData, reqLongforData, reqPlusData } from '../../services'

export const getHomeDataAction = createAsyncThunk('fetchdata', (payload, { dispatch }) => {
  reqHomeGoodPriceData().then((res) => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  reqHeightScoreData().then((res) => {
    dispatch(changeHeightScoreInfoAction(res))
  })
  reqDiscountData().then((res) => {
    dispatch(changeDiscountInfoAction(res))
  })
  reqHotRecommendData().then((res) => {
    dispatch(changeHotRecommendAction(res))
  })
  reqPlusData().then((res) => {
    dispatch(changePlusInfoAction(res))
  })
  reqLongforData().then((res) => {
    dispatch(changeLongforInfoAction(res))
  })
})
const homeSlice = createSlice({
  name: 'home',
  initialState: {
    goodPriceInfo: {},
    heightScoreInfo: {},
    discountInfo: {},
    hotRecommendInfo: {},
    plusInfo: {},
    longforInfo: {}
  },
  reducers: {
    changeGoodPriceInfoAction(state, { payload }) {
      state.goodPriceInfo = payload
    },
    changeHeightScoreInfoAction(state, { payload }) {
      state.heightScoreInfo = payload
    },
    changeDiscountInfoAction(state, { payload }) {
      state.discountInfo = payload
    },
    changeHotRecommendAction(state, { payload }) {
      state.hotRecommendInfo = payload
    },
    changePlusInfoAction(state, { payload }) {
      state.plusInfo = payload
    },
    changeLongforInfoAction(state, { payload }) {
      state.longforInfo = payload
    }
  }
})

export const {
  changeGoodPriceInfoAction,
  changeHeightScoreInfoAction,
  changeDiscountInfoAction,
  changeHotRecommendAction,
  changePlusInfoAction,
  changeLongforInfoAction
} = homeSlice.actions
export default homeSlice.reducer
