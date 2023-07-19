import "./App.css";
//
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
//pages
import Home from "./pages/Home";
import LoginPage from "./pages/Login";
import EditEvent from "./pages/EditEvent";
import EditInfo from "./pages/EditInfo";
import AddEvent from "./pages/AddEvent";
import EventDetails from "./pages/EventDetails";
import Events from "./pages/Events";
import TableInfo from "./pages/TableInfo";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/login" Component={LoginPage} />
          <Route exact path="/editEvents" Component={EditEvent} />
          <Route exact path="/addEvent" Component={AddEvent} />
          <Route exact path="/editInfo" Component={EditInfo} />
          <Route exact path="/eventDetails" Component={EventDetails} />
          <Route exact path="/events" Component={Events} />
          <Route exact path="/tableInfo" Component={TableInfo} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
