import Container from "./components/Container";
import Header from "./components/Header";
import { Section, LeftColumn, RightColumn } from "./components/Section";
import Budget from "./features/tracker/Budget";
import Expense from "./features/tracker/Expense";


function App() {
  return (
    <Container>
      <Header />
      <Section>
        <LeftColumn>
          <Budget />
          <Expense />
        </LeftColumn>
        <RightColumn>

        </RightColumn>
      </Section>
    </Container>
  );
}

export default App;
