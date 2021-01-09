import React from "react"
import "./content.css"




const Content = () =>{
    return(
        
        <div className="outer">
           

            <div className="inner">
                <h3>Hello I'm</h3>
            <h1 className="name"> Vipul Parnerkar</h1>
            <span>I'm a final year student pursuing B.tech. I have a keen interest in Web Development using MERN Stack</span><br></br>
            
            <a className="btn btn-light mt-3 custom" href="/contact"> Lets talk</a>

            </div>
            
            
            
        </div>
    )
}
export default Content;