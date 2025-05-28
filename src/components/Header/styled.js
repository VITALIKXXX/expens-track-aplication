import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    text-align: center;

    @media(max-width: 767px) {
       grid-template-columns: 1fr;
    }

`;

export const Title = styled.h1`
   font-size: 50px;
    margin: 0;
`;