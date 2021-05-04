import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// VIEWS
import HomeView from "./views/HomeView";
import DownloadView from "./views/DownloadView";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/:slug" component={DownloadView} />
        <Route path="*" render={() => <h2>SITE NOT EXIST</h2>} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
