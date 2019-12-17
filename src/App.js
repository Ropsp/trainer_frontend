import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Customerlist from './components/customerlist';
import Traininglist from './components/traininglist';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div className="App">
      <AppBar position= "static">
        <ToolBar>
          <Typography variant="h3">
              trainers.com
          </Typography>
        </ToolBar>
      </AppBar>
     <BrowserRouter>
     <div>
        <Link to="/">Customers</Link> {' '}
        <Link to="/trainings">Trainings</Link> {' '}

        <Switch>
        <Route exact path= "/" component={Customerlist} />
          <Route path="/trainings" component={Traininglist}/>
          <Route render= {() => <h1>Page not found</h1>}/>
        </Switch>
          
     </div>
     </BrowserRouter>
    </div>
  );
}

export default App;
