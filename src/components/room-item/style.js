import { styled } from 'styled-components'

export const RoomWrapper = styled.div`
  width: ${(props) => props.width}%;
  /* width: 500px; */
  margin-bottom: 15px;
  .inner {
    width: 100%;
  }

  .cover {
    position: relative;
    box-sizing: border-box;
    padding: 66.66% 8px 0;
    border-radius: 3px;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
    }
  }

  .desc {
    margin: 10px 0 5px;
    font-size: 12px;
    font-weight: 700;
    color: #39576a;
  }

  .name {
    height: 32px;
    font-size: 16px;
    font-weight: 700;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  .price {
    margin: 8px 0;
  }
  .rate {
    color: #008489;
    font-size: 12px;
    .ant-rate-star {
      margin-right: 1px;
    }
  }

  .count {
    margin: 0 2px 0 4px;
  }
  span {
    font-size: 12px;
    font-weight: 700;
  }
`
