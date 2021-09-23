import React from "react";
import "./header.scss";

export default function Header() {
    return (
        <div className="bg-dark text-white" data-testid='header'>
            <div className="header d-flex container justify-content-between align-items-center d-block">
                <div className="left_header">
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Logo
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                                className="btn dropdown-toggle nav_bar"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                All Jobs
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton" data-testid='dropdown_nav'>
                                <a className="dropdown-item" href="#">Jobs by Skill</a>
                                <a className="dropdown-item" href="#">Jobs by Title</a>
                                <a className="dropdown-item" href="#">Jobs by Company</a>
                                <a className="dropdown-item" href="#">Jobs by City</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <button
                                className="btn dropdown-toggle nav_bar"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                            >
                                IT Companies
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">VietNam Best IT Companies</a>
                                <a className="dropdown-item" href="#">Company Reviews</a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Blogs
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="right_header">
                    <ul className='nav'>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Sign In
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Employes
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}