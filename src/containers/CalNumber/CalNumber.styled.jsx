import styled, { css } from 'styled-components'

export const Container = styled.div(
  ({ headerHeight, footerHeight }) => css`
    height: calc(100vh - ${headerHeight}px - ${footerHeight}px);

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    .content-container {
      margin-bottom: 40px;

      h1 {
        margin-bottom: 20px;
      }
    }

    .number-order {
      display: flex;
      justify-content: center;
      text-transform: uppercase;
      gap: 20px;
    }

    .button-container {
      margin-bottom: 40px;
      display: flex;
      gap: 20px;
    }
  `
)
