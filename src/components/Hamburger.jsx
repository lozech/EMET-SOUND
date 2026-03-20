import React from "react";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import * as images from "../assets/images";

function Hamburger({ open, closeMenu }){
        const [openedOnce, setOpenedOnce] = useState(false);
        
        useEffect(() => {
            if (open) {
            setOpenedOnce(true);
            }
        }, [open]);

    return(
        <section>
            <div className={`ham-wrap ${ open ? "open" : openedOnce ? "close" : ""}`}>
                <div className="nav-btn" onClick={closeMenu}>
                    <img src={images.navBtn} alt="nav-btn" />
                </div>
                <div className="ham-menu">
                    <p><Link to="/about" onClick={closeMenu}>ABOUT EMET</Link></p>
                    <p><Link to="/artists" onClick={closeMenu}>ARTISTS</Link></p>
                    <p><Link to="/label" onClick={closeMenu}>LABEL</Link></p>
                    <p><Link to="/news" onClick={closeMenu}>NEWS</Link></p>
                </div>
            </div>
        </section>
    );
};

export default Hamburger;