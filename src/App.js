import "./App.css";
import { Switch, Route, NavLink } from "react-router-dom";
import Homepage from "./pages/Homepage";
import FeedPage from "./pages/FeedPage";
import DetailsPage from "./pages/DetailsPage";

const NavBar = () => {
  return (
    <div style={{ marginBottom: 30 }}>
      <NavLink
        exact
        to="/"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
        style={{ marginRight: 30 }}
      >
        {" "}
        Home{" "}
      </NavLink>

      <NavLink
        exact
        to="/feed"
        activeStyle={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        Feed
      </NavLink>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/details/:planetId" component={DetailsPage} />
        <Route path="/feed" component={FeedPage} />
        <Route path="/" component={Homepage} />
      </Switch>
    </div>
  );
}

export default App;
