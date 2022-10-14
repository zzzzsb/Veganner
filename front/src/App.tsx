import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Insights from "./pages/Insights";
import Share from "./pages/Share";
import Write from "./pages/write/Write";
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
          <Route path="/insigths" element={<Insights />} />
          <Route path="/share" element={<Share />} />
          <Route path="/write" element={<Write />} />
          {/* <Route path="/Explore" element={} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
