import React from "react";
import logo from "./assets/footer.png";
import paypal from "./assets/paypal.png";
import masterCard from "./assets/mastercard.png";

import "bootstrap/dist/css/bootstrap.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>
        <div className="contact">
          <div className="contact-row">
            <h4> Discover</h4>
            <h4> Shop</h4>
            <h4> Info</h4>
            <h4> Keep In Touch</h4>
            <h4> Newsletter Signup</h4>
          </div>
          <div className="contact-row">
            <p> Our Story</p>
            <p> Our Story</p>
            <p> Our Story</p>
            <span className="social">
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faFacebook} />
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faYoutube} />
            </span>
            <div>
              <span className="contact-form">
                <input placeholder="Email" />
                <button> SUBMIT</button>
              </span>
            </div>
            {/* <p> Our Story form</p> */}
          </div>
          <div className="contact-row">
            <p> Discover</p>
            <p> Our Story</p>
            <p> Our Story</p>
            <p> </p>
            <p> </p>
          </div>
          <div className="contact-row">
            <p> Our Story</p>
            <p> Our Story</p>
            <p> Our Story</p>
            <p> </p>
          </div>
          <div className="contact-row">
            <p> </p>
            <p> Discover</p>
            <p> Our Story</p>
            <p> </p>
            <p> </p>
            <p> </p>
          </div>
        </div>

        <div className="copyright">
          <div className="copyright-row">
            <p>Copyright © 2019 Pilli Ami</p>
            <div className="payments">
              <img src={masterCard} />
              <img src={paypal} />
              <img src={masterCard} />
              <img src={paypal} />
              <img src={masterCard} />
              <img src={paypal} />
              <img src={masterCard} />
              <img src={paypal} />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
