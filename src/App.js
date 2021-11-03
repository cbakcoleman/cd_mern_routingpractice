import './App.css';
import {Link} from 'react-router-dom';
// IMPORT LINK FROM REACT ROUTER DOM
// SEE INDEX.JS FOR BROWSER ROUTER

function App() {
  return (
    <div className="App">
      {/* PUT COMPONENT IN ROUTE W/IN SWITCH SO
      ONLY SHOWS WHEN PATH USED, IF OUTSIDE THEN
      COMPONENT IS ALWAYS SHOWN.*/}
      <switch>
        <Route path='/home'>
          <Home/>
        </Route>
      </switch>
    </div>
  );
}

export default App;
