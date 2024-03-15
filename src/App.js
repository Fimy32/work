import logo from './logo.svg';
import './App.css';
import './Styles.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Games from "./pages/Games";
import Achievements from "./pages/Achievements";
import Planner from "./pages/Planner";

function App() {
    return (
        
        <body className='Dark_Mode'>
            <Router>
            <Navbar />
            <Switch>
                    <Route path='/' exact component={Homepage} />
                    <Route path='/Games' exact component={Games} />
                    <Route path='/Achievements' exact component={Achievements} />
                    <Route path='/Planner' exact component={Planner} />
            </Switch>
        </Router>

          <p> Hello Rahul Bagga </p>

    </body>
  );
}

export default App;
