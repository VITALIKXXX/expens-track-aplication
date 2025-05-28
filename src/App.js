import { Container } from "./components/Container";
import Header from "./components/Header";
import SubHeader from "./components/SubHeader"

function App() {
  return (
    <>
      <Header title="Budget Tracker" />
      <Container>
        <SubHeader title= "Wydatki" />
      </Container>
    </>
  );
}

export default App;
