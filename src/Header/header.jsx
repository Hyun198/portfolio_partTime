import React from 'react'
import cgv_logo from "../assets/cgv.png";
import './header.css'
function header() {
    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    if (month < 10) {
        month = String(month).padStart(2, "0");
    } else {
        month = String(month);
    }
    let day = date.getDate();
    if (day < 10) {
        day = String(day).padStart(2, "0");
    } else {
        day = String(day);
    }

    let today = `${year}${month}${day}`
    return (
        <>

            <div className="header-container">
                <div className="today">
                    <h2>{year}</h2>
                    <h3>{month}월{day}일</h3>
                </div>
                <div className="cgv">
                    <a href={`http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0298&date=${today}`}>
                        <img src={cgv_logo} alt="CGV Logo" className="header_img" />
                    </a>
                    <p>김포한강</p>
                </div>


            </div>
        </>

    )
}

export default header