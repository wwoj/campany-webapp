

import Navbar from './components/navbar';
import HomePage from './views/Home'
import {HashRouter,Switch,Route} from 'react-router-dom';
function App() {
  return (
    <HashRouter className="App">
      <header className="App-header">
        <Navbar/>
        asdad
      </header>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
 
    </HashRouter>
  );
}

export default App;
