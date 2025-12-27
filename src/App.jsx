import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePages from "./Pages/Website/HomePages";
import Signup from "./Pages/Forms/signup";
import Login from "./Pages/Forms/Login";
import Users from "./Pages/Dashboard/Users";
import { AuthCallBack } from "./Pages/Forms/AuthCallBack";
import Dashboard from "./Pages/Dashboard/Dashboard";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />

        <Route path="dashboard/users" element={<Users />} />

        <Route path="/auth/google/callback" element={<AuthCallBack />} />

        <Route path="dashboard" element={<Dashboard />}>
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </Router>
  );
}
