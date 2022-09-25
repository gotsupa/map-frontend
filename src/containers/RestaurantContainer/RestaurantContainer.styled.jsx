import styled from 'styled-components'

export const Styled = styled.div`
  padding: 20px;

  @media screen and (min-width: 768px) {
    padding: 40px;
  }

  @media screen and (min-width: 1025px) {
    padding: 40px;

    max-width: 1400px;
    margin-inline: auto;
  }

  @media screen and (min-width: 1440px) {
    padding: 40px 0 0;
  }
`
