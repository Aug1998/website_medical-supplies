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
  background-color: ${elements.AboutUsCTABackground};
  color: ${elements.AboutUsCTAText};
  border-radius: 3px;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 16px 18px;
  text-transform: uppercase;
  transition: all 0.2s;
  cursor: pointer;
  &:hover{
    background-color: ${`${elements.AboutUsCTABackground}99`};
  }
`