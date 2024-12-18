import styled from 'styled-components';

export const Container = styled.div``;

export const ProductImage = styled.img`
    height: 80px;
    padding: 12px;
    border-radius: 16px;
`;

export const EditButton = styled.button`
    border: none;
    background-color: ${(props) => props.theme.darkWhite};
    height: 32px;
    width: 32px;
    border-radius: 8px;
    margin: o auto;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        width: 18px;
        height: 18px;
    }

    &:hover {
        background-color: ${(props) => props.theme.purple};

        svg {
            fill: ${(props) => props.theme.white};
        }
    }
`;
