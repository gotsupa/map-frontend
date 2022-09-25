import React from 'react'

import { ButtonClick } from './Button.styled'

function Button({ children, onClick }) {
  return <ButtonClick onClick={onClick}>{children}</ButtonClick>
}

export default Button
