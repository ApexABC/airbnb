import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollWrapper } from './style'
const ScrollView = memo((props) => {
  const [curIndex, setCurIndex] = useState(0)
  const [isShowLeft, setShowLeft] = useState(false)
  const [isShowRight, setShowRight] = useState(false)
  const clientRef = useRef()
  const scrollRef = useRef()
  useEffect(() => {
    if (clientRef.current.clientWidth < scrollRef.current.scrollWidth) {
      setShowRight(true)
    }
  }, [])
  function leftClickHandle() {
    move(curIndex - 1)
  }
  function rightClickHandle() {
    move(curIndex + 1)
  }
  function move(index) {
    const moveLength = scrollRef.current.children[index].offsetLeft
    scrollRef.current.style.transform = `translate(-${moveLength}px)`
    setCurIndex(index)
    if (scrollRef.current.scrollWidth - moveLength <= clientRef.current.clientWidth) {
      setShowRight(false)
    } else {
      setShowRight(true)
    }
    if (index !== 0) {
      setShowLeft(true)
    } else {
      setShowLeft(false)
    }
  }
  return (
    <ScrollWrapper>
      {isShowLeft && (
        <div className="control left" onClick={leftClickHandle}>
          <img src={require('@/assets/img/icon/arrow-left.svg').default} />
        </div>
      )}
      {isShowRight && (
        <div className="control right" onClick={rightClickHandle}>
          <img src={require('@/assets/img/icon/arrow-right.svg').default} />
        </div>
      )}
      <div className="client" ref={clientRef}>
        <div className="scroll" ref={scrollRef}>
          {props.children}
        </div>
      </div>
    </ScrollWrapper>
  )
})

export default ScrollView
