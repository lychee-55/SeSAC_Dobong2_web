import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* @font-face {
    font-family: 'Tenada';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2210-2@1.0/Tenada.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
} */
/* @import url('http://fonts.googleapis.com/earlyaccess/nanumgothic.css'); */
@font-face {
    font-family: 'ChosunGu';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/ChosunGu.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "ChosunGu";
}

/* html{
    font-size: 20px;
} */

a{
    text-decoration: none;
}

ul,ol{
    list-style: none;
}
`;
