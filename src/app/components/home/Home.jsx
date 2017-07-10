import React from 'react';
import { Link } from 'react-router';

function Home() {
  return (
    <div className="container home">
    <img className="logo" src="/static/images/animals_logo.png" />
    <h1>Pairs online game</h1>
    	<Link to="/game" className="start-button">Start game</Link>
    </div>
  )
}

export default Home;
