import { Wrapper, Label, Input, Button, ResetButton } from "./styled";

const Expense = () => {
    return (
        <Wrapper>
            <h2>Add Expense</h2>
            <Label>Expense Title:</Label>
            <Input type="text" placeholder="Enter title" />
            <Label>Amount:</Label>
            <Input type="number" placeholder="Enter amount" />
            <Button>Add Expense</Button>
            <ResetButton>Reset All</ResetButton>
        </Wrapper>
    )
}

export default Expense;