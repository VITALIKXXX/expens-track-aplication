import Header from "../Header";
import { StyledSection, Title } from "./styled";

const Section = ({ title }) => (
    <StyledSection>
        <Header>
            <Title>{title}</Title>
        </Header>
    </StyledSection>


);

export default Section;