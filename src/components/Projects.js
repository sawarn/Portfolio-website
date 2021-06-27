import { Carousel } from 'react-bootstrap'
import React from 'react'
import image1 from "./assets/1.jpg"
import image2 from "./assets/2.jpg"
import image3 from "./assets/3.jpg"
const Projects = () => {
    return (
      
      <div className="cont">
        <h1><b>Projects</b></h1><br>
        </br><br></br>
      <Carousel fade controls={false}>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={image1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={2000} > 
    <img
      className="d-block w-100"
      src={image3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div> 
     )
}

export default Projects
