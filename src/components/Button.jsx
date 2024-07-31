import styled from '@emotion/styled'
import { colors, elements } from '../theme'
import Icon from './Icon'

export default function Button({ children, onClick }) {
 
  return (
    <StyledButton onClick={onClick}>
      {children}
      <Icon icon="arrowRight"/>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  all: unset; 
  background-color: transparent;
  color: white;
  border-bottom: ${colors.accent} 2px solid;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 20px 0px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.2s;
  cursor: pointer;
  &:hover{
    background-color: ${`${elements.AboutUsCTABackground}99`};
  }
  button {
    margin-left: 10px;
  }
`