import "./App.css";
import { Routes, Route } from "react-router";
import LandingHTML from "./body/LandingHTML.jsx";
import Login  from "./auth/Login.jsx";
import Signin from "./auth/Signin.jsx";
import NotFound from "./pages/NotFound.jsx";
import Dashboard from "./user/Dashboard/Dashboard.jsx";

function App() {
  return (
    <Routes>
      <Route index element={<LandingHTML />} />
      <Route path="/login" element = {<Login />} />
      <Route path="/signup" element = {<Signin />} />
      <Route path="/dashboard" element = {<Dashboard />} />



      <Route path="*" element= {<NotFound/>}/>
    </Routes>
  );
}

export default App;
