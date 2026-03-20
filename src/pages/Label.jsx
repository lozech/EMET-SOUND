import React from "react";
import { useEffect, useState, useRef  } from "react";
import "../pages/Label.css";
import * as images from "../assets/images";
import * as video from "../assets/videos";
import { labelVideos } from "../data/labelVideo";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

function Label(){
    const [fade, setFade] = useState(1);
    const ref = useRef(null);

    const splitText = (text) => {
        return text.split("").map((char, i) => (
            <span key={i} className="char">{char}</span>
        ));
    };

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (!ref.current) return;

            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY) {
                const rect = ref.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                const progress = (windowHeight - rect.top) / windowHeight;
                const opacity = Math.min(Math.max(1 - progress, 0), 1);

                setFade(opacity);
            } 
            else {
                setFade(1);
            }

            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".txt-scro",
                start: "top 70%",
                end: "+=1000",
                scrub: true,
                pin: "txt-wrap",
                pinSpacing: false
            }
        });

        tl.to(".char", {
            color: "#ffffffec",
            stagger: 0.02,
            ease: "none"
        })

        .fromTo(".video-wrap",
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                ease: "power2.out"
            },
            "+=0.5"
        );

        const slider = document.querySelector(".video-wrap");

        let isDown = false;
        let startX;
        let scrollLeft;
        let isDragging = false;
        let autoSlide = null;

        const startAuto = () => {
            if (autoSlide) return;
            
            autoSlide = setInterval(() => {
            slider.scrollLeft += 1;
            }, 30);
        };

        const stopAuto = () => {
            clearInterval(autoSlide);
            autoSlide = null;
        };

        startAuto();

        const onMouseDown = (e) => {
            e.preventDefault(); 
            isDown = true;
            isDragging = false;
            slider.classList.add("dragging");

            stopAuto();

            startX = e.pageX;
            scrollLeft = slider.scrollLeft;
        };

        const onMouseMove = (e) => {
            if (!isDown) return;

            const walk = e.pageX - startX;

            if (Math.abs(walk) > 5) {
            isDragging = true;
            }

            slider.scrollLeft = scrollLeft - walk;
        };

        const onMouseUp = () => {
            isDown = false;
            slider.classList.remove("dragging");
            startAuto();
        };

        const onClick = (e) => {
            if (isDragging) {
            e.preventDefault();
            }
        };

        const onScroll = () => {
            const maxScroll = slider.scrollWidth - slider.clientWidth;

            if (slider.scrollLeft >= maxScroll - 1) {
            slider.scrollLeft = 0;
            }
        };

        slider.addEventListener("mousedown", onMouseDown);
        slider.addEventListener("mousemove", onMouseMove);
        slider.addEventListener("mouseup", onMouseUp);
        slider.addEventListener("mouseleave", onMouseUp);
        slider.addEventListener("click", onClick);
        slider.addEventListener("scroll", onScroll);

        return () => {
            slider.removeEventListener("mousedown", onMouseDown);
            slider.removeEventListener("mousemove", onMouseMove);
            slider.removeEventListener("mouseup", onMouseUp);
            slider.removeEventListener("mouseleave", onMouseUp);
            slider.removeEventListener("click", onClick);
            slider.removeEventListener("scroll", onScroll);

            window.removeEventListener("scroll", handleScroll);
        };

        
        
        
    }, []);

    return(
        <section className="label-page">
            <h1>Label</h1>
            <div ref={ref} className="label-info" style={{ 
                opacity: fade,
                transform: `translateY(${(1 - fade) * 50}px)`
                }}>
                <img src={images.labelimg} className="main-img" alt="labelimg" />
                <div className="label-cont">
                    <p className="cont-tit">Label Info</p>
                    <div className="bold-txt">
                        <p>Beyond Genres,</p>
                        <p>Purely 'EMET'</p>
                    </div>
                    <div className="thin-txt">
                        <p>에메트사운드 레이블은 장르의 경계를 허물고</p>
                        <p>'에메트스러움'을 음악으로 치환하는 사운드 프로듀싱 허브입니다.</p>
                    </div>
                </div>
            </div>
            <div className="txt-scro">
                <div className="txt-wrap">
                    <p>{splitText("우리는 어떤 소스나 장르를 다루더라도 에메트만의 감각으로 재해석하여 세상에 없던 사운드를 설계합니다.")}</p>
                    <p>{splitText("우리는 이미 수많은 프로젝트를 통해 글로벌 히트를 기록하며 그 실력을 증명해 왔습니다.")}</p>
                    <p>{splitText("이러한 글로벌 커리어를 바탕으로 단순히 음악을 제작하는 것을 넘어, 세상이 에메트스러운 소리에 반응하게 만듭니다.")}</p>
                </div>
            </div>
            <ul className="video-wrap">
                {labelVideos.map((url, i) => (
                    <li key={i}>
                    <video
                        src={url}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload={i === 1 ? "auto" : "metadata"}
                        poster={i === 1 ? images.labelThumb : undefined}
                    />
                    </li>
                ))}
            </ul>
            <div className="last-cont">
                <div className="video-cont">
                    <video
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="bg-video"
                    >
                        <source src={video.lastVideo} type="video/mp4" />
                    </video>
                </div>
                <p className="last-txt">우리는 오늘도 우리만의 즐거운 실험을 통해</p>
                <p className="last-txt">세상의 모든소리를 <span className="last-btxt">에메트라는 독보적인 장르로 다시 씁니다.</span></p>
            </div>
        </section>
    );
}

export default Label;