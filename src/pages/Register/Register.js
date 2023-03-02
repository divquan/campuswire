import React from "react";
import "../Login/Login.scss";
import { Link } from "react-router-dom";
import image from "../../assets/logo-no-background.png";
const Register = () => {
  return (
    <div className="login_container-main">
      <div className="sidebar">
        <img src={image} alt="" />
      </div>
      <hr style={{ height: "100%", fill: "white", margin: 0 }} />
      <div className="sidebar2">
        <div className="login_container">
          <h1>Register</h1>
          <form>
            <input type="email" placeholder="email" />
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />
            <button>Register</button>
          </form>
          <span>This is an error messagge</span>
          <p>
            Already have an account?
            <br />
            <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
