import React from 'react'
import {Card, Button} from "react-bootstrap";
import ZakPortfolio from "../image/Zak-Portfolio.JPG"

export default function Projects(){

    return <>
    <section className="projects">
    <div className="projects-content">
        <h2 className="projects-h2"> Projects</h2>
        {/* <Card style={{ width: '1rem' }}>
  <Card.Img variant="top" src={ZakPortfolio}/>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card> */}
        </div>
    </section>
    </>
}