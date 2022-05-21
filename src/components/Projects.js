import React from 'react'
import ZakPortfolio from "../image/Zak-Portfolio.JPG"
import WavePortal from "../image/wave-project.JPG"

export default function Projects(){

    return <>
    <div className="projects">
    <h2 className="projects-h2"> Projects</h2>
    <div className="projects-content">
        {/* project 1 */}
        <section className= "project-row">
        <a href="https://zak-portfolio-capstone.herokuapp.com/" target="_blank">
          <img className="project-img" src={ZakPortfolio}></img>
          </a>
        <h3 className="projects-3">Zak Rittenhouse Portfolio</h3>
        <p className="projects-paragraph">Group Capstone project during my coding bootcamp. Zak wanted a website to showcase his professional learning development work. A critical aspect of the project was to ensure accessibility to all user. Zak also wanted the ability for users to contact him.</p>
        <p className="projects-paragraph">Technologies Used: MongoDB, Express.js, Nodemailer, JavaScript, React, ReactBoostrap, Node.js </p>
        <a href="https://github.com/Interactive-Portfolio-for-Zak/capstone-project" target="_blank">
    <button className="button1">Project Github</button>
  </a> 
  <a href="https://zak-portfolio-capstone.herokuapp.com/">
    <button className="button2">Live Site</button>
  </a>
  </section> 
  {/* project 2 */}
  <section className= "project-row">
        <a href="https://zak-portfolio-capstone.herokuapp.com/" target="_blank">
          <img className="project-img" src={WavePortal}></img>
          </a>
          <br></br>
          <br></br>
        <h3 className="projects-3">Web3 Wave Portal</h3>
        <p className="projects-paragraph">Wrote and deployed a smart contract to the blockchain. Wave Portal allows users to send a wave and message and the data is save on the blockchain through an Ethereum smart contract. Website allows people to connect their wallets and interact with the smart contract. </p>
        <p className="projects-paragraph">Technologies Used: JavaScript, React, Solidity </p>
        <a href="https://github.com/Interactive-Portfolio-for-Zak/capstone-project" target="_blank">
    <button className="button1">Project Github</button>
  </a> 
  <a href="https://zak-portfolio-capstone.herokuapp.com/" target="_blank">
    <button className="button2">Live Site</button>
  </a> 
        </section>
     
       </div> 
       <hr></hr>
    </div>
    </>
}