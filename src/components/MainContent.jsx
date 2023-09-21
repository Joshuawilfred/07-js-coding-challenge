// eslint-disable-next-line no-unused-vars
import React from "react";

function MainContent() {
  return (
    <main>
      <div className="card-show">
        <div className="card">
          <a href="/series">
            <div>
              <h2>Series</h2>
            </div>
          </a>
          <span>Popular Series</span>
        </div>
        <div className="card">
          <a href="/movies">
            <div>
              <h2>Movies</h2>
            </div>
          </a>
          <span>Popular Movies</span>
        </div>
      </div>
    </main>
  );
}

export default MainContent;
