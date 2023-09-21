// eslint-disable-next-line no-unused-vars
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ul className="footer-menu">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="#">Terms and Conditions</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="footer-menu">
              <li>
                <a href="#">Collection Statement</a>
              </li>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Manage Account</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <ul className="footer-social">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="iconify"
                    src="src/assets/social/facebook-white.svg"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="iconify"
                    src="src/assets/social/instagram-white.svg"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="iconify"
                    src="src/assets/social/twitter-white.svg"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <p className="copyright">
              Copyright © 2023 DEMO Streaming All Rights Reserved.
            </p>
            <div className="app-store-links">
              <a href="#">
                <img src="src/assets/store/app-store.svg" alt="App Store" />
              </a>
              <a href="#">
                <img src="src/assets/store/play-store.svg" alt="Google Play" />
              </a>
              <a href="#">
                <img
                  src="src/assets/store/windows-store.svg"
                  alt="Microsoft Store"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
