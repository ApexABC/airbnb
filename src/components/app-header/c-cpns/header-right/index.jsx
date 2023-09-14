import React, { memo, useEffect, useState } from 'react'
import { RightWrapper } from './style'
import internetLogo from '@/assets/img/common/internet.png'
const HeaderRight = memo((props) => {
  const { isShow } = props
  const [isShowPanel, setIsShowPanel] = useState(false)
  useEffect(() => {
    function windowClick() {
      setIsShowPanel(false)
    }
    window.addEventListener('click', windowClick, true)
    return () => {
      window.removeEventListener('click', windowClick, true)
    }
  }, [])
  function onSetIsShowPanel() {
    setIsShowPanel(true)
  }
  return (
    <RightWrapper $isShow={isShow}>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <img src={internetLogo} alt="" />
        </span>
      </div>
      <div className="right" onClick={(e) => onSetIsShowPanel()}>
        <img src={require('@/assets/img/common/menu.png')} />
        <img src={require('@/assets/img/common/profile.svg').default} />
        {isShowPanel && (
          <div className="panel">
            <div className="top">
              <div className="register">注册</div>
              <div className="login">登录</div>
            </div>
            <div className="bottom">
              <div>出组房源</div>
              <div>开展体验</div>
              <div>帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  )
})

export default HeaderRight
