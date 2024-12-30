import React from 'react';
import { Link } from 'react-router-dom';

export default function YourHome() {
  return (
    <div>
      <Link to="/addhome">
        <p id="home-text">Add Your Home</p>
      </Link>
    </div>
  );
}
