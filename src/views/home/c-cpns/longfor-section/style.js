import { styled } from 'styled-components'

export const LongforWrapper = styled.div`
  .longforItem {
    position: relative;
    width: 205px;
    margin-right: 11px;
    img {
      width: 100%;
    }
    .mask {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: end;
      width: inherit;
      height: 253px;
      top: 0;
      left: 0;
      background-image: linear-gradient(180deg, transparent 35%, #000 100%);
      color: #fff;
      .info {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 100px;
        margin-bottom: 30px;
        h3 {
          font-weight: 700;
          margin-bottom: 10px;
        }
        span {
          font-size: 14px;
        }
      }
    }
  }
`
