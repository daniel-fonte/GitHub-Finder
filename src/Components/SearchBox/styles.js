import styled, { keyframes } from 'styled-components';

const expandAnim = keyframes`
    from {
        opacity: 0;
        width: 0;
    }
    to {
        opacity: 1;
        width: 30%; 
    }
`;

const rotateAnim = keyframes`
    from {
        transform: rotate(180deg);
    }
    to {
        transform: rotate(0deg);
    }
`;

export default styled.div`
    display: flex;
    margin: 10px auto;
    width: 100%;
    justify-content: center;
    align-items: center;

    input {
        width: 30%;
        border: none;
        border-radius: 30px;
        padding: 10px 15px;
        height: 30px;

        animation-name: ${expandAnim};
        animation-duration: 1s;
    }

    button {
        border: none;
        background-color: transparent;
        cursor: pointer;
        animation-name: ${rotateAnim};
        animation-duration: 1s;
    }

    button img {
        width: 60px;
        height: 60px;
    }
`;
