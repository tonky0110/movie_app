import React from 'react';
import PropTypes from 'prop-types';
//yarn add prop-types
import './Movie.css';

function Movie({title, poster}) {
    return (
        <div>
            <MoviePoster title = {title} poster = {poster} />
            <h1>{title}</h1>
        </div>
    );
}
Movie.propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

function MoviePoster({ poster }){
    return (
        <img src={poster} alt="Movie Poster" />
    );
};

MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
};

export default Movie;

