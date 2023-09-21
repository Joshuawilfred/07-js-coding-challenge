// eslint-disable-next-line no-unused-vars
import React from "react";

function Header() {
  return (
    <>
      <div className="headerBar">
        <div className="header-title">
          <a href="/">
            <h1>NEXT Streaming</h1>
          </a>
        </div>
        <div className="header-buttons">
          <button className="login">Login</button>
          <button className="sign-up">Start your free trial</button>
        </div>
      </div>
    </>
  );
}

export default Header;
