import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';

import BackgroundLogin from '../../assets/background-login.svg';
import Background from '../../assets/background.svg';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100vw;
`;

export const LeftContainer = styled.div`
    background: url('${BackgroundLogin}');
    background-size: cover;
    background-position: center;

    height: 100%;
    width: 100%;
    max-width: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 60%;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    height: 100%;
    width: 100%;
    max-width: 50%;

    background: url('${Background}');
    background-color: ${(props) => props.theme.black};

    p {
        color: ${(props) => props.theme.white};
        font: 18px;
        font-weight: 800;

        a {
            text-decoration: underline;
        }
    }
`;

export const Title = styled.h2`
    font-family: "Road Rage", sans-serif;
    font-size: 40px;
    color: ${(props) => props.theme.white};

    span {
        color: ${(props) => props.theme.purple};
        font-family: "Road Rage", sans-serif;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    width: 100%;
    max-width: 400px;
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;

    input {
        width: 100%;
        border: none;
        border-radius: 5px;
        height: 52px;
        padding: 0 16px;
    }

    label {
        font-size: 18px;
        font-weight: 600;
        color: ${(props) => props.theme.white};
    }

    p {
        font-size: 14px;
        line-height: 80%;
        color: ${(props) => props.theme.darkRed};
        font-weight: 600;
        height: 10px;
    }
`;

export const Link = styled(ReactLink)`
    text-decoration: none;
    color: ${(props) => props.theme.white};
`;
