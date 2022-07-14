import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar/NavBar";
import "./custom.scss";
import { Home } from "./components/Home/Home";

function App() {
  return (
    <>
      <NavBar />
      <Home />
    </>
  );
}

export default App;
