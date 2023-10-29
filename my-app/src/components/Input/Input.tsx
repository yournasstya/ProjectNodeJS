import React from 'react'
import { SearchButton, StyledInput, StyledInputContainer } from './styledInput'

const Input = () => {
  return (
    <StyledInputContainer>
      <StyledInput type="text"  placeholder='Search'/>
      <SearchButton/>
    </StyledInputContainer>
  )
}

export default Input