import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Profile from "./Components/Profile/Profile";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import Checkpoints from "./Components/Checkpoints/Checkpoints";
import PerformCheckpoint from "./Components/Checkpoints/PerformCheckpoint";
import CreateCheckpoint from "./Components/Checkpoints/CreateCheckpoint";
import History from "./Components/History/History";

import HistoryDetail from "./Components/History/HistoryDetail";
import User from "./Components/Users/Users";
import Invite from "./Components/Invite/Invite";
import Header from "./Common/Header/Header";
function App() {
  return (
    <>
      <div>
        <Header></Header>
      </div>
      <Routes>
        <Route path="/api/login" element={<Login />}></Route>
        <Route path="/api/register" element={<Register />}></Route>
        <Route path="/api/profile" element={<Profile />}></Route>
        <Route path="/api/invite" element={<Invite />}></Route>
        <Route path="/api/users" element={<User />}></Route>
        <Route path="/api/changepassword" element={<ChangePassword />}></Route>
        <Route path="/api/checkpoints" element={<Checkpoints />}></Route>
        <Route
          path="/api/checkpoints/:id"
          element={<PerformCheckpoint />}
        ></Route>
        <Route
          path="/api/createcheckpoint"
          element={<CreateCheckpoint />}
        ></Route>
        <Route path="/api/historys" element={<History />}></Route>
        <Route path="/api/historys/:id" element={<HistoryDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;
