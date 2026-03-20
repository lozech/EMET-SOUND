import React from "react";
import { useEffect } from "react";
import "../pages/About.css";
import * as images from "../assets/images";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About(){
    const splitText = (text) => {
        return text.split("").map((char, i) => (
            <span key={i} className="char">{char}</span>
        ));
    };
    const splitWord = (text) => {
        return text.split(" ").map((word, i, arr) => (
            <span key={i} className="word">{word}{i !== arr.length - 1 && " "}</span>
        ));
    };

    useEffect(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".txt3-wrap",
                start: "top 80%",
                toggleActions: "play none none reset"
            }
        });

        gsap.fromTo(
            ".about-txt p",
            {
                y: 100,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                duration: 2,
                stagger: 0.6,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".about-txt",
                    start: "top 80%", 
                    toggleActions: "play reverse play reverse"
                }
            }
        );
        gsap.to(".char", {
            color: "#ffffffec",
            stagger: 0.01,
            ease: "none",
            scrollTrigger: {
                trigger: ".sec2-cont",
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
                scrub: true
            }
        });
        gsap.fromTo(".word-wrap .word",
        {
            y: 50,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
            trigger: ".word-wrap",
            start: "top 80%",
            scrub: true
            }
        }
        );
        tl.fromTo(
            ".txt3-wrap p:nth-of-type(2)",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            )
            .fromTo(
            ".photo-wrap img",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.6, ease: "power3.out" }
            )
            .fromTo(
            ".last-txt p",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, stagger: 0.6, ease: "power3.out" }
        );
    }, []);

    

    return(
        <section className="about-main">
            <div className="about-section1">
                <h1>About Emet</h1>
                <div className="photo1"><img src={images.about1} alt="about1" /></div>
                <div className="about-txt">
                    <p>"가장 우리다운 것이,</p>
                    <p>가장 파괴적인 바이럴이 된다"</p>
                </div>
            </div>
            <div className="about-section2">
                <div className="txt2-wrap">
                    <div className="txt2-tit">
                        <p className="sec2-tit">ABOUT US</p>
                    </div>
                    <div className="sec2-cont">
                        <div className="first-txt">
                            <p>{splitText("에메트사운드는 각 분야의 아티스트들이 모여")}</p>
                            <p>{splitText("'에메트스러운 무드'를 세상의 한복판에 던져 놓는 크리에이터 크루입니다.")}</p>
                            <p>{splitText("우리는 고착화된 틀에 안주하지 않습니다.")}</p>
                        </div>
                        <div className="second-txt">
                            <p>{splitText("음악 제작부터 안무, 연기, 그리고 최종 비디오 결과물까지 모든 공정을")}</p>
                            <p>{splitText("우리만의 방식으로 직접 설계하고 완성하는 정신을 지향합니다.")}</p>
                            <p>{splitText("에메트는 시즌별로 프로젝트의 성격에 따라 댄스, 연기, 혹은 이 모든 것이")}</p>
                            <p>{splitText("결합된 형태로 구성원을 자유롭게 조합하며 가장 우리다운 시너지를 만들어냅니다.")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-last">
                <div className="cont-wrap">
                    <div className="txt3-wrap">
                        <p className="word-wrap">{splitWord("작은물결이 모여 일으키는 파도,")}</p>
                        <p>’에메트사운드‘</p>
                    </div>
                    <div className="photo-wrap">
                        <img src={images.about2} alt="about2" />
                        <img src={images.about3} alt="about3" />
                        <img src={images.about4} alt="about4" />
                    </div>
                </div>
                <div className="last-txt">
                        <p>세상이 '바이럴'이라 부르는 현상 뒤에는, 언제나 에메트만의 집요한 고민과 우리다운 즐거움이 있습니다.</p>
                        <p>우리는 오늘도 트렌드를 읽는 대신, 에메트라는 새로운 장르를 써 내려갑니다.</p>
                </div>
            </div>
        </section>
    );
}

export default About;