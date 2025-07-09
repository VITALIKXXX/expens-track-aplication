import { SummaryWrapper, Box, Label, Value } from "./styled";

const Summary = () => {
    return (
        <SummaryWrapper>
            <Box>
                <Label>Total Budget:</Label>
                <Value>10000.00</Value>
            </Box>
            <Box>
                <Label>Total Expense:</Label>
                <Value>7500.00</Value>
            </Box>
            <Box>
                <Label>Budget Left:</Label>
                <Value>2500.00</Value>
            </Box>
        </SummaryWrapper>
    )
};

export default Summary;