import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
import { ListWrapper } from './style'
const RoomList = memo((props) => {
  const { roomList, width, length = 8 } = props
  return (
    <ListWrapper>
      <ul className="room-list">
        {roomList?.slice(0, length).map((item) => {
          return <RoomItem key={item.id} itemData={item} width={width}></RoomItem>
        })}
      </ul>
    </ListWrapper>
  )
})

RoomList.propTypes = {
  roomList: PropTypes.array,
  width: PropTypes.number,
  length: PropTypes.number
}

export default RoomList
