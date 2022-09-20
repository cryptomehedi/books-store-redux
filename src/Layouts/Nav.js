import React from 'react';
import { NavLink } from 'react-router-dom';


const Nav = () => {
    return (
        <nav>
            <NavLink to="/home" className={({ isActive }) => isActive ? "nav-link" : "nav-link-o" } > Home </NavLink>
            <NavLink to="/show-books" className={({ isActive }) => isActive ? "nav-link" : "nav-link-o" } > Show Books</NavLink>
            <NavLink to="/add-book" className={({ isActive }) => isActive ? "nav-link" : "nav-link-o" } > Add Book </NavLink>
        </nav>
    );
};

export default Nav;