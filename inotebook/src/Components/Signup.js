import React from 'react';
import { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';

const Signup = (props) => {
    const [cred, setCred] = useState({ name: "", email: "", password: "", cpassword: "" });
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
      e.preventDefault();
      
      
      try {
        if(cred.password!== cred.cpassword){
          props.showAlert("password and confirm password shoud be matched.","danger")
        }
        else{
        const response = await fetch("http://localhost:5000/api/auth/createUser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: cred.name, email: cred.email, password: cred.password})
        });
        const json = await response.json();
        console.log(json);
        if (json.token != null) {
          localStorage.setItem('token', json.token);
          navigate('/');
          props.showAlert("Account Created Successfully","success")
        }
        else {
          props.showAlert("Invalid Credentials","danger")
        }
      }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
    const onChange = (e)=>{
        setCred({...cred, [e.target.name]: e.target.value})
    }

    return (
        <div className="container mt-2">
          
          <div className="my-3">
        <h3>Register here to use iNotebook </h3>
        </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name='name' onChange={onchange} aria-describedby="emailHelp" />
    
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" name='email' onChange={onchange} aria-describedby="emailHelp" />
    
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" minLength={5} required onChange={onchange} name="password" />
            </div>
            <div className="mb-3">
              <label htmlFor="cpassword" className="form-label">Confirm Password</label>
              <input type="password" className="form-control" id="cpassword" minLength={5} required name='cpassword' onChange={onchange} />
            </div>
           
            <div id="emailHelp" class="form-text">  <button type="submit" className="btn btn-success">Submit</button> do you have any account? <Link className="btn btn-success mx-2" to="/login" role="button">login</Link></div>
          </form>
          </div>
     
      );
    }
    
    export default Signup;
    
