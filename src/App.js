import Container from "./components/Container";
import Header from "./components/Header";
import { Section, LeftColumn, RightColumn } from "./components/Section";
import Budget from "./features/tracker/Budget";


function App() {
  return (
    <Container>
      <Header />
      <Section>
        <LeftColumn>
          <Budget />
        </LeftColumn>
        <RightColumn>

        </RightColumn>
      </Section>
    </Container>
  );
}

export default App;
