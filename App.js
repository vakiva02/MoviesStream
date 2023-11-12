//Main App, using JSX functional components, making it dynamic without the need to refresh the page
import React from "react";
import { useEffect, useState } from "react";

import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './search.svg';
// API Key: e329126d

const API_URL = 'http://www.omdbapi.com?apikey=e329126d';

const App = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => { //async because it takes time to fecth data
        const response = await fetch(`${API_URL}&s=${title}`);//API call
        const data = await response.json();//data retrieval

        setMovies(data.Search);//creates an array of the data for the searched movies
    }
    useEffect(() => {
        searchMovies('Batman');
    }, []);
    return (
        <div className="app">
            <h1>Movies+</h1>

            <div className="search">
                <input
                    placeholder="Search for movies"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}//e is the event of the change from the callback function
                />
                <img
                    src={SearchIcon}
                    alt="search"//tag for the icon
                    onClick={() => searchMovies(searchTerm)}
                />

            </div>

            {movies?.length > 0 ? ( //Checks if there's movies in the API for the input Title
                <div className="container">
                    {movies.map((movie) => (
                    <MovieCard movie={movie} />
                    ))}
                </div>
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )
            }
            
        </div>
    );
}

export default App;
