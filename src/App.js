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
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses((prev) => [...prev, expense]);
  };

  const removeExpense = (indexToRemove) => {
    setExpenses((prevExpenses) =>
      prevExpenses.filter((_, index) => index !== indexToRemove)
    );
  };

  const resetAll = () => {
    setBudgetValue(0);
    setExpenses([]);
  };

  return (
    <Container>
      <Header />
      <Section>
        <LeftColumn>
          <Budget setBudgetValue={setBudgetValue} />
          <Expense addExpense={addExpense} resetAll={resetAll} />
        </LeftColumn>
        <RightColumn>
          <Summary budget={budgetValue} expenses={expenses} />
          <ExpenseHistory expenses={expenses} removeExpense={removeExpense} />
        </RightColumn>
      </Section>
    </Container>
  );
}

export default App;
