import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../assets/logo-no-background.png";
import { categories } from "../../Data";
import { MdClose, MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";
//toogle true means
const Navbar = () => {
  const [toogle, setToogle] = useState(false);

  return (
    <>
      <div className="navbar_container">
        <Link to="/" className="navbar_logo">
          <img src={logo} alt="" />
        </Link>
        <div className="navbar_links">
          <div className="links-sub_1">
            {categories.map((category) => (
              <Link className="link" to={`/?cat=${category.link}`}>
                {category.name}
              </Link>
            ))}
          </div>
          <div className="links-sub_2">
            <Link className="loginLink" to="/login">
              Login
            </Link>
            <Link className="write-container loginLink" to="/write">
              Write
            </Link>
            {toogle ? (
              <MdClose
                className="toogle"
                style={{
                  zIndex: 15,
                  position: "relative",
                  backgroundColor: "rgba(0, 0,0,0,)",
                }}
                size={32}
                onClick={() => setToogle((init) => !init)}
              />
            ) : (
              <MdMenu
                style={{ zIndex: 15, position: "relative" }}
                size={32}
                className="toogle"
                onClick={() => setToogle((init) => !init)}
              />
            )}
          </div>
        </div>
        {
          //menu for mobile and some tablet screens
          toogle && (
            <div className="mobile-menu">
              <div className="menu">
                {categories.map((category) => (
                  <Link
                    className="link"
                    to={`/?cat=${category.link}`}
                    onClick={() => setToogle((init) => !init)}
                  >
                    {category.name}
                  </Link>
                ))}
                {
                  <div className="menu-Links">
                    <Link className="loginLink" to="/login">
                      Login
                    </Link>
                    <div className="write-container loginLink">
                      <Link to="/write">Write</Link>
                    </div>
                  </div>
                }
              </div>
            </div>
          )
        }
      </div>
    </>
  );
};

export default Navbar;
