import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FaUserPlus } from 'react-icons/fa'

import logo from '../logo.png'

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <a className="navbar-brand" href="#">Navbar</a> */}
            <img src={logo} alter="navbar logo" style={{height:"70px", width:"70px"}} />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <NavLink>
                            <a className="nav-link" exact to="/">Home <span className="sr-only">(current)</span></a>
                        </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink>
                            <a className="nav-link" exact to="/customer">Customer</a>
                        </NavLink>
                    </li>
                    <li className="nav-item active">
                        <NavLink>
                            <a className="nav-link" exact to="/add-customer">Add Customer</a>
                        </NavLink>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>     

        );
    }
}

const NavbarWrapper = styled.nav`
    background: var(--mainBlue);
`;

export default Navbar;