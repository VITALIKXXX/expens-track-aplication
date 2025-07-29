import { SummaryWrapper, Box, Label, Value } from "./styled";

const Summary = ({ budget, expenses }) => {

    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    const budgetLeft = budget - totalExpenses;

    return (
        <SummaryWrapper>
            <Box>
                <Label>Total Budget:</Label>
                <Value>{budget}</Value>
            </Box>
            <Box>
                <Label>Total Expense:</Label>
                <Value>{totalExpenses}</Value>
            </Box>
            <Box>
                <Label>Budget Left:</Label>
                <Value>{budgetLeft}</Value>
            </Box>
        </SummaryWrapper>
    )
};

export default Summary;