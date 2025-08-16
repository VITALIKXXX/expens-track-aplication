import { useState } from "react";
import { Wrapper, Label, Input, Button, ResetButton } from "./styled";

const Expense = ({ addExpense, resetAll }) => {

    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");

    const handleAdd = () => {
        const parsedAmount = parseFloat(amount);
        if (title.trim() && !isNaN(parsedAmount) && parsedAmount > 0) {
            addExpense({ title, amount: parsedAmount });
            setTitle("");
            setAmount("");
        } else {
            alert("Please enter valid title and amount");
        }
    };


    return (
        <Wrapper>
            <h2>Add Expense</h2>
            <Label>Expense Title:</Label>
            <Input
                type="text"
                placeholder="Enter title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Label>Amount:</Label>
            <Input
                type="number"
                placeholder="Enter amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <Button onClick={handleAdd}>Add Expense</Button>
            <ResetButton onClick={resetAll}>Reset All</ResetButton>
        </Wrapper>
    )
}

export default Expense;