import React from "react"


const Footer = () =>{
    return(
        <div className="footer">
            <h5>Find Me On:</h5>

            <a href="https://www.github.com/sawarn" target="_blank">
            <i class="fa fa-github-square fa-lg" aria-hidden="true"></i>
            </a>
            <a href ="https://www.linkedin.com/in/shivam-sawarn-376458191/" target="_blank">
            <i class="fa fa-linkedin-square fa-lg" aria-hidden="true"></i>
            </a>
            <hr></hr>
            <a href = "mailto: shivamsawarn15@gmail.com" target="_blank">
                <button>Contact Me</button>
            </a>
            <hr></hr>
            <p>Copyright © 2021 | Shivam Sawarn</p>
            
        </div>
    )
}

export default Footer