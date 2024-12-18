import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
    padding-left: 30px;

    .carousel-item {
        padding-right: 40px;
    }

    .react-multiple-carousel__arrow--left {
        left: 0px;
    }
    .react-multiple-carousel__arrow--right {
        right: 0px;
    }
`;

export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${(props) => props.theme.purple};
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 20px;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: calc(50% - 28px);
        width: 56px;
        height: 4px;
        background-color: ${(props) => props.theme.purple};
    }
`;

export const ContainerItems = styled.div`
    background: url('${(props) => props.imageUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 20px;
    width: 100%;
    height: 250px;
    cursor: grab;
    margin-left: 20px;
`;

export const CategoryButton = styled(Link)`
    color: ${(props) => props.theme.white};
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px 30px;
    border-radius: 30px;
    font-size: 22.5px;
    font-weight: bold;
    margin-top: 50px;
    font-weight: 500;
    text-decoration: none;

    &:hover {
        background-color: ${(props) => props.theme.purple};
    }
`;
