import styled from 'styled-components';

import Background from '../../assets/background-png.svg';
import BannerHome from '../../assets/banner-home.svg';

export const Banner = styled.div`
    background: linear-gradient(
        rgba(0, 0, 0, 0.9),
        rgba(0, 0, 0, 0.7)      
    ),
    url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 720px;

    h1 {
        font-family: 'Road Rage', sans-serif;
        font-size: 80px;
        color: ${(props) => props.theme.darkWhite};
        position: absolute;
        right: 20%;
        top: 10%;
    }
`;

export const Container = styled.section`
    background: linear-gradient(
        rgba(255, 255, 255, 0.6),
        rgba(255, 255, 255, 0.6)      
    ),
    url('${Background}');
    background-size: cover;
    height: 500px;
    min-height: 100vh;
`;
