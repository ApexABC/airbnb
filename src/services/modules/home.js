import ZQRequest from '..'

export function reqHomeGoodPriceData() {
  return ZQRequest.get({
    url: '/home/goodprice'
  })
}
export function reqHeightScoreData() {
  return ZQRequest.get({
    url: '/home/highscore'
  })
}
export function reqDiscountData() {
  return ZQRequest.get({
    url: '/home/discount'
  })
}
export function reqHotRecommendData() {
  return ZQRequest.get({
    url: '/home/hotrecommenddest'
  })
}
export function reqPlusData() {
  return ZQRequest.get({
    url: '/home/plus'
  })
}
export function reqLongforData() {
  return ZQRequest.get({
    url: '/home/longfor'
  })
}
