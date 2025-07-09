import { Container } from "./components/Container";
import Header from "./components/Header";
import Section from "./components/Section";


function App() {
  return (
    <Container>
      <Header />
      <Section>
        <div style={{ flex: 1 }}>
         
        </div>
        <div style={{ flex: 2 }}>
        
        </div>
      </Section>
    </Container>
  );
}

export default App;
