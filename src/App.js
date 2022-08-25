import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Profile from "./Components/Profile/Profile";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import Main from "./Layouts/Main/Main";
import Checkpoints from "./Components/Checkpoints/Checkpoints";
import CheckpointDetail from "./Components/Checkpoints/CheckpointDetail";
import History from "./Components/History/History";

import HistoryDetail from "./Components/History/HistoryDetail";
import User from "./Components/Users/Users";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/profile" element={<Profile />}></Route>
      <Route path="/users" element={<User />}></Route>
      <Route path="/changepassword" element={<ChangePassword />}></Route>
      <Route path="/checkpoints" element={<Checkpoints />}></Route>
      <Route path="/historys" element={<History />}></Route>
      <Route path="/historys/:id" element={<HistoryDetail />}></Route>
    </Routes>
  );
}

export default App;
