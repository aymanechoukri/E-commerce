import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePages from "./Pages/Website/HomePages";
import Signup from "./Pages/Forms/signup";
import Login from "./Pages/Forms/Login";
import Users from "./Components/Dashboard/Users";
import { AuthCallBack } from "./Pages/Forms/AuthCallBack";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />

        <Route path="users" element={<Users />} />

        <Route path="/auth/google/callback" element={<AuthCallBack />} />
      </Routes>
    </Router>
  );
}
