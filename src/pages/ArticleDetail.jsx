import React from "react";
import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";

import "./ArticleDetail.css";
import * as images from "../assets/images";

function ArticleDetail(){
    const { id } = useParams();
    const article = articles.find(a => String(a.id) === id);

    if (!article) return <div>데이터 없음</div>;
    return(
        <section className="article-detail">
            <h1>News</h1>
            <div className="article">
                <h1>{article.title}</h1>
                <div className="write-date">
                    <img src={article.timeIcon} alt={article.title} />
                    <p>{article.writeDate}</p>
                </div>
                <p className="content">
                    {article.content.split("\n").map((line, i, arr) => (
                        <span
                            key={i}
                            className={i === arr.length - 1 ? "last" : ""}
                        >
                            {line}
                            <br />
                        </span>
                    ))}
                </p>
            </div>
            <div className="nation">
                <div className="prev pagenation">
                    <div className="pageBtn prevBtn">
                        <img src={images.newsNation} alt="prev" />
                    </div>
                    <p className="nation-txt">이전</p>
                </div>
                <Link to="/news">
                    <div className="list-btn">
                        목록
                    </div>
                </Link>
                <div className="next pagenation">
                    <p className="nation-txt">다음</p>
                    <div className="pageBtn nextBtn">
                        <img src={images.newsNation} alt="next" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ArticleDetail;