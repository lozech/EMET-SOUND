import React from "react";
import { Link } from "react-router-dom";
import "./Article.css";

function Article({ data }){
    return(
        <li>
            <Link to={`/news/${data.id}`}>
                <div className="aricle-txt">
                    <div className="tit">
                        <h1>{data.title}</h1>
                        <p className="cont">{data.content}</p>
                    </div>
                    <div className="write-date">
                        <img src={data.timeIcon} alt={data.title} />
                        <p>{data.writeDate}</p>
                    </div>
                    <div className="thum-wrap">
                        <img src={data.thumbnail} className="thum" alt={data.title} />
                    </div>
                </div>
            </Link>
        </li>
    );
}

export default Article;