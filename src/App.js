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

function App(props) {
  return (
    <div className="app">
      <Router>
        <Background />
        <Navigation />
        <div className="container">
        <Switch>
            <Route path="/home" component={Home} />
            
            <Route path="/">
              <Redirect to="/home" />
            </Route>
        </Switch>
        </div>
        
          
      </Router>
      

      
    </div>
  );
}

export default App;
