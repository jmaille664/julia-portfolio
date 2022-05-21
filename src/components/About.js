import React from 'react'
import Hiking from "../image/Hiking.JPG"

export default function About(){

    return (
        <>
        <hr></hr>
        <h2 className="about-page-h2">About Me</h2>
        <section className="about">
        <img className="hiking-photo" src={Hiking} alt="Julia Hiking"></img>
        <div className="about-page-content">
    {/* About Me paragraph information  */}
    <p className="about-page-p">
    Thank you for visiting my page! My name is Julia Maille, I'm an experienced Software QA Engineer with knowledge of web development.<br/><br/>
         I have always been interested in technology, and that lead me to become a QA Tester. To further my tech skills, I completed a coding bootcamp in April 2022. <br/><br/>
         Outside of coding, I enjoy many outdoor activities like hiking, biking, kayaking, fishing, snowboarding, and cross-country skiing. I also enjoy painting, knitting, and traveling.
    </p>
    </div>
        </section>
        <hr></hr>
        </>
    )
}