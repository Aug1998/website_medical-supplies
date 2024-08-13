import { css } from '@emotion/react'
import styled from '@emotion/styled/macro'
import { colors, spaces } from './theme'

export const GlobalCss = css`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');
  
  #root{
    width: 100dvw;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    background-color: ${colors.grayBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  * {
    font-family: 'Poppins', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    box-sizing: border-box;
    z-index: 10;
  }
  body {
    width: 100dvw;
    overflow-x: hidden;
    /* width */
    ::-webkit-scrollbar {
      width: 10px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: #f1f1f1; 
      background: ${colors.grayBackground}; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: #888; 
      background: ${colors.primary}; 
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
      background: #555; 
      background: ${colors.primaryLight}; 
    }
  }
`

export const Padding = styled.div`
  padding: 60px ${spaces.horizontalPadding};
  @media only screen and (max-width: 800px) {
    padding: 60px ${spaces.horizontalPaddingMobile};
  }
`