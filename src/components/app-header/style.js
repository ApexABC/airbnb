import styled from 'styled-components'

export const HeaderWrapper = styled.div.attrs((props) => ({
  $isShow: props.$isShow
}))`
  position: fixed;
  display: flex;
  /* align-items: center; */
  width: 100%;
  padding: 0 40px;
  height: ${(props) => (props.$isShow ? '160' : '80')}px;
  background-color: ${(props) => (props.$isShow ? '' : '#fff')};
  ${(props) => (props.$isShow ? 'background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.5) 0%, transparent 100%);' : '')}
  z-index: 1;
  box-sizing: border-box;
  transition: 0.5s all;
  .left {
    color: red;
  }
`

// export default headerWrapper
