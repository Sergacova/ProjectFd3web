import "./App.css";
import Container from "./components/Container";
import {Routes} from 'react-router-dom';
import { ThemeProvider } from "./components/Context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <Container />
    </ThemeProvider>
  );
}

export default App;
