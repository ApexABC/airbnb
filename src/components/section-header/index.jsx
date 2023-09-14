import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { HeaderWrapper } from './style'

const SectionHeader = memo((props) => {
  const { title, subTitle } = props
  return (
    <HeaderWrapper>
      <h2>{title}</h2>
      <h3>{subTitle}</h3>
    </HeaderWrapper>
  )
})
SectionHeader.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string
}
export default SectionHeader
