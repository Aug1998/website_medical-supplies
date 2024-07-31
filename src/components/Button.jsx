import styled from '@emotion/styled'
import { elements } from '../theme'

export default function Button({ children, onClick }) {
 
  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  all: unset; 
  background-color: transparent;
  color: white;
  border: white 2px solid;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  padding: 12px 17px;
  text-transform: uppercase;
  transition: all 0.2s;
  cursor: pointer;
  &:hover{
    background-color: ${`${elements.AboutUsCTABackground}99`};
  }
`