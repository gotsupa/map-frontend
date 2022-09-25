import { useState } from 'react'
import { ButtonClick } from '../../components/Button/Button.styled'

import { NUMBER } from '../../constants/constant'
import * as Styled from './CalNumber.styled'

const CalNumber = () => {
  const [missingNumber, setMissingNumber] = useState(0)

  const footer = document.getElementById('footer')
  const header = document.getElementById('header-bar')

  const findMissingNumber = (index) => {
    const result = Math.pow(index, 2) - index + 3

    setMissingNumber(result)
  }

  return (
    <Styled.Container
      headerHeight={header?.clientHeight || 96}
      footerHeight={footer?.clientHeight || 96}
    >
      <div className='wrapper'>
        <div className='content-container'>
          <h1>Find the missing number</h1>
          <div className='number-order'>
            {NUMBER.map(({ numbering, text }, index) => (
              <p key={`p-${index}`}>{text}</p>
            ))}
          </div>
        </div>

        <div className='button-container'>
          {NUMBER.map(({ numbering, text }, index) => {
            if (['x', 'y', 'z'].includes(text.toLowerCase())) {
              return (
                <ButtonClick
                  key={`button-${index}`}
                  onClick={() => findMissingNumber(numbering)}
                >
                  {text}
                </ButtonClick>
              )
            }
          })}

          <ButtonClick onClick={() => setMissingNumber(0)}>
            Clear Result
          </ButtonClick>
        </div>

        {Boolean(missingNumber) && <p>{missingNumber}</p>}
      </div>
    </Styled.Container>
  )
}

export default CalNumber
