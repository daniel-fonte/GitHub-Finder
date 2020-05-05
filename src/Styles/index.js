import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-family: sans-serif;
    }

    body {
        background-color: #1a1919 ;
    }

    div.logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin: 10px auto;
    }

    div.logo img {
        width: 200px;
        height: 200px;
    }
`;
