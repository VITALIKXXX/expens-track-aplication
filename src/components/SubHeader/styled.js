import styled from "styled-components";

export const StyledSubHeader = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 20px;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media(max-width: 767px) {
       grid-template-columns: 1fr;
    }

`;