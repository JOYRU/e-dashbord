import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <h1>E-Dashboard</h1>
      </BrowserRouter>
    </div>
  );
}

export default App;
