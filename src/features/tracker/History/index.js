import { Wrapper, Title, Table, Thead, Tbody, Tr, Th, Td, RemoveButton, } from "./styled";

const ExpenseHistory = () => {
    return (
        <Wrapper>
            <Title>Expense History:</Title>
            <Table>
                <Thead>
                    <Tr>
                        <Th>Expense Name</Th>
                        <Th>Amount</Th>
                        <Th>Action</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    <Tr>
                        <Td>Grocery</Td>
                        <Td>2000.00</Td>
                        <Td><RemoveButton>Remove</RemoveButton></Td>
                    </Tr>
                    <Tr>
                        <Td>Loan</Td>
                        <Td>1000.00</Td>
                        <Td><RemoveButton>Remove</RemoveButton></Td>
                    </Tr>
                    <Tr>
                        <Td>Shopping</Td>
                        <Td>3000.00</Td>
                        <Td><RemoveButton>Remove</RemoveButton></Td>
                    </Tr>
                </Tbody>
            </Table>
        </Wrapper>
    );
};

export default ExpenseHistory;