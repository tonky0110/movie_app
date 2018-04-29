import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount();
  // Update: componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate();

  state = {};
  
  componentDidMount() {
    this._getMovies();
  }
  
  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie);
      return <Movie key={movie.id} title={movie.title} poster={movie.large_cover_image} />
    });
    return movies;
  }

  // await : call api기능이 끝나기를 기다리는 것(not 성공적으로 수행)
  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  }

  //arrow fuctions에서 => return을 하지 않는다(자동으로 return)
  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App">
        {this.state.movies ? this._renderMovies() : 'Loading...'}
      </div>
    );
  }
}

export default App;