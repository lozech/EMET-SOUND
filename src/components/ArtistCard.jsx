import React from "react";
import { Link } from "react-router-dom";
import * as images from "../assets/images";
import "./ArtistCard.css";

function ArtistCard({ artist }){
    return(
        <li className="artist-card">
            <Link to = {`/artists/${artist.id}`}>
                <div className="img-wrap">
                    <img src={artist.images[0]} alt="img1" className="img1" />
                    <img src={artist.images[1]} alt="img2" className="img2" />
                </div>

                <div className="profile">
                    <p>{artist.name}</p>
                </div>
            </Link>
            <a href={artist.insta} target="_blank" rel="noopener noreferrer"
                className="insta-link">
                <img src={images.instaIcon} alt="insta" className="insta-icon"/>
            </a>
        </li>
    );
}

export default ArtistCard;