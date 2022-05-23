import React from 'react'
import ZakPortfolio from "../image/Zak-Portfolio.JPG"
import WavePortal from "../image/wave-project.JPG"
import ZakPortfolio2 from "../image/ZakPortfolio2.JPG"

export default function Projects(){

    return <>
    <div className="projects">
    <h2 className="projects-h2"> Projects</h2>
    <div className="projects-content">
        {/* project 1 */}
        <section className= "project-row">
        <a href="https://zak-portfolio-capstone.herokuapp.com/" target="_blank">
          <img className="project-img" src={ZakPortfolio2} alt="Capstone Project"></img>
          </a>
        <h3 className="projects-3">Capstone Project</h3>
        <p className="projects-paragraph">This was my final project during my coding bootcamp, I worked in a group to build a personal portfoli webstie for a client. I focused on website accessibility, back-end server, database and form connection, and front end development.</p>
        <p className="projects-paragraph">Technologies Used: MongoDB, Express.js, Nodemailer, JavaScript, React, ReactBoostrap, Node.js </p>
        <a href="https://github.com/Interactive-Portfolio-for-Zak/capstone-project" target="_blank">
    <button className="button1">View Capstone Project On Github</button>
  </a> 
  <a href="https://zak-portfolio-capstone.herokuapp.com/">
    <button className="button2">View Capstone Project Website</button>
  </a>
  </section> 
  {/* project 2 */}
  <section className= "project-row">
        <a href="https://wave-portal-ashy.vercel.app/" target="_blank">
          <img className="project-img" src={WavePortal} alt="Wave Portal Project"></img>
          </a>
          <br></br>
          <br></br>
        <h3 className="projects-3">Web3 Wave Portal</h3>
        <p className="projects-paragraph">In this project I wrote and deployed a smart contract to the blockchain. This project allows users to send a message and the data is save on the blockchain through an Ethereum smart contract. </p>
        <p className="projects-paragraph">Technologies Used: JavaScript, React, Solidity </p>
        <a href="https://github.com/jmaille664/wave-portal" target="_blank">
    <button className="button1">View Wave Portal Project On Github</button>
  </a> 
  <a href="https://zak-portfolio-capstone.herokuapp.com/" target="_blank">
    <button className="button2">View Wave Portal Project Website</button>
  </a> 
        </section>
     
       </div> 
       <hr></hr>
    </div>
    </>
}