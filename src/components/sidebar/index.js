import React from 'react';
import './sidebar.css';
import {Link} from 'react-router-dom';

export const SideBar = (props) => {
  return (<div className="App-sidebar">
    <nav className="App-sidebar-nav">
      <ul>
        <Link to="/">
          <li>Product list</li>
        </Link>
        <Link to="/cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  </div>);
};

export default SideBar;