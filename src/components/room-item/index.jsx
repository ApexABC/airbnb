import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { RoomWrapper } from './style'
import { Rate } from 'antd'
const RoomItem = memo((props) => {
  const { itemData, width } = props
  const descColor = { color: itemData?.verify_info?.text_color || '#39576a' }
  return (
    <RoomWrapper width={width || 24}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc" style={descColor}>
          {itemData.verify_info.messages.join('·')}
        </div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <Rate disabled defaultValue={itemData.star_rating || 4.5} className="rate" allowHalf />
        <span className="count">{itemData?.reviews_count}</span>
        <span className="extra">{itemData.bottom_info ? '·' + itemData.bottom_info?.content : undefined}</span>
      </div>
    </RoomWrapper>
  )
})

RoomItem.propTypes = {
  itemData: PropTypes.object,
  width: PropTypes.number
}

export default RoomItem
