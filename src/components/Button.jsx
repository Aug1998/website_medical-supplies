import styled from '@emotion/styled'
import { colors } from '../style/theme'
import Icon from './Icon'

export default function Button({ children, onClick, type }) {
 
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
      <Icon icon="arrowRight"/>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  display: flex;
  all: unset; 
  background-color: transparent;
  color: ${props => props.type === "dark" ? colors.primaryLight : colors.accent};
  border-bottom: ${props => props.type === "dark" ? colors.primaryLight : colors.accent} 2px solid;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 10px 0px 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.2s;
  grid-area: button;
  font-family: 'Open Sans';
  cursor: pointer;
  &:hover{
    color: ${`${colors.primaryLight}aa`};
    border-color: ${`${colors.primaryLight}aa`};
    transform: translateY(-2px);
    svg {
      fill: ${`${colors.primaryLight}aa`};
      transform: translateX(4px);
    }
  }
  button {
    margin-left: 10px;
  }
  svg {
    fill: ${props => props.type === "dark" ? colors.primaryLight : colors.accent};
  }
`