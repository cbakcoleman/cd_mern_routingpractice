import './App.css';
import {Link, Route, Switch} from 'react-router-dom';
// IMPORT LINK FROM REACT ROUTER DOM
// SEE INDEX.JS FOR BROWSER ROUTER
import Home from './components/Home';
import Result from './components/Result';
import MultiResult from './components/MultiResult';

function App() {
  return (
    <div className="App">
      {/* PUT COMPONENT IN ROUTE W/IN SWITCH SO
      ONLY SHOWS WHEN PATH USED, IF OUTSIDE THEN
      COMPONENT IS ALWAYS SHOWN.*/}
      <switch>
        
        <Route path='/:input1/:input2/:input3'>
          <MultiResult/>
        </Route>

        <Route path='/home'>
          <Home/>
        </Route>

        {/* MAKE THIS EXACT, SO 1st INPUT FROM MULTIRESULT DOESN'T
        DISPLAY AGAIN*/}
        <Route exact path='/:input'>
          <Result/>
        </Route>

      </switch>
    </div>
  );
}

export default App;
