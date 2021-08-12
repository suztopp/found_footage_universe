import React from 'react';

export default function AlphabeticalMovies() {

    const titleStyle = {
        textAlign: "center",
        color: "black"
    }

    const movies = [
        {id: 0, title: "Avengers: 1", overview: "This is my pretend overview for this movie 1"},
        {id: 1, title: "Avengers: 2", overview: "This is my pretend overview for this movie 2"},
        {id: 2, title: "Avengers: 3", overview: "This is my pretend overview for this movie 3"},
        {id: 3, title: "Avengers: 4", overview: "This is my pretend overview for this movie 4"},
        {id: 4, title: "Avengers: 5", overview: "This is my pretend overview for this movie 5"}
    ]

    return(
        <div>
        <br></br>
        <br></br>
        <h1 className={titleStyle}>ALPHABETICAL MOVIES PAGE</h1>

        <input style={{
            fontSize: 24,
            display: 'block',
            width: '99%',
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
        }} placeholder="Search For Movies Here" />

        <div className="movies-list">
            {movies.map ((movie) => (
                <div key={movie.id}>
                <p>MOVIE ID: {movie.id}</p>
                <p>MOVIE TITLE: {movie.title}</p>
                <p>MOVIE OVERVIEW: {movie.overview}</p>
                </div>
            ))}

        </div>

        </div>
    )

}