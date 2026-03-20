import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import * as video from "../assets/videos";
import * as images from "../assets/images";

function Home(){
    useEffect(()=>{

        gsap.to(".main-txt p",{
            y:0,
            opacity:1,
            duration:1.2,
            ease:"power3.out",
            stagger:0.15,
            scrollTrigger:{
                trigger:".main-banner",
                start:"top 70%",
            }
        });
        gsap.fromTo(".text-fill span",
            {
                clipPath: "inset(0 100% 0 0)"
            },
            {
                clipPath: "inset(0 0% 0 0)",
                stagger: 0.1,
                ease:"none",
                scrollTrigger:{
                    trigger: ".sec2-txt",
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                }
            }
        );
        gsap.to(".sec3-txt p",{
            y:0,
            opacity:1,
            duration:1.2,
            ease:"power3.out",
            stagger:0.15,
            scrollTrigger:{
                trigger:".section3",
                start:"top 70%",
            }
        });
        gsap.to(".sec3-txt img",{
            scale:1,
            opacity:1,
            duration:1,
            stagger:0.1,
            ease:"power3.out",
            scrollTrigger:{
                trigger:".section3",
                start:"top 70%",
            }
        });
        gsap.fromTo(".photo-wrap li",
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                stagger: 0.2,
                scrollTrigger: {
                trigger: ".photo-wrap",
                start: "top 70%",
                }
        });

        setTimeout(()=>{

            const videos = document.querySelectorAll(".videos video");
            const indicators = document.querySelectorAll(".indigator span");

            if(videos.length === 0) return;

            let current = 0;

            let timer;

            function playVideo(index){

                clearTimeout(timer);

                videos.forEach(v=>{
                    v.pause();
                    v.classList.remove("videoOpen");
                });

                indicators.forEach(i=>{
                    i.classList.remove("videoOpen");
                });

                const video = videos[index];
                const indicator = indicators[index];

                video.classList.add("videoOpen");

                indicator.classList.remove("videoOpen");
                indicator.offsetWidth;
                indicator.classList.add("videoOpen");

                video.currentTime = 0;

                indicator.style.setProperty("--duration","5s");

                video.play().catch(()=>{});

                timer = setTimeout(()=>{

                    current = (index + 1) % videos.length;
                    playVideo(current);

                },5000);
            }

            playVideo(0);

        },100);
        
    },[])

    const topBtn = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return(
        <section className="main-section">
            <div className="main-banner">
                <video src={video.mainVideo} autoPlay muted loop playsInline></video>
                <div className="main-txt">
                    <p>WE’RE</p>
                    <p>EMET SOUND</p>
                </div>
            </div>
            <div className="section2">
                <div className="sec2-txt fill-text">
                    <div className="text-line">
                        <p className="text-stroke">VIEW</p>
                        <p className="text-fill">
                            <span>V</span>
                            <span>I</span>
                            <span>E</span>
                            <span>W</span>
                        </p>
                    </div>
                    <div className="text-line">
                        <p className="text-stroke">DANCE</p>
                        <p className="text-fill">
                            <span>D</span>
                            <span>A</span>
                            <span>N</span>
                            <span>C</span>
                            <span>E</span>
                        </p>
                    </div>
                    <div className="text-line">
                        <p className="text-stroke">VIDEO</p>
                        <p className="text-fill">
                            <span>V</span>
                            <span>I</span>
                            <span>D</span>
                            <span>E</span>
                            <span>O</span>
                        </p>
                    </div>
                    
                    <div className="sec2-img">
                        <img src={images.sec2Img} alt="b-boy" />
                    </div>
                    <div className="gobtn">
                        <a className="goyoutube" href="https://www.youtube.com/@emetsound"
                        target="_blank">
                            <img src={images.gobtn} alt="dance-youtube" />
                            <p className="gotxt">Go Youtube</p>
                        </a>
                        <div className="top-btn" onClick={topBtn}>
                            <img src={images.goarrow} alt="main-arrow" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="section3">
                <div className="left-sec">
                    <div className="yellow-strap">
                        <span>
                            <p>Dance,</p>
                            <p>Shoot,</p>
                            <p>Upload</p>
                        </span>
                        <span>
                            <p>Dance,</p>
                            <p>Shoot,</p>
                            <p>Upload</p>
                        </span>
                        <span>
                            <p>Dance,</p>
                            <p>Shoot,</p>
                            <p>Upload</p>
                        </span>
                        <span>
                            <p>Dance,</p>
                            <p>Shoot,</p>
                            <p>Upload</p>
                        </span>
                        <span>
                            <p>Dance,</p>
                            <p>Shoot,</p>
                            <p>Upload</p>
                        </span>
                    </div>
                    <div className="sec3-txt">
                        <p>CREATE</p>
                        <p>THE REELS</p>
                        <img className="sunflower1" src={images.sunflowers} alt="sunflower" />
                        <img className="sunflower2" src={images.sunflowers} alt="sunflower" />
                        <img className="sunflower3" src={images.sunflowers} alt="sunflower" />
                        <img className="sunflower4" src={images.sunflowers} alt="sunflower" />
                    </div>
                </div>
                <div className="right-sec">
                    <div className="video-wrap">
                        <div className="videos">
                            <video src={video.sec31} muted playsInline  preload="metadata" />
                            <video src={video.sec32} muted playsInline  preload="metadata"  />
                            <video src={video.sec33} muted playsInline  preload="metadata"  />
                            <video src={video.sec34} muted playsInline  preload="metadata"  />
                            <video src={video.sec35} muted playsInline  preload="metadata"  />
                        </div>
                        <div className="indigator">
                            <span className="indigator1"></span>
                            <span className="indigator2"></span>
                            <span className="indigator3"></span>
                            <span className="indigator4"></span>
                            <span className="indigator5"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="section4">
                <div class="strap-wrap">
                    <div className="blue-strap">
                        <span>
                            <p><img src={images.strapFilm} alt="film" /></p>
                            <p>YOUR</p>
                            <p><img src={images.strapFilm} alt="film" /></p>
                            <p>MOVE</p>
                            <p><img src={images.strapFilm} alt="film" /></p>
                            <p>OUR</p>
                            <p>VISION</p>
                            <p><img src={images.strapFilm} alt="film" /></p>

                            <p>YOUR</p>
                            <p><img src={images.strapFilm} alt="film" /></p>
                            <p>MOVE</p>
                            <p><img src={images.strapFilm} alt="film" /></p>
                            <p>OUR</p>
                            <p>VISION</p>
                            <p><img src={images.strapFilm} alt="film" /></p>

                            <p>YOUR</p>
                            <p><img src={images.strapFilm} alt="film" /></p>
                            <p>MOVE</p>
                            <p><img src={images.strapFilm} alt="film" /></p>
                            <p>OUR</p>
                            <p>VISION</p>
                            <p><img src={images.strapFilm} alt="film" /></p>

                            <p>YOUR</p>
                            <p><img src={images.strapFilm} alt="film" /></p>
                            <p>MOVE</p>
                            <p><img src={images.strapFilm} alt="film" /></p>
                            <p>OUR</p>
                            <p>VISION</p>
                            <p><img src={images.strapFilm} alt="film" /></p>

                            <p>YOUR</p>
                            <p><img src={images.strapFilm} alt="film" /></p>
                            <p>MOVE</p>
                            <p><img src={images.strapFilm} alt="film" /></p>
                            <p>OUR</p>
                            <p>VISION</p>
                            <p><img src={images.strapFilm} alt="film" /></p>
                        </span>
                    </div>
                    <div className="dat-strap">
                        <span>
                            <p><img src={images.strapDat} alt="film" /></p>
                            <p>WE'RE </p>
                            <p>EMET</p>
                            <p><img src={images.strapDat} alt="film" /></p>
                            <p>SOUND</p>
                            <p><img src={images.strapDat} alt="film" /></p>

                            <p>WE'RE </p>
                            <p>EMET</p>
                            <p><img src={images.strapDat} alt="film" /></p>
                            <p>SOUND</p>
                            <p><img src={images.strapDat} alt="film" /></p>

                            <p>WE'RE </p>
                            <p>EMET</p>
                            <p><img src={images.strapDat} alt="film" /></p>
                            <p>SOUND</p>
                            <p><img src={images.strapDat} alt="film" /></p>

                            <p>WE'RE </p>
                            <p>EMET</p>
                            <p><img src={images.strapDat} alt="film" /></p>
                            <p>SOUND</p>
                            <p><img src={images.strapDat} alt="film" /></p>
                        </span>
                    </div>
                </div>
            </div>

            <Card />

            <div className="last-section">
                <ul className="photo-wrap">
                    <li><img src={images.mainPhoto1} alt="mainphoto" /></li>
                    <li><img src={images.mainPhoto2} alt="mainphoto" /></li>
                    <li><img src={images.mainPhoto3} alt="mainphoto" /></li>
                </ul>
                <p className="daemun">emet</p>
                <div className="gobtn">
                    <a className="goyoutube" href="https://www.youtube.com/@emetsound"
                    target="_blank">
                        <img src={images.gobtn} alt="dance-youtube" />
                        <p className="gotxt">Go Youtube</p>
                    </a>
                    <Link to="/contact" className="contact-btn">
                        <img src={images.chat} alt="contact" />
                        <p className="gotxt">Contact Us</p>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Home;