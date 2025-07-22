import { SummaryWrapper, Box, Label, Value } from "./styled";

const Summary = ({ budget }) => {
    return (
        <SummaryWrapper>
            <Box>
                <Label>Total Budget:</Label>
                <Value>{budget}</Value>
            </Box>
            <Box>
                <Label>Total Expense:</Label>
                <Value>7500.00</Value>
            </Box>
            <Box>
                <Label>Budget Left:</Label>
                <Value>{budget}</Value>
            </Box>
        </SummaryWrapper>
    )
};

export default Summary;