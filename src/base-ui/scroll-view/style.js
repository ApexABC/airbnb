import { styled } from 'styled-components'

export const ScrollWrapper = styled.div`
  position: relative;
  margin-bottom: 10px;
  .client {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
    overflow: hidden;
    .scroll {
      display: flex;
      transition: all 0.2s;
    }
  }
  .control {
    position: absolute;
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    text-align: center;
    border-width: 2px;
    border-style: solid;
    border-color: #fff;
    background: #fff;
    box-shadow: 0px 1px 1px 1px rgba(0, 0, 0, 0.14);
    cursor: pointer;
    user-select: none;
    img {
      width: 10px;
    }
    &.left {
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      top: 50%;
      transform: translate(50%, -50%);
    }
  }
`
