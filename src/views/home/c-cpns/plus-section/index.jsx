import PropTypes from 'prop-types'
import React, { memo } from 'react'
import ScrollView from '@/base-ui/scroll-view'
import RoomItem from '@/components/room-item'
import SectionHeader from '@/components/section-header'
import { isObjHasVal } from '@/utils/judge'
import { PlusWrapper } from './style'
import SectionFooter from '@/components/section-footer'
const PlusSection = memo((props) => {
  const { plusInfo } = props
  return (
    <PlusWrapper>
      <SectionHeader title={plusInfo.title} subTitle={plusInfo.subtitle}></SectionHeader>
      {isObjHasVal(plusInfo) && (
        <ScrollView>
          {plusInfo.list?.map((item) => (
            <div className="plusItem" key={item.id}>
              <RoomItem itemData={item} width={100}></RoomItem>
            </div>
          ))}
        </ScrollView>
      )}
      <SectionFooter name={'plus'}></SectionFooter>
    </PlusWrapper>
  )
})

PlusSection.propTypes = {
  plusInfo: PropTypes.object
}

export default PlusSection
