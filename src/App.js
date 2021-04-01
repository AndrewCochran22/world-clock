import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import TimeZone from './pages/TimeZone';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>World Clock</h1>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/timezones" exact>
            <TimeZone />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
