import React, { memo } from 'react'
import CenterWrapper from './style'
const HeaderCenter = memo((props) => {
  const { isShow } = props
  return (
    <CenterWrapper $isShow={isShow}>
      <div className="v1">
        <input type="text" placeholder="搜索房源和体验" />
        <div className="icon">
          <img src={require('@/assets/img/common/search.svg').default} alt="" />
        </div>
      </div>
      <div className="v2">
        <div className="top">
          <span>国内搜索</span>
          <span>国际/港澳台</span>
          <span>搜索体验</span>
        </div>
        <div className="down">
          <div className="item">
            <div className="item-top">城市</div>
            <div className="item-down">你想去哪个城市</div>
          </div>
          <div className="item">
            <div className="item-top">入住退房日期</div>
            <div className="item-down">请在日历中选择</div>
          </div>
          <div className="item">
            <div className="item-top">关键词</div>
            <div className="item-down">景点/地址/房源名</div>
          </div>
        </div>
      </div>
    </CenterWrapper>
  )
})

export default HeaderCenter
