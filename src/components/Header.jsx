import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as images from "../assets/images";
import Hamburger from "./Hamburger";

function Header(){
    const [open, setOpen] = useState(false);

    const openMenu = () => setOpen(true);
    const closeMenu = () => setOpen(false);

    return(
        <header>
            <div className="header-wrap">
                <h1 className="header-logo">
                    <Link to="/">
                        <img src={images.headerLogo} alt="h-logo" />
                    </Link>
                </h1>
                <nav>
                    <Link to="/about">ABOUT EMET</Link>
                    <Link to="/artists">ARTISTS</Link>
                    <Link to="/label">LABEL</Link>
                    <Link to="/news">NEWS</Link>
                    <div className="header-navi">
                        <button onClick={openMenu}>
                            <img src={images.headerNavi} alt="h-Navigator" />
                        </button>
                    </div>
                </nav>
            </div>
            <Hamburger open={open} closeMenu={closeMenu} />
        </header>
    );
}

export default Header;