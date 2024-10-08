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
  gap: 12px;
  color: ${props => props.type === "dark" ? colors.primaryLight : "white"};
  border-bottom: ${props => props.type === "dark" ? colors.primaryLight : colors.accent} 2px solid;
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
  padding: 10px 0px 18px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: all 0.2s;
  grid-area: button;
  font-family: 'Open Sans';
  cursor: pointer;
  width: fit-content;
  &:hover{
    color: ${props => props.type === "dark" ? colors.primaryLight + `aa` : "white"};
    border-color: ${`${colors.primaryLight}aa`};
    border-color: ${props => props.type === "dark" ? colors.primaryLight + `aa` : colors.accent + `aa`};
    transform: translateY(-2px);
    svg {
      fill: ${props => props.type === "dark" ? colors.primaryLight + `aa` : colors.accent + `aa`};
      transform: translateX(4px);
    }
  }
  svg {
    fill: ${props => props.type === "dark" ? colors.primaryLight : colors.accent};
  }
`