import React from "react";
import { useState, useEffect } from "react";
import { artists } from "../data/crews";
import gsap from "gsap";
import ArtistCard from "../components/ArtistCard";

import "../pages/Artists.css";

function Artists(){
    const [activeTab, setActiveTab] = useState("Dancer");
    const order = ["Dancer", "Actor", "Producer"];

    useEffect(() => {
        gsap.set(".artist-card", { opacity: 0, y: 150 });

        gsap.to(".artist-card", {
            opacity: 1,
            y: 0,
            duration: 1.2,
            stagger: 0.12,
            ease: "power4.out"
        });
    }, [activeTab]);

    return(
        <section className="artists-main">
            <div className="artists-wrap">
                <div className="artist-txt">
                    <h1>Artists</h1>
                    <ul className="job">
                        <li 
                            className={activeTab === "Dancer" ? "active" : ""}
                            onClick={() => setActiveTab("Dancer")}
                        >
                            Dancer
                        </li>
                        <li 
                            className={activeTab === "Actor" ? "active" : ""}
                            onClick={() => setActiveTab("Actor")}
                        >
                            Actor
                        </li>
                        <li 
                            className={activeTab === "Producer" ? "active" : ""}
                            onClick={() => setActiveTab("Producer")}
                        >
                            Producer
                        </li>
                    </ul>
                </div>

                <ul className="artists-cards">
                {artists
                    .filter((artist) => artist.badge === activeTab)
                    .map((artist) => (
                    <ArtistCard key={artist.id} artist={artist} />
                    ))}
                </ul>
            </div>
            
        </section>
    );
}

export default Artists;