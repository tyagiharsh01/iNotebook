import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = (props) => {
  const [cred, setCred] = useState({ email: '', password: '' });
  const [validation, setValidation] = useState({ email: [], password: [] });

  const navigate = useNavigate();

  const validateEmail = (email) => {
    const errors = [];

    if (!email) {
      errors.push('Email is required');
    } else if (!isValidEmail(email)) {
      errors.push('Invalid email format');
    }

    return errors;
  };

  const validatePassword = (password) => {
    const errors = [];

    if (!password) {
      errors.push('Password is required');
    } else if (password.length < 6) {
      errors.push('Password must be at least 6 characters');
    }

    return errors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  const onchange = (e) => {
    const { name, value } = e.target;
    setCred({ ...cred, [name]: value });

    // Validate the field on change
    if (name === 'email') {
      setValidation({ ...validation, email: validateEmail(value) });
    } else if (name === 'password') {
      setValidation({ ...validation, password: validatePassword(value) });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //http://localhost:5000/api/auth/login

    const emailErrors = validateEmail(cred.email);
    const passwordErrors = validatePassword(cred.password);

    if (emailErrors.length === 0 && passwordErrors.length === 0) {
      try {
        const response = await fetch("http://backend:5000/api/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: cred.email, password: cred.password }),
        });
        const json = await response.json();
        if (json.token !== null) {
          console.log(json);
          localStorage.setItem('token', json.token);
       
          navigate('/');
          props.showAlert("Loggedin Successfully", "success")
        }
        else {
          props.showAlert("Invalid Credentials", "danger")
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };
  };

  return (
    <div className="mt-2">
    <div className="card" style={{ width: '30rem', marginLeft: 'auto', marginRight: 'auto', padding: '20px' }}>
      <div className="my-3">
        <h3 className="text-center">iNotebook</h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={cred.email}
            onChange={onchange}
            aria-describedby="emailHelp"
            placeholder="Enter your email"
          />
          {validation.email.map((error, index) => (
            <div key={index} className="text-danger">
              {error}
            </div>
          ))}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={cred.password}
            onChange={onchange}
            name="password"
            placeholder="Enter your password"
          />
          {validation.password.map((error, index) => (
            <div key={index} className="text-danger">
              {error}
            </div>
          ))}
        </div>
  
        <div id="emailHelp" className="form-text text-center">
          <button type="submit" className="btn btn-success">
            Login
          </button>
          <p className="my-2">Don't have an account? Sign up here:</p>
          <Link className="btn btn-success" to="/signup" role="button">
            Signup
          </Link>
        </div>
      </form>
    </div>
  </div>
  
  );
};

export default Login;
