import "./Navbar.css";
import fb_icon from "../../Assets/fb-icon.png";
import instagram_icon from "../../Assets/instagram-icon.png";
import linkedin_icon from "../../Assets/linkedin-icon.png";
import logo from "../../Assets/space_up-logo.png";
import {useEffect, useState} from "react";
import {Link} from "react-scroll";

const Navbar = () => {
  const navItems = ["Home", "About", "SSS", "Events", "Milestone", "Team", "Speakers", "Gallery"];

  const [state, setState] = useState(true); 

  useEffect(() => { 
    window.addEventListener("scroll", () => {
        window.onscroll = function() {
            if (window.pageYOffset > 20) {
                setState(false);
            } else {
                setState(true);
            }
        };
    });

    }, []);
  return (
    <>
      <header id="header" className={(state) ? "d-flex align-items-center" : "d-flex align-items-center scrolled"}>
        <div className="nav-parent">

          <div id="logo" className="">
            <a href="/" className="scrollto">
              <img src={logo} className="" alt="" />
            </a>
          </div>

          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              {navItems.map((item, index) => (
                <li className="dropdown">
                  <Link className="nav-link scrollto" to={item.toLowerCase()}>{item}</Link>
                  <DropDown index={index}/>
                </li>
              ))}
            </ul>

            <i className="bi bi-list mobile-nav-toggle"></i>
          </nav>

          <div className="social-media">
            <img src={fb_icon} alt="fb_icon" />
            <img src={instagram_icon} alt="instagram_icon" />
            <img src={linkedin_icon} alt="linkedin_icon" />
            
          </div>
          
        </div>
      </header>
    </>
  );
}

export default Navbar;

const DropDown = ({index}) => {
  const dropItems = ["Event Chart", "Flagship Event"];
  
  if(index === 3) {
    return (
    <>
      <ul>
        {dropItems.map((item) => (
          <li><a href="/">{item}</a></li>
        ))}
      </ul>
      
    </>
  ); 
 }
 else {
   return null;
 }
}