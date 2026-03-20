import React from "react";
import { useState } from "react";
import * as images from "../assets/images";
import "../pages/News.css";
import Article from "../components/Article";
import { articles } from "../data/articles";

function News(){
    const [input, setInput] = useState("");
    const handleSearch = () => {
        if (input.trim() === "") {
            alert("검색어를 입력해주세요");
        }
    };
    const filteredArticles = articles.filter((item) =>
        item.title.toLowerCase().includes(input.toLowerCase())
    );
    
    return(
        <section className="news-section">
            <h1>News</h1>
            <div className="search-wrap">
                <input type="text" placeholder="검색어를 입력하세요" className="search"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            handleSearch();
                        }
                    }} />
                <img src={images.searchBtn} onClick={handleSearch} alt="searchbtn" />
            </div>
            <ul className="articleCards">
                {
                    filteredArticles.length > 0 ? (
                        filteredArticles.map((item) => (
                            <Article key={item.id} data={item} />
                        ))
                    ) : (
                        <p className="notfound">검색결과 없음</p>
                    )
                }
            </ul>
        </section>
    );
}

export default News;