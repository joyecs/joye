import './App.css';
import TopNav from './components/TopNav/topnav';
import Home from './pages/home';
import Education from './pages/education';
import Experience from './pages/experience';
import Portfolio from './pages/porfolio';
import Detail from './components/duties';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import './components/style.css';
import {BrowserRouter as Router,Route} from 'react-router-dom';


library.add(faCoffee);

function App() {
  return (
    // <div>Hi</div>
    <Router>
    <div className="App">
    <TopNav />
    <Route exact path='/' component={Home} />
    <Route exact path='/education' component={Education} />
    <Route exact path='/experience' component={Experience} />
    <Route exact path='/portfolio' component={Portfolio} />
    <Route path="/detail/:name" component={Detail}></Route>
    </div>
    </Router>
  );
}

export default App;
