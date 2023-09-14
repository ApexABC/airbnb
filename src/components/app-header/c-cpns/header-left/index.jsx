import React, { memo } from 'react'
import { LeftWrapper } from './style'

const HeaderLeft = memo((props) => {
  const { isShow } = props
  return (
    <LeftWrapper>
      <div className="logo">
        {isShow || <img src={require('@/assets/img/common/logo.svg').default} alt="" />}
        {isShow && <img src={require('@/assets/img/common/logoW.svg').default} alt="" />}
      </div>
    </LeftWrapper>
  )
})

export default HeaderLeft
