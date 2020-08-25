import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
    overflow-x:hidden;
  }
  body {
    font-family: 'Open Sans', sans-serif;
  }
  h1 {
    font-family: 'Playfair Display', serif;
    font-weight: 600;
    letter-spacing: 0.5rem;
  }
  h2 {
    font-family: 'Cormorant Garamond', serif;
  }
  h3 {
    font-family: 'Cormorant Garamond', serif;
  }
  h5 {
    line-height: 1.2rem;
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.text_primary};
    cursor: pointer;
  }
  p {
    line-height: 1.5rem;
  }
  input, textarea {
    border: 1px solid ${({ theme }) => theme.colors.text_primary};
    border-radius: 5px;
    vertical-align: middle;
  }
  input[type='submit'] {
    border: 1px solid ${({ theme }) => theme.colors.text_primary};
    padding: 10px 20px !important;
    font-size: 14px !important;
    background-color: ${({ theme }) => theme.colors.paper};
    color: ${({ theme }) => theme.colors.text_primary};
  
  }
  ul{
    list-style-type: circle;
  }

`

export default GlobalStyle
