import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home';
import Nomatch from './components/NoMatch/Nomatch';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/league/:leagueId">
          <LeagueDetail></LeagueDetail>
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*">
          <Nomatch></Nomatch>
        </Route>
      </Switch>

    </Router>
  );
}

export default App;
