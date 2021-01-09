import React, { Component } from "react";
import './contact.css'




class Contact extends Component{
    constructor(){
        super()

        this.state={
            email:'',
            message:''
        }
    }
    handelSubmit = (event)=>{
        event.preventDefault();

        this.props.history.push('/')

    }
    onChangeEmail = (event)=>{
        console.log(event.target.value)
        this.setState({email:event.target.value})

    }
    onChangeMessage = (event)=>{
        console.log(event.target.value)
        this.setState({message:event.target.value})

    }
    render()
    {
        return(
            <div className="top">
                <form onSubmit={this.handelSubmit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input value={this.state.email} onChange={this.onChangeEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Enter your message</label>
            <textarea value={this.state.message} onChange={this.onChangeMessage} className="form-control" id="exampleInputPassword1" required/>
          </div>
         
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
            </div>
        )
    }
}

export default Contact;