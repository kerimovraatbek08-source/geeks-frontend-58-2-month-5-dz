import { ToastContainer } from "react-toastify";
import "./App.css";
import { AntdForm } from "./components/RegistrationForm";

function App() {
  return (
    <div>
      <AntdForm />
      <ToastContainer theme="dark" />
    </div>
  );
}

export default App;
