import styled from 'styled-components';

export const Container = styled.div`
    padding-left: 30px;
    padding-bottom: 40px;
    overflow-x: hidden;


    .react-multi-carousel-list {
        overflow: visible;
    }

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
    color: ${(props) => props.theme.green};
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 70px 0;

    &::after {
        content: '';
        position: absolute;
        left: calc(50% - 28px);
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: ${(props) => props.theme.green};
    }
`;

export const ContainerItems = styled.div`
    background: url('${(props) => props.imageUrl}');
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 20px 10px;
    width: 100%;
    height: 250px;

    p {
        color: ${(props) => props.theme.white};
        background-color: rgba(0, 0, 0, 0.5);
        padding: 10px 30px;
        border-radius: 30px;
        font-size: 22.5px;
        font-weight: bold;
        margin-top: 50px;
    }
`;
