import React from "react"
import img from "./assets/myself.jpg"
const About = () =>{
    return(
        <div className="about">
            <h1>About Me</h1><br>
            </br>
            <img src={img}></img>
            <div className="abt-cont">
            <p>Delhi is one of the oldest cities in the world, and has been continuously inhabited since the 6th century BCE.[22] Through most of its history, Delhi has served as a capital of various kingdoms and empires, most notably the Tomars, Chahamanas, Delhi Sultanate and Mughals. It is also assumed to be the location of Indraprastha, the capital of the Pandavas in the epic Mahabharata. The city has been captured, ransacked and rebuilt several times, particularly during the medieval period, and modern Delhi is a cluster of a number of cities spread across the metropolitan region. 
            </p>
            </div>
        </div>
    )
}
export default About