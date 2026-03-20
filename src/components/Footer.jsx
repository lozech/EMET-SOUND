import React from "react";
import insta from "../assets/images/f_icon01_pc.png";
import youtube from "../assets/images/f_icon02_pc.png";
import tiktok from "../assets/images/f_icon03_pc.png";

function Footer(){
    return(
        <footer>
            <ul className="footer-wrap">
                <li className="foot-info">EMET SOUND의 모든컨텐츠는 저작권의 보호를 받고 있습니다.</li>
                <li className="sns-wrap">
                    <ul className="sns">
                        <li style={{ backgroundImage: `url(${insta})` }}>
                            <a href="https://www.instagram.com/emetsound/" target="_blank" rel="noopener noreferrer"></a>
                        </li>
                        <li style={{ backgroundImage: `url(${youtube})` }}>
                            <a href="https://www.youtube.com/@emetsound" target="_blank" rel="noopener noreferrer"></a>
                        </li>
                        <li style={{ backgroundImage: `url(${tiktok})` }}>
                            <a href="https://www.tiktok.com/discover/%EC%97%90%EB%A9%94%ED%8A%B8%EC%82%AC%EC%9A%B4%EB%93%9C" target="_blank" rel="noopener noreferrer"></a>
                        </li>
                    </ul>
                </li>
                <li className="copyRight">© 2025 EMET SOUND. All Rights Reserved.</li>
            </ul>
        </footer>
    );
}

export default Footer;