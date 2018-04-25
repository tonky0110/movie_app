import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    title: 'Matrix', 
    poster: "https://ia.media-imdb.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"
  },
  {
    title: 'Full Metal Jacket', 
    poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT27oi5sjwOuEDZf3FnwliIcv-OFiNwF8FjPtPI5XxpWIpafDnW"
  },
  {
    title: 'Oldboy', 
    poster: "https://upload.wikimedia.org/wikipedia/en/thumb/6/67/Oldboykoreanposter.jpg/220px-Oldboykoreanposter.jpg"
  },
  {
    title: 'Star Wars', 
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/250px-Star_Wars_Logo.svg.png"
  }
];

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount();
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate();
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => {
          return <Movie key={index} title={movie.title} poster={movie.poster} />
        })}
      </div>
    );
  }
}

export default App;