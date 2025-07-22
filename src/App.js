import Container from "./components/Container";
import Header from "./components/Header";
import { Section, LeftColumn, RightColumn } from "./components/Section";
import Budget from "./features/tracker/Budget";
import Expense from "./features/tracker/Expense";
import Summary from "./features/tracker/Summary";
import ExpenseHistory from "./features/tracker/History";
import { useState } from "react";


function App() {

  const [budgetValue, setBudgetValue] = useState("0");

  return (
    <Container>
      <Header />
      <Section>
        <LeftColumn>
          <Budget setBudgetValue={setBudgetValue} />
          <Expense />
        </LeftColumn>
        <RightColumn>
          <Summary budget={budgetValue} />
          <ExpenseHistory />
        </RightColumn>
      </Section>
    </Container>
  );
}

export default App;
