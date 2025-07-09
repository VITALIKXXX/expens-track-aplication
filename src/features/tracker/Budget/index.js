import { Wrapper, Label, Input, Button } from "./styled";

const Budget = () => {
  return (
    <Wrapper>
      <h2>Add Budget</h2>
      <Label>Budget:</Label>
      <Input type="number" placeholder="Enter budget" />
      <Button>Add Budget</Button>
    </Wrapper>
  )
}

export default Budget;