import "./App.css";
import Register from "./components/register/register";
import Form from "./components/read/form";
import Update from "./components/update/update";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="main">
      <div>
        <h3>Login</h3>
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/read" element={<Form />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
