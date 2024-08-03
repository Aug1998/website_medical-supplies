import { css } from '@emotion/react'

export const GlobalCss = css`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600;700&display=swap');

  #root{
    width: 100dvw;
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    background-color: white;
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
  }
`