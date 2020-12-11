import React, {useState} from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click)
    }

    return(
            <section className="navbar">
                <nav className="navbar-container">
                    <h1 className="menu-logo">HW</h1>
                    <div className="menu-icon" onClick={handleClick}>{click ? <FaTimes /> : <FaBars/>}</div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links">HOME</Link>
                        </li>
                        <li>
                            <Link to="/About" className="nav-links">ABOUT</Link>
                        </li>
                        <li>
                            <Link to="/Skills" className="nav-links">SKILLS</Link>
                        </li>
                    </ul>
                </nav>
            </section>
    )
}

export default Navbar