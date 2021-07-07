import * as React from 'react';
import Nav from './Nav';
import Loading from './Loading';
import FourOhFour from './FourOhFour';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./Home'));
const Players = React.lazy(() => import('./Players'));
const Teams = React.lazy(() => import('./Teams'));
const TeamPage = React.lazy(() => import('./TeamPage'));
const Articles = React.lazy(() => import('./Articles'));

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Nav />
        <React.Suspense fallback={<Loading />}>
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
            <Route path='/:teamId/articles'>
              <Articles />
            </Route>
            <Route path='*'>
              <FourOhFour />
            </Route>
          </Switch>
        </React.Suspense>
      </Router>
    </React.Fragment>
  );
};
export default App;
