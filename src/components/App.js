import * as React from 'react';
import Nav from './Nav';
import Home from './Home';
import Players from './Players';
import Teams from './Teams';
import FourOhFour from './FourOhFour';
import TeamPage from './TeamPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/players'>
            <Players />
          </Route>
          <Route path='/teams'>
            <Teams />
          </Route>
          <Route path='/:teamId' exact>
            <TeamPage />
          </Route>
          <Route path='*'>
            <FourOhFour />
          </Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
};
export default App;
