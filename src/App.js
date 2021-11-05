import "./App.css";
import Register from "./components/register/register";
import Form from "./components/read/form";

function App() {
  return (
    <div className="main">
      <div>
        <h3>Login</h3>
      </div>
      <Register />
      <Form />
    </div>
  );
}

export default App;
