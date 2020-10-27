import React, { useState } from 'react';
import './style.css';

function Header(props) {
    const [stt, setstt] = useState(false);
    const onHandleClick =()=>{
        setstt(true)
    }
    const onHandleClose =()=>{
        setstt(false)
    }
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="logo">
                            <a href="#">T</a>
                        </div>
                        <div className="hamburger-btn" onClick={onHandleClick}>
                            <span></span>
                        </div>
                    </div>
                </div>
            </header>

            <nav className={stt?"nav-menu":"nav-menu onclose"}>
                <div className="close-nav-menu" onClick={onHandleClose}>&times;</div>
                <div className="nav-menu-inner">
                    <ul>
                        <li><a href="#" className="outer-shadow">Home</a></li>
                        <li><a href="#" className="outer-shadow">About</a></li>
                        <li><a href="#" className="outer-shadow">Services</a></li>
                        <li><a href="#" className="outer-shadow">Portfolio</a></li>
                        <li><a href="#" className="outer-shadow">Contact</a></li>
                    </ul>
                </div>

                <p className="copyright-text">&copy; 2020 Thang Pham</p>
            </nav>
        </div>
    );
}

export default Header;