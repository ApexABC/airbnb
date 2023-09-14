import { styled } from 'styled-components'
import { center, boxShadow } from '@/assets/theme/box-shadow'
const CenterWrapper = styled.div.attrs((props) => ({
  $isShow: props.$isShow
}))`
  position: relative;
  .v1 {
    position: absolute;
    top: 0;
    left: 33%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 30px;
    width: 280px;
    padding: 10px 10px 10px 20px;
    margin-top: 15px;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 40px;
    opacity: ${(props) => (props.$isShow ? '0' : '1')};
    transform: scaleX(${(props) => (props.$isShow ? '0.5' : '1')}) translateY(${(props) => (props.$isShow ? '-10px' : '0')});
    transition: transform 0.3s, opacity 0.4s;
    ${boxShadow}
    input {
      border: none;
      &:focus {
        outline: none;
      }
      &::placeholder {
        color: #000;
        font-size: 15px;
        font-weight: 700;
      }
    }
    .icon {
      ${center}
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: var(--primaryColor);
      img {
        width: 15px;
      }
    }
  }
  .v2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 850px;
    height: 160px;
    transform: scaleX(${(props) => (props.$isShow ? '1' : '0.5')}) scaleY(${(props) => (props.$isShow ? '1' : '0.5')})
      translateY(${(props) => (props.$isShow ? '0' : '-90px')});
    visibility: ${(props) => (props.$isShow ? 'visible' : 'hidden')};
    margin-top: 10px;
    color: #fff;
    transition: transform 0.3s, visibility 0.2s;
    .top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 40%;
      height: 60px;
      margin-bottom: 10px;
      font-size: 16px;
    }
    .down {
      display: flex;
      justify-content: start;
      align-items: center;

      width: 100%;
      height: 65px;
      padding: 10px 10px 10px 40px;
      box-sizing: border-box;
      background-color: #fff;
      border-radius: 40px;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 285px;
        height: 32px;
        .item-top {
          font-size: 12px;
          font-weight: 700;
          color: #222;
        }
        .item-down {
          font-size: 14px;
          color: #717171;
        }
      }
    }
  }
`

export default CenterWrapper
