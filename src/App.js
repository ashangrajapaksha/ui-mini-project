import './App.css';
import { Home } from './components/pages/home/home';
import { OperatorControls } from './components/pages/operator-controls/operator-controls';
import Navbar from './components/shared/navbar';
import {BrowserRouter as Router ,Switch, Route ,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
        <Route exact path="/" ><Home/></Route>
        <Route exact path="/operator-controls" ><OperatorControls/></Route>
        </Switch>
        <Navbar/>
      </div>
    </Router>
   
  );
}

export default App;
