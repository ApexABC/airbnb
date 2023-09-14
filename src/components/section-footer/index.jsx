import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { FooterWrapper } from './style'
import { useNavigate } from 'react-router-dom'

const SectionFooter = memo((props) => {
  const navigate = useNavigate()
  const { name } = props

  let showName = '查看全部'
  if (name) {
    showName = `查看更多${name}房源`
  }

  function moreInfoClick() {
    navigate('/entire')
  }
  return (
    <FooterWrapper name={name}>
      <span className="text" onClick={moreInfoClick}>
        {showName}
      </span>
      <img src={require('@/assets/img/icon/arrow-right.svg').default} />
    </FooterWrapper>
  )
})

SectionFooter.propTypes = {
  name: PropTypes.string
}

export default SectionFooter
