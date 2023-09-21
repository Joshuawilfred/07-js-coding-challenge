// import React from 'react';
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SeriesList from "./components/SeriesList";
import MoviesList from "./components/MoviesList";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import "./style.css";

function App() {
  const [jsonData, setJsonData] = useState({ entries: [] }); // Initialize jsonData with an empty entries array

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.entries)) {
          setJsonData(data);
        } else {
          throw new Error("Invalid data format");
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const seriesData = Array.isArray(jsonData.entries)
    ? jsonData.entries.filter((item) => item.programType === "series")
    : [];
  const moviesData = jsonData.entries.filter(
    (item) => item.programType === "movie"
  );

  return (
    <>
      <ErrorBoundary>
        <Router>
          <Header />
          <Routes>
            <Route
              path="/series"
              element={<SeriesList seriesData={seriesData} />}
            />
            <Route
              path="/movies"
              element={<MoviesList moviesData={moviesData} />}
            />
            <Route path="/" element={<MainContent />} />
          </Routes>

          <Footer />
        </Router>
      </ErrorBoundary>
    </>
  );
}

export default App;
