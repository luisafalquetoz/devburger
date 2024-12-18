import styled from 'styled-components';

export const ProductImage = styled.img`
    height: 80px;
    width: 80px;
    border-radius: 16px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 30px;
        width: 30px;
        color: ${(props) => props.theme.white};
        border-radius: 4px;
        border: none;
        background-color: ${(props) => props.theme.purple};
        transition: all 0.2s;

        &:hover {
            background-color: ${(props) => props.theme.secondDarkPurple};
        }
    }
`;

export const EmptyCart = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: bold;
`;

export const TotalPrice = styled.p`
    font-weight: bold;
`;

export const DeleteButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 30px;
    color: ${(props) => props.theme.black};
    border-radius: 4px;
    border: none;
    background-color: ${(props) => props.theme.secondWhite};
    transition: all 0.2s;

    &:hover {
        background-color: ${(props) => props.theme.darkRed};
        color: ${(props) => props.theme.white};
    }
`;
