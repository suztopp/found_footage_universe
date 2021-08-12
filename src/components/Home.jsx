import React from 'react';
import blairwitch from '../images/foundfootage-blairwitch.jpg';
import './styling/Home.css';

export default function Home() {


    return (
        <div>
            <br></br>
            <br></br>
            <h1>Welcome to the Dark Side</h1>
            <br></br>
            <img src={blairwitch} className="blairwitch" alt="blair witch pic" />
        </div>
    )

};