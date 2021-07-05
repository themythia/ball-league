import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <div className='nav-left'>
        <Link to='/'>HOME</Link>
      </div>
      <div className='nav-right'>
        <Link to='/players'>PLAYERS</Link>
        <Link to='/teams'>TEAMS</Link>
      </div>
    </nav>
  );
};
export default Nav;
