import { use, useState } from "react";
import { Wrapper, Label, Input, Button } from "./styled";

const Budget = ({ setBudgetValue }) => {

  const [budgetInput, setBudgetInput] = useState("");

  const handleInputChange = (e) => {
    setBudgetInput(e.target.value);
  };

  const handleAddBudget = () => {
    const number = parseFloat(budgetInput);
    if (!isNaN(number) && number >= 0) {
      setBudgetValue(number);
      setBudgetInput("");
    } else {
      alert("Please enter a valid number");
    }
  };

  return (
    <Wrapper>
      <h2>Add Budget</h2>
      <Label>Budget:</Label>
      <Input
        type="number"
        placeholder="Enter budget"
        value={budgetInput}
        onChange={handleInputChange}
      />
      <Button onClick={handleAddBudget}>Add Budget</Button>
    </Wrapper>
  )
}

export default Budget;