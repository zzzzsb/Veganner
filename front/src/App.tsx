import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/styles.css";
import { Reset } from "styled-reset";
import Header from "./components/header/Header";
import Main from "./pages/main/Main";
import Insight from "./pages/insight/Insight";

// import Share from "./pages/Share";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import View from "./pages/view/View";
import Map from "./pages/map/Map";
import data from "./datas/seoul.json";
import ResitemDetail from "./components/Map/ResitemDetail";
import List from "./pages/list/List";
import AddPost from "./pages/addPost/Addpost";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Reset />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/share" element={<List />} />
          <Route path="/insights" element={<Insight />} />
          <Route path="/view" element={<View />} />
          <Route path="/write" element={<AddPost />} />
          {/* <Route path="/edit" element={<EditPost />} /> */}
          <Route path="/explore" element={<Map />} />
          <Route
            path="/explore/detail/:id"
            element={<ResitemDetail detail={data.data} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
