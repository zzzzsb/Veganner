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
<<<<<<< HEAD
import Kakao from "./pages/login/Kakao";
import GoogleCallback from "./pages/login/GoogleCallback";


=======
import AddPost from "./pages/addPost/Addpost";
>>>>>>> 06c8994341f76dd561177b9ff2379e7cf9cc0ef6
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
          <Route path="/auth/kakao/callback" element={<Kakao />} />
          <Route path="/auth/google/callback" element={<GoogleCallback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
