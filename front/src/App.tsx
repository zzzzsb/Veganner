import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import { Reset } from "styled-reset";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Insights from "./pages/Insights";
import "./styles/styles.css";
import { Reset } from "styled-reset";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Reset />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Insigths" element={<Insights />} />
          {/* <Route path="/Share" element={} />
          <Route path="/Explore" element={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
