import React from "react";
import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { artists } from "../data/crews";
import * as images from "../assets/images";
import "./ArtistsDetail.css";

function ArtistsDetail(){
    const { id } = useParams();
    const artist = artists.find(a => String(a.id) === id);
        if (!artist) return <div>데이터 없음</div>;
    
    const [current, setCurrent] = useState(0);

    const videoRef = useRef(null);

    const preNation = () => {
        videoRef.current.scrollBy({
            left: -300,
            behavior: "smooth"
        });
    };

    const nextNation = () => {
        videoRef.current.scrollBy({
            left: 300,
            behavior: "smooth"
        });
    };
    
    return (
        <section className="artistdetail">
            <div className="detail">
                <div className="detail-left">
                    <div className="img-box">
                        <img className="img1" src={artist.images[0]} alt={artist.name} />
                        <img className="img2" src={artist.images[1]} alt={artist.name} />
                    </div>
                </div>
                <div className="detail-right">
                    <span className="badge">{artist.badge}</span>
                    <h1 className="name">{artist.name}</h1>
                    <div className="info">
                        {artist.birth && (
                            <div>
                                <p className="label">birth</p>
                                <p>{artist.birth}</p>
                            </div>
                        )}
                        {artist.height && (
                            <div>
                                <p className="label">height</p>
                                <p>{artist.height}</p>
                            </div>
                        )}
                        {artist.crew && (
                            <div>
                                <p className="label">crew</p>
                                <p>{artist.crew}</p>
                            </div>
                        )}
                    </div>
                    <a href={artist.insta} target="_blank">
                        <img src={images.instaIcon} alt="insta" />
                    </a>
                </div>
            </div>
            <div className="videos">
                <div className="video-tit">
                    <div className="badge-tag">
                        <p className="badge-category">
                            {artist.badge} <br />
                            {artist.index}
                        </p>
                    </div>
                    {artist.videos.length > 1 && (
                        <div className="pagenation">
                            <div onClick={preNation}>
                                <img src={images.preBtn} alt="prebtn" />
                            </div>
                            <div onClick={nextNation}>
                                <img src={images.nextBtn} alt="nextbtn" />
                            </div>
                        </div>
                    )}
                </div>
                <div className="video-cont" ref={videoRef}>
                    {artist.videos.map((video, i) => (
                        <iframe
                            key={i}
                            src={video.url}
                            className={video.type === "short" ? "shorts" : "normal"}
                        />
                    ))}
                </div>
            </div>
        </section>
        
    );
}

export default ArtistsDetail;