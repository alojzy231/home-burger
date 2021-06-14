import './styles/app.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Background from './Background'
import Navigation from './Navbar';
import Home from './sections/Home';
import Menu from './sections/Menu/Menu';

function App(props) {
  return (
    <div className="app">
      <Router>
        <Navigation />
        <Background />
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/menu" component={Menu} />
            
            <Route path="/">
              <Redirect to="/home" />
            </Route>
        </Switch>
      </Router>
      

      
    </div>
  );
}

export default App;
