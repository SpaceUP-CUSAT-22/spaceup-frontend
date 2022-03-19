import Main from "./Main.js";
import bgimage from "./Assets/home-bg.jpg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/login";


/* --------------------------------------------------
  Import Components in the Main.js file 
  ---------------------------------------------------*/

function App() {
  return (
    <>
      <div className="bg-home">
        <img src={bgimage} alt="" />
      </div>
      <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            {/* <Route component={Error}/> */}
        </Switch>
      </Router>

    </>
  );
}

export default App;
