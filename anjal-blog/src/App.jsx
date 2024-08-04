import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/Home";

import Navbar from "./components/Navbar";
import Blogdetails from "./components/Blogdetails";
import Create from "./components/Create";

function App() {
  return (
    <Router>
      <div className="navbar">
        <Navbar />
      </div>
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/blog/:id">
          <Blogdetails />
        </Route>
        <Route path="/create">
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
