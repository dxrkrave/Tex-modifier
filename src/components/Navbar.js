import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Alert from './Alert';
import { Link } from "react-router-dom";

export function Navbar(props) {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState("")
  const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert("")
    },1500);
  }
  useEffect(() => {
    const body = document.querySelector('body');
    if (darkMode) {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
      showAlert("Dark Mode has been Enabled", "Success !");
      document.title=" Text Modifier - Dark Mode";
      // setInterval(() => {
      //   document.title=" Text Modifier is Amazing "
      // }, 2000);
      // setInterval(() => {
      //   document.title=" Install Text Modifier "
      // }, 1500);
    } else {
      body.classList.add('light-mode');
      body.classList.remove('dark-mode');
      showAlert("Light Mode has been Enabled", "Success !");
      document.title=" Text Modifier - Light Mode";
    }
  }, [darkMode]);
  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary`}>
        <div className="container-fluid ">
          <Link className="navbar-brand textWhite" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
              <li className="nav-item">
                <Link className="nav-link textWhite" to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link textWhite" to="/">Buy</Link>
              </li>
            </ul>
            <div className={`form-check form-switch`}>
              <input className="form-check-input" onClick={() => setDarkMode(!darkMode)} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label " htmlFor="flexSwitchCheckDefault"> Enable Dark Mode </label>
            </div>
          </div>
        </div>
      </nav>
      <Alert  alert={alert}/>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutcart: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Set Cart Here",
  aboutcart: "About cart",
};





