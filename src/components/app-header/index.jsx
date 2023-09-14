import React, { memo, useEffect, useRef, useState } from 'react'
import throttle from 'lodash/throttle'
import { HeaderWrapper } from './style'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'
import HeaderRight from './c-cpns/header-right'
const header = memo(() => {
  const [isShow, setIsShow] = useState(true)
  const scrollA = throttle(function (e) {
    e.stopPropagation()
    const position = window.scrollY
    if (position !== 0) {
      setIsShow(false)
    } else {
      setIsShow(true)
    }
  }, 200)
  useEffect(() => {
    window.addEventListener('scroll', scrollA)
    return () => {
      window.removeEventListener('scroll', scrollA)
    }
  }, [])
  return (
    <HeaderWrapper $isShow={isShow}>
      <HeaderLeft isShow={isShow}></HeaderLeft>
      <HeaderCenter isShow={isShow}></HeaderCenter>
      <HeaderRight isShow={isShow}></HeaderRight>
    </HeaderWrapper>
  )
})

export default header
