import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FeedPage from "./pages/FeedPage";
import DetailsPage from "./pages/DetailsPage";

const NavBar = () => {
  return (
    <div style={{ marginBottom: 30 }}>
      <NavLink to="/" style={{ marginRight: 30 }}>
        {" "}
        Home{" "}
      </NavLink>
      <NavLink to="/feed">Feed</NavLink>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/details" component={DetailsPage} />
        <Route path="/feed" component={FeedPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
