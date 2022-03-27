import Main from "./Main.js";
import bgimage from "./Assets/earth.png";
import shoot from "./Assets/shoot.png";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Login/login";
import Signup from "./Components/Login/signup";
import Reg from "./Components/Registration/reg"
import Fullteam from "./Components/Team/Fullteam.js";
import SHome from "./Components/SSS/home";
// import SEvent from "./Components/SSS/event";
// import SAbout from "./Components/SSS/about";
// import SFooter from "./Components/SSS/footer";
// import SGallery from "./Components/SSS/gallery";
import SNav from "./Components/Navbar/Navbar";

/* --------------------------------------------------
  Import Components in the Main.js file 
  ---------------------------------------------------*/

function App() {
const Background = ({ children }) => {
  return (
    <>
      <div className="bg-home">
        <img src={bgimage} alt="" />
      </div>

      <span className="shoot-star star-1">
        <img src={shoot} alt="" />
      </span>

      <span className="shoot-star star-3">
        <img src={shoot} alt="" />
      </span>

        {children}
    </>
  );
};

const SSS = () => {
  return (
    <div>
      <SNav />
      <SHome />
      {/* <SAbout /> */}
      {/* <SEvent /> */}
      {/* <SGallery /> */}
      {/* <SFooter /> */}
    </div>
  );
}



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/sss" component={SSS} />
        <Background>
          <Route exact path="/" component={Main} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/reg" component={Reg} />
          <Route path="/team" component={Fullteam} />
        </Background>
        {/* <Route component={Error}/> */}
      </Switch>
    </Router>
  );
}

export default App;
