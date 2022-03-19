import "./Navbar.css";
import {useState} from 'react';
import logo from "../../Assets/logo.png";

const Navbar = () => {
  const [drop, setDrop] = useState(true);

  

  return (
    <>
      <header id="header" className="d-flex align-items-center ">
        <div className="container-fluid container-xxl d-flex align-items-center">

          <div id="logo" className="me-auto">
            <a href="index.html" className="scrollto"><img src={logo} alt=""/></a>
          </div>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
              <li><a className="nav-link scrollto" href="#about">About</a></li>
              <li><a className="nav-link scrollto" href="#speakers">Speakers</a></li>
              <li><a className="nav-link scrollto" href="#schedule">Schedule</a></li>
              <li><a className="nav-link scrollto" href="#venue">Venue</a></li>
              <li><a className="nav-link scrollto" href="#hotels">Hotels</a></li>
              <li><a className="nav-link scrollto" href="#gallery">Gallery</a></li>
              <li><a className="nav-link scrollto" href="#supporters">Sponsors</a></li>
              <li className="dropdown" id="event"><a href="#"><span>Event</span> <i className="bi bi-chevron-down"></i></a>
              
          <ul>
         
            <li><a href="#">Drop Down 1</a></li>
            <li className="dropdown"><a href="#"><span>Deep Drop Down</span> <i className="bi bi-chevron-right"></i></a>
              <ul>
                <li><a href="#">Deep Drop Down 1</a></li>
                <li><a href="#">Deep Drop Down 2</a></li>
                <li><a href="#">Deep Drop Down 3</a></li>
                <li><a href="#">Deep Drop Down 4</a></li>
                <li><a href="#">Deep Drop Down 5</a></li>
              </ul>
            </li>
            <li><a href="#">Drop Down 2</a></li>
            <li><a href="#">Drop Down 3</a></li>
            <li><a href="#">Drop Down 4</a></li>
          </ul>
        </li> 
              <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
            </ul>
            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>
          <a className="buy-tickets scrollto" href="#buy-tickets">Buy Tickets</a>

        </div>
      </header>
    </>
  );
}

export default Navbar;

const DropDown = () => {
  return (
    <>
    hellooo
    </>
  );
}