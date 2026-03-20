import React from "react";
import { artists } from "../data/crews";
import { useEffect } from "react";
import ArtistCard from "./ArtistCard";
import "./Card.css";

function Card(){
    useEffect(() => {
        const slider = document.querySelector(".artists-cards");

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
        };

    }, []);

    return(
        <section className="main-cards">
            <ul className="artists-cards">
                {[
                    ...artists,  
                    ...artists,
                    ...artists  
                    ].map((artist, index)=>(
                        <ArtistCard key={index} artist={artist}/>
                ))}
            </ul>
        </section>
    )
}

export default Card;