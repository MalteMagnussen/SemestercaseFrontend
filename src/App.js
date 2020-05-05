import React from "react";
import NavBar from "./components/NavBar.jsx";
import { HashRouter, Route, Switch } from "react-router-dom";
import MapPage from "./components/map/LeafletMap.jsx";

function App() {
  return (
    <div>
      <NavBar></NavBar>

      <HashRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/" component={MapPage} />
          <Route path="*" component={NoMatch} />
        </Switch>
      </HashRouter>
    </div>
  );
}

const NoMatch = () => {
  return (
    <>
      <br />
      <h1 style={{ marginLeft: 30 }}>There is nothing here.</h1>
    </>
  );
};

export default App;
