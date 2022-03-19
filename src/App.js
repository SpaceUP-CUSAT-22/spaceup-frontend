import Main from "./Main.js";
import bgimage from "./Assets/earth.png";
import shoot from "./Assets/shoot.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/login";
import Signup from "./Components/Login/signup";
import Reg from "./Components/Registration/reg"

/* --------------------------------------------------
  Import Components in the Main.js file 
  ---------------------------------------------------*/

function App() {
  return (
    <>
      
      <div className="bg-home">
        <img src={bgimage} alt="" />
        
      </div>
      <span className="shoot-star star-1">
        <img src={shoot} alt="" />
      </span>

      <span className="shoot-star star-2">
        <img src={shoot} alt="" />
      </span>

      <span className="shoot-star star-3">
        <img src={shoot} alt="" />
      </span>

      <Router>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/reg" component={Reg} />
          {/* <Route component={Error}/> */}
        </Switch>
      </Router>
    </>
  );
}

export default App;
