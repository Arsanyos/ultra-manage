import "./App.css";
//
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
//pages
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import EditEvent from "./pages/EditEvent";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/login" Component={LoginPage} />
          <Route exact path="/editEvents" Component={EditEvent} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
