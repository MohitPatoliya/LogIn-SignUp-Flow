import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Forms/Login";
import SignUp from "./Components/Forms/SignUp";
import FirstPage from "./Components/FirstPage/FirstPage";
import ForgetPassword from "./Components/Forms/ForgetPassword";
import Christmas from "./Components/Christmas/Christmas";

function App() {
  return (
    <Router>
      <Routes>
        <Route index path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/firstpage" element={<FirstPage />} />
        <Route path="/christmas" element={<Christmas />} />
      </Routes>
    </Router>
  );
}

export default App;
