import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import ScrollView from '@/base-ui/scroll-view'
import SectionHeader from '@/components/section-header'
import RoomList from '@/components/room-list'
import { SelectionWrapper } from './style'
import classNames from 'classnames'
import { isObjHasVal } from '../../utils/judge'
import SectionFooter from '../section-footer'
const RoomSelection = memo((props) => {
  const { info } = props
  const [name, setName] = useState()
  const [currentIndex, setCurrentIndex] = useState(0)
  useEffect(() => {
    setName(nameList[0])
  }, [])
  const nameList = Object.keys(info.dest_list ?? {})
  function changeIndex(index) {
    setCurrentIndex(index)
    setName(nameList[index])
  }
  return (
    <div>
      <SelectionWrapper>
        <SectionHeader title={info.title} subTitle={info.subtitle}></SectionHeader>
        {isObjHasVal(nameList) && (
          <ScrollView>
            {nameList.map((item, index) => {
              return (
                <div onClick={(e) => changeIndex(index)} className={classNames({ tabItem: true, active: currentIndex === index })} key={item}>
                  {item}
                </div>
              )
            })}
          </ScrollView>
        )}

        {info.dest_list && <RoomList roomList={info.dest_list[name]} width={32.5} length={6}></RoomList>}
        <SectionFooter name={name}></SectionFooter>
      </SelectionWrapper>
    </div>
  )
})

RoomSelection.propTypes = {
  info: PropTypes.object
}

export default RoomSelection
