import './App.css';
import React, { useEffect, useContext ,useState} from 'react'
import { Home } from './components/pages/home/home';
import { OperatorControls } from './components/pages/operator-controls/operator-controls';
import Navbar from './components/shared/navbar';
import {BrowserRouter as Router ,Switch, Route ,Routes} from 'react-router-dom';

function App() {

  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/" ><Home count={count1} setCount={setCount1}/></Route>
        <Route exact path="/operator-controls" ><OperatorControls count={count2} setCount={setCount2}/></Route>
        </Switch>
      </div>
    </Router>
   
  );
}

export default App;
