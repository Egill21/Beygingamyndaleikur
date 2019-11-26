import React from 'react';
import { Route, Switch, withRouter } from "react-router-dom";

import Home from './routes/home/Home';
import Nafnord from './routes/nafnord/Nafnord';
import Lysingarord from './routes/lysingarord/Lysingarord';
import Sagnord from './routes/sagnord/Sagnord';
import Notfound from './routes/notfound/Notfound';

import './App.scss';


function App(props) {
  return (
    <React.Fragment>
    <div className="app">
      <main>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/nafnord" exact component={Nafnord} />
          <Route path="/lysingarord" exact component={Lysingarord} />
          <Route path="/sagnord" exact component={Sagnord} />
          <Route component={Notfound} />
        </Switch>
      </main>
    </div>
  </React.Fragment>
  );
}

export default withRouter(App);
