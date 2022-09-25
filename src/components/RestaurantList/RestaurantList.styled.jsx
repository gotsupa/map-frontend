import styled from 'styled-components'

export const Styled = styled.div`
  margin-bottom: 20px;

  .input-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 30px;
  }

  .image-container {
    height: 200px;
    display: block;
  }

  .content-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;

    li {
      line-height: 25px;

      h2 {
        font-size: 20px;
        margin-bottom: 10px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    .image-container {
      height: 400px;
    }
  }

  @media screen and (min-width: 1025px) {
    .image-container {
      height: 600px;
    }

    .content-container {
      display: grid;
      grid-template: 1fr / repeat(2, 1fr);

      li {
        font-size: 18px;

        h2 {
          font-size: 25px;
        }
      }
    }
  }
`
