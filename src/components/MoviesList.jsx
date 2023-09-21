import { useState } from "react";

function MoviesList({ moviesData }) {

  const filteredAndSortedData = moviesData
    .filter((item) => item.releaseYear >= 2010)
    .sort((a, b) => a.title.localeCompare(b.title));

  moviesData = filteredAndSortedData;

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 21;
  const totalPages = Math.ceil(moviesData.length / itemsPerPage);

  // Calculate the start and end indices for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, moviesData.length);

  // Get the items to display for the current page
  const itemsToShow = moviesData.slice(startIndex, endIndex);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="headerSec">
        <h2>Popular Movies</h2>
      </div>
      <div className="movie-cabinet">
        {itemsToShow.map((item) => (
          <div key={item.title} className="movie-card">
            <div className="movie-img">
              <img
                src={item.images["Poster Art"].url}
                alt={item.title}
                onError={(e) => {
                  e.target.alt = "Failed to load image :(";
                }}
              />
            </div>
            <span className="spawned">{item.title}</span>
          </div>
        ))}
      </div>
      <div className="actionbar">
        <span className="actionbar-info">
          Showing results {startIndex + 1}-{endIndex} out of {moviesData.length}
        </span>
        <div className="actionbar-buttons">
          {moviesData.length > itemsPerPage && currentPage > 1 && (
            <button className="prev-page" onClick={handlePrevPage}>
              Prev
            </button>
          )}
          {moviesData.length > itemsPerPage && currentPage < totalPages && (
            <button className="next-page" onClick={handleNextPage}>
              Next
            </button>
          )}
        </div>
      </div>
    </>
  );
}
export default MoviesList;
