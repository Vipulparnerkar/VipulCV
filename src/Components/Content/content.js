import React from "react"
import "./content.css"





const Content = () =>{
    return(
        <div>
             <div className="outer">
           

           <div className="inner">
               <h3>Hello I'm</h3>
           <h1 className="name"> Vipul Parnerkar</h1>
           <span>I'm a final year student pursuing B.tech. I have a keen interest in Web Development using MERN Stack</span><br></br>
           
           <a className="btn btn-light mt-3 custom" href="/contact"> Lets talk</a>

           </div>
           
           
           
           
             </div>
             <div className="infoSection">

             <h2 >My Achievements</h2>
             <hr className="forhr"></hr>

             </div>

             <div className="forflex ">
                 
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Full Stack Web Development </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Udemy</h6>
                        <p className="card-text">Completed this course based on HTMl, CSS, JavaScript, React JS, Node.js, MongoDB, Redux, React Hooks etc..</p>
                        <p>⭐⭐⭐⭐</p>
                        <a href="www.google.com" className="card-link">View Certificate</a>
                        
                    </div>
                </div>
                
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Core java </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Vedisoft Ltd</h6>
                        <p className="card-text">Completed this course based on Core java SE version..</p>
                        <p>⭐⭐⭐⭐</p>
                        <a href="www.google.com" className="card-link">View Certificate</a>
                        
                    </div>
                </div>
               
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">Complete Python bootcamp from zero to hero </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Udemy</h6>
                        <p className="card-text">Completed tis course based on Python..</p>
                        <p>⭐⭐</p>
                        <a href="www.google.com" className="card-link">View Certificate</a>
                        
                     </div>
                

                 </div>
                 <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">JavaScript </h5>
                        <h6 className="card-subtitle mb-2 text-muted">Udemy</h6>
                        <p className="card-text">Completed tis course based on JavaScript</p>
                        <p>⭐⭐⭐</p>
                        <a href="www.google.com" className="card-link">View Certificate</a>
                        
                     </div>
                

                 </div>
                

                 </div>
            
      
               
         

           <footer >
               <p>Made with ❤ by Vipul</p>
           </footer>

        </div>
        
       
    )
}
export default Content;