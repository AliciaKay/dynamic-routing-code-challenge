import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Routes from './components/Routes'
import Generic from './components/Generic';


function App() {
  return (
      <Router>
      <div className="App">
        <React.Fragment>
          <Routes />
        </React.Fragment>
        <Switch>
          <Route path={["/books", "/bios"]} component={Generic} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App;
