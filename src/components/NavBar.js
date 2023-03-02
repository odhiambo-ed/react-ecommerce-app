import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { signIn } from '../features/slices/authSlice';

const NavBar = () => {
    const dispatch = useDispatch();
    const login = () => {
        dispatch(signIn());
    };
    return (
        <div className="main_nav_container">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-right">
                        <div className="logo_container">
                            <Link to="/fashion-cube">
                                Edward's<span>Shop</span>
                            </Link>
                        </div>
                        <nav className="navbar">
                            <ul className="navbar_menu">
                                <li>
                                    <Link to="/home">home</Link>
                                </li>

                                <li>
                                    <a href="contact.html">contact</a>
                                </li>
                            </ul>
                            <ul className="navbar_user">
                                <li>
                                    <a href="#">
                                        <i className="fa fa-search" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={login}>
                                        <i className="fa fa-user" aria-hidden="true"></i>
                                    </a>
                                </li>
                                <li className="checkout">
                                    <a href="#" onClick={login}>
                                        <i className="fas fa-shopping-bag"></i>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
