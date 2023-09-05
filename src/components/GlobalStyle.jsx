import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle`
    body {
  margin: 0;
 
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
color: inherit;
transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
&:hover, &:focus{ color: #277a9d} }

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;