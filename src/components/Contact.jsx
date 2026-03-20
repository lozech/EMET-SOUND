import React from "react";
import { useState } from "react";
import "./Contact.css";
import Modal from "./Modal";

function Contact(){
    const [phone, setPhone] = useState("");
    const handlePhone = (e) => {
        let value = e.target.value.replace(/[^0-9]/g, "");

        if (value.length < 4) {
            setPhone(value);
        } else if (value.length < 8) {
            setPhone(value.slice(0, 3) + "-" + value.slice(3));
        } else {
            setPhone(
            value.slice(0, 3) +
                "-" +
                value.slice(3, 7) +
                "-" +
                value.slice(7, 11)
            );
        }
    };
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [agree, setAgree] = useState(false);
    const [company, setCompany] =useState("");
    const onlyNumber = phone.replace(/[^0-9]/g, "");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name) {
            alert("이름을 입력하세요");
            return;
        }

        if (!email) {
            alert("이메일을 입력하세요");
            return;
        }

        if (!phone) {
            alert("연락처를 입력하세요");
            return;
        }
        if (onlyNumber.length < 11) {
            alert("연락처를 정확히 입력하세요");
            return;
        }
        if (!onlyNumber.startsWith("010")) {
            alert("010으로 시작하는 번호를 입력하세요");
            return;
        }

        if (!message) {
            alert("내용을 입력하세요");
            return;
        }

        if (!agree) {
            alert("개인정보 이용 정책에 동의해주세요");
            return;
        }

        alert("제출 완료!");
        setName("");
        setEmail("");
        setMessage("");
        setMessage("");
        setAgree(false);
        setPhone("");
        setCompany("");
        };
    const [open, setOpen] = useState(false);
    return(
        <>
            <section className="contacts">
                <h1>Contact Us</h1>
                <form id="contact-wrap" onSubmit={handleSubmit}>
                    <div className="first-section">
                        <div className="left-form">
                            <div className="form-row">
                                <label htmlFor="name" className="label">이름
                                    <span className="required">*</span>
                                </label>
                                <input type="text" id="name" className="cont" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-row">
                                <label htmlFor="email" className="label">이메일
                                    <span className="required">*</span>
                                </label>
                                <input type="email" id="email" className="cont" 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)} />
                            </div>
                        </div>
                        <div className="right-form">
                            <div className="form-row">
                                <label htmlFor="phone" className="label">연락처
                                    <span className="required">*</span>
                                </label>
                                <input type="tel" id="phone" className="cont"
                                    value={phone}
                                    onChange={handlePhone}
                                    maxLength={13} />
                            </div>
                            <div className="form-row">
                                <label htmlFor="company-name" className="label">회사명</label>
                                <input type="text" id="company-name" className="cont"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <div className="cont-submit">
                        <div className="form-row">
                            <label htmlFor="message" className="label">내용
                                <span className="required">*</span>
                            </label>
                            <textarea name="cont-box" id="message"  
                            placeholder="내용을 상세히 기입해주시면, 예산에 맞는 맟춤 컨설팅 및 제안을 드립니다."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}/>
                        </div>
                    </div>
                    <div className="agree-wrap">
                        <input type="checkbox" id="agree" 
                        checked={agree}
                        onChange={(e) => setAgree(e.target.checked)} />
                        <label htmlFor="agree">
                            (필수) 개인정보 이용 정책에 동의합니다.
                        </label>
                        <button type="button" onClick={() => setOpen(true)}>[ 전문보기 ]</button>
                    </div>
                    <button type="submit" className="confirm-btn">확인</button>
                </form>
            </section>
            {open && <Modal setOpen={setOpen} />}
        </>
    );
}

export default Contact;