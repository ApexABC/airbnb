import PropTypes from 'prop-types'
import React, { memo, useEffect } from 'react'
import SectionHeader from '@/components/section-header'
import { LongforWrapper } from './style'
import ScrollView from '@/base-ui/scroll-view'
const LongforSection = memo((props) => {
  const { info } = props
  return (
    <LongforWrapper>
      <SectionHeader title={info.title} subTitle={info.subtitle}></SectionHeader>
      <ScrollView>
        {info.list.map((item) => {
          return (
            <div className="longforItem" key={item.city}>
              <img src={item.picture_url} alt="" />
              <div className="mask">
                <div className="info">
                  <h3>{item.city}</h3>
                  <span>均价{item.price}</span>
                </div>
              </div>
            </div>
          )
        })}
      </ScrollView>
    </LongforWrapper>
  )
})

LongforSection.propTypes = {
  info: PropTypes.object
}

export default LongforSection
