import styled from '@emotion/styled/macro';
import { colors } from '../style/theme';

export default function Breadcrumbs() {
  return (
    <Container>
      <a href='/'>Inicio</a>
      <span>&#60;</span>
      <a href='/productos'>Productos</a>
      <span>&#60;</span>
      <a href='/productos'>Permedica</a>
      <span>&#60;</span>
      <p>Producto</p>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 8px;
  text-transform: uppercase;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: 1.5px;
  color: ${colors.primaryLight};
  * {
    font-family: 'Open Sans';
  }
  a {
    color: ${colors.primaryLight};
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    font-weight: 700;
  }
  @media only screen and (max-width: 800px) {
    margin-bottom: 26px;
    flex-wrap: wrap;
  }
`