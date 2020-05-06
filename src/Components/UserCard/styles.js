import styled from 'styled-components';

export default styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: ${(props) => (props.skeleton ? '#202020' : '#fff')};
    padding: 10px 15px;
    border: none;
    border-radius: 10px;
    justify-content: flex-start;
    align-items: center;

    div.userImg {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    div.userImg img {
        width: 120px;
        height: 120px;
        border-radius: 100%;
    }

    div.userNames {
        margin: 10px auto;
        width: 100%;
        padding-bottom: 10px;
    }

    div.userNames h1 {
        font-size: 20px;
        color: #2196f3;
        font-weight: bold;
    }

    div.userNames h2 {
        font-size: 18px;
        color: #673ab7;
        font-weight: bold;
    }

    div.userBio {
        width: 100%;
        text-align: left;
        margin-bottom: 5px;
    }

    div.userBio p {
        font-size: 16px;
    }

    div.userCompany {
        display: flex; 
        flex-direction: row;
        margin: 5px auto;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
    }

    div.userLocation {
        display: flex; 
        flex-direction: row;
        margin: 5px auto;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
    }

    div.userLocation h1, div.userCompany h1 {
        margin: 0 5px;
        font-size: 18px;
    }
`;
