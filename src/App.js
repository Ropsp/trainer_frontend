import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import Customerlist from './components/customerlist';
import Traininglist from './components/traininglist';
import Navigator from './components/navigator'
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Calendar from './components/calendar';

function App() {
  return (
    <div className="App">
      <AppBar position= "static">
        
          <Typography variant="h3">
              Trainers.com
          </Typography>
        
      </AppBar>
     <BrowserRouter>
     <Navigator />
    

        <Switch>
        <Route exact path= "/" component={Customerlist} />
        <Route path="/customerlist" component={Customerlist}></Route>
          <Route path="/trainings" component={Traininglist}/>
          <Route path="/calendar" component={Calendar}/>
          <Route render= {() => <h1>Page not found</h1>}/>
        </Switch>
          
     
     </BrowserRouter>
    </div>
  );
}

export default App;
