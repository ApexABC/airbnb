import { styled } from 'styled-components'
import { boxShadow, center } from '@/assets/theme/box-shadow'
const panel = `
& > div {
  ${center}
  justify-content: start;
  padding-left: 10px;
  height: 50px;
  font-weight: 700;
  cursor: pointer;
  color:#505050;
  &:hover {
    background-color: #f5f5f5;
  }
}`
export const RightWrapper = styled.div.attrs((props) => ({
  $isShow: props.$isShow
}))`
  flex: 1;
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: end;
  .btns {
    display: flex;
    align-items: center;
    width: 150px;
    margin-right: 10px;
    font-size: 14px;
    color: ${(props) => (props.$isShow ? '#fff' : '#404040')};
    span {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 40px;
      height: 30px;
      font-weight: 700;
      border-radius: 10px;
      cursor: pointer;
      &:hover {
        background-color: #eee;
      }
    }

    img {
      width: 18px;
      height: 18px;
    }
  }
  .right {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60px;
    height: 30px;
    background-color: #fff;
    border: 1px solid #aaa;
    padding: 5px;
    border-radius: 20px;
    ${boxShadow}
    img {
      width: 30px;
    }
    img:first-child {
      width: 20px;
    }
    .panel {
      position: absolute;
      left: -130px;
      top: 60px;
      width: 200px;
      border: 1px solid #eee;
      box-shadow: 0px 1px 2px 1px #ccc;
      font-size: 14px;
      background-color: #fff;
      .top {
        display: flex;
        flex-direction: column;
        justify-content: start;
        border-bottom: 1px solid #aaa;
        ${panel}
      }
      .bottom {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        ${panel}
      }
    }
  }
`
