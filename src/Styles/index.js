import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        font-family: sans-serif;
    }

    a {
        text-decoration: none;
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

    div.CardsContainer {
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
    }

    div.CardUserContainer {
        width: 20%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        padding: 10px 10px;
    }

    div.CardRepositorieContainer {
        width: 80%;
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
    }
`;
