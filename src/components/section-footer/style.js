import styled from 'styled-components'

export const FooterWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  margin: 15px 0 10px;
  font-size: 17px;
  font-weight: 700;
  color: ${(props) => (props.name ? 'var(--secondaryColor)' : '#000')};
  cursor: pointer;
  img {
    width: 10px;
  }
  .text {
    margin-right: 5px;
  }

  &:hover {
    .text {
      text-decoration: underline;
    }
  }
`
