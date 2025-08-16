import { Wrapper, Title, Table, Thead, Tbody, Tr, Th, Td, RemoveButton, } from "./styled";

const ExpenseHistory = ({ expenses, removeExpense }) => {
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
                    {expenses.map((item, index) => (
                        <Tr key={index}>
                            <Td>{item.title}</Td>
                            <Td>{item.amount}</Td>
                            <Td>
                                <RemoveButton onClick={() => removeExpense(index)}>
                                    Remove
                                </RemoveButton>
                            </Td>
                        </Tr>
                    ))}

                </Tbody>
            </Table>
        </Wrapper>
    );
};

export default ExpenseHistory;