import { StyledSubHeader, Title } from "./styled";

const SubHeader = ({ title }) => (
    <StyledSubHeader>
        <Title>{title}</Title>
    </StyledSubHeader>
);

export default SubHeader;