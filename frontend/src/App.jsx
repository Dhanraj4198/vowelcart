import logo from "./logo.svg";
import "./App.css";
import { AllRoutes } from "./routes/MainRoute";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
    </div>
  );
}

export default App;
