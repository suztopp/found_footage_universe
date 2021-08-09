import React from 'react';
import blairwitch from '../images/foundfootage-blairwitch.jpg';
import './styling/Home.css';

export default function Home() {


    return (
        <div>
            <h1>Welcome to the Dark Side</h1>
            <img src={blairwitch} className="blairwitch"/>
        </div>
    )

};