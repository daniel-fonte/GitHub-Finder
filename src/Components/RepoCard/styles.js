import styled from 'styled-components';

export default styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    border: none;
    border-radius: 10px;
    padding: 10px;
    justify-content: flex-start;
    align-items: center;
    background-color: ${(props) => (props.skeleton ? '#202020' : '#fff')};
    margin: 10px 10px;

    div.repoName {
        width: 100%;
        flex-direction: row;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }

    div.repoName a {
        font-size: 20px;
        font-weight: bold;
        color: #673ab7;
        margin-left: 10px;
    }

    div.repoDescription {
        width: 100%;
        text-align: left;
        margin: 10px 0;
    }

    div.repoDescription h1 {
        font-weight: bold;
        font-size: 18px; 
        color: #2196f3;
    }

    div.repoStatus {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin: 10px auto;
    }

    div.repoLanguage h1 {
        color: #f44336;
        font-size: 18px;
        font-weight: bold;
        margin-right: 40px;
    }

    div.repoInfos h2 {
        margin: 0 5px;
    }

    div.repoDownload {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        margin-bottom: -10px;
        cursor: pointer;
        width: 105%;
        background-color: #39f440;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        
        transition: background-color 1s;
    }

    div.repoDownload:hover {
        background-color: #00bb07;
    }

    div.repoDownload a {
        width: 100%;
        display: flex;
        justify-content: center;
        color: #000;
    }
`;
