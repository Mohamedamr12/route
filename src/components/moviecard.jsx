import React from 'react';

const MovieCard = ({ title, description, posterURL, rating }) => {
  return (
    <Link to={`/movie/${id}`} className="movie-card-link">
    <div className="movie-card">
      <img src={posterURL} alt={title} />
      <div className="movie-info">
        <h2>{title}</h2>
        <p>{description}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
    </Link>
  );
};

export default MovieCard;
