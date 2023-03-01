import "./App.css";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Work from "./components/Works";
import { Container } from "./Styled/Styled";


function App() {
  return (
    <Container>
      <Hero />
      <Who />
      <Work />
      <Contact />
    </Container>
  );
}

export default App;
