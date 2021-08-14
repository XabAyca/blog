import React from 'react';
import { NavLink } from 'react-router-dom';
import ModeBtn from './ModeBtn';

const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" className="title" activeClassName="title-active">My Super Blog</NavLink>
      <ModeBtn/>
    </div>
  );
};

export default Navbar;