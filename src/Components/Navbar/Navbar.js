import "./Navbar.css";

import logo from "../../Assets/space_up-logo.png";

const Navbar = () => {
  const navItems = ["Home", "About", "SSS", "Events", "Milestone", "Team", "Speakers", "Gallery"];

  return (
    <>
      <header id="header" className="d-flex align-items-center ">
        <div className="container-fluid container-xxl d-flex align-items-center">

          <div id="logo" className="me-auto">
            <a href="index.html" className="scrollto"><img src={logo} alt="" /></a>
          </div>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              {navItems.map((item, index) => (
                <li className="dropdown">
                  <a className="nav-link scrollto" href="">{item}</a>
                  <DropDown index={index}/>
                </li>
              ))}
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

const DropDown = ({index}) => {
  const dropItems = ["drop1", "drop2", "drop3", "drop4"];
  
  if(index === 3) {
    return (
    <>
      <ul>
        {dropItems.map((item) => (
          <li><a href="#">{item}</a></li>
        ))}
      </ul>
      
    </>
  ); 
 }
 else {
   return null;
 }
}