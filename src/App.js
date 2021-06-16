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
import About from './sections/About';
import Menu from './sections/Menu/Menu';
import Modal from './sections/Menu/Modal';

function App(props) {
  return (
    <div className="app">
      <Router>
        <Modal />
        <Navigation />
        <Background />
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/menu" component={Menu} />
            <Route path="/about" component={About} />
            
            <Route path="/">
              <Redirect to="/home" />
            </Route>
        </Switch>
      </Router>
      

      
    </div>
  );
}

export default App;
