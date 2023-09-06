import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

body {
font-family: 'Manrope', sans-serif; 
color: rgba(18, 20, 23, 0.50);
background-color: #FFFFFF;
font-size: 12px;
font-weight: 400;
line-height: 1.5; 
}

p, h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

ul, ol {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {text-decoration: none;
 }
 
 a:focus,
button:focus {
  outline: 1px solid transparent;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
