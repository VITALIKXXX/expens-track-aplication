import styled from "styled-components";

export const StyledSection = styled.section`
margin: 10px 0;
background: ${({ theme }) => theme.background.backgroundColors};
box-shadow: 0 0 5px #ddd;
text-decoration: none;
`;



export const Title = styled.h1`
   font-size: 20px;
    margin: 0;
`;
