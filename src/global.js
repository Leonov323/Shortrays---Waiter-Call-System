import { createGlobalStyle } from 'styled-components';


export const GlobalStyles = createGlobalStyle`
  
  html, body {
    margin: 0;
    padding: 0;  
    font-family: 'Lato', sans-serif;
    
  }
  *, *::after, *::before {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    text-rendering: optimizeLegibility;
    width: 100vw;
    overflow-x: hidden !important;
    background: #f8f9fA;
  }

  img {
  user-select: none;
} 
  nav {
    font-family: 'Azeret Mono', monospace;
  }
  .min-100-71 {
      min-height: calc(100vh - 71px);
      overflow: auto;
     }
     .max-100-71 {
          height: 99vh;;
          overflow: auto;
     }

  .h70 {
        height: 70px;
    }
  
  .w-46 {
    width: 43%;
  }
  `;