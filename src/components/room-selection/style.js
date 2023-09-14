import { styled } from 'styled-components'
import { center } from '../../assets/theme/box-shadow'
export const SelectionWrapper = styled.div`
  .tabItem {
    ${center}
    width: 140px;
    height: 48px;
    margin-right: 10px;
    font-size: 18px;
    border: 1px solid #aaa;
    cursor: pointer;
  }
  .active {
    background-color: var(--secondaryColor);
    color: #fff;
  }
`
