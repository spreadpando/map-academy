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
    font-weight: 600;
    letter-spacing: 0.2em;
  }
  p {
    line-height: 1.5rem;
  }
  input, textarea {
    border: 1px solid ${({ theme }) => theme.colors.text_primary};
    border-radius: 5px;
    vertical-align: middle;
  }
  button, input[type="submit" i] {
    background-color: rgba(0,0,0,0);
    border-radius: 3px;
    border: 1px solid #888;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.text_primary};
  }
  ul{
    list-style-type: circle;
  }

`

export default GlobalStyle
