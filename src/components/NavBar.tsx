import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import { images } from "../constants/images";

import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <img src={images.gericht} alt="restaurant logo" />
        </div>
      </nav>
      Navbar
    </>
  );
};
