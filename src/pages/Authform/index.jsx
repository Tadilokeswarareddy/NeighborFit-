import React, { useState } from 'react';
import './Authform.css';

function Authform() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      
      console.log("Logging in with:", formData.email, formData.password);
    } else {
      
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      console.log("Signing up with:", formData.email, formData.password);
    }

    setFormData({
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  return (
    <div className='container'>
      <div className='form'>
        <div className='toggle'>
          <button 
            className={isLogin ? 'active' : ""} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={!isLogin ? 'active' : ""} 
            onClick={() => setIsLogin(false)}
          >
            Sign up
          </button>
        </div>

        <form onSubmit={handleSubmit} className='form1'>
          <h2>{isLogin ? 'Login' : 'Sign up'}</h2>

          <input 
            type='email' 
            name='email' 
            placeholder='Enter email' 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />

          <input 
            type='password' 
            name='password' 
            placeholder='Enter password' 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />

          {!isLogin && (
            <input 
              type='password' 
              name='confirmPassword' 
              placeholder='Confirm password' 
              value={formData.confirmPassword} 
              onChange={handleChange} 
              required 
            />
          )}

          {isLogin && <a href='#'>Forgot password?</a>}

          <button type='submit'>{isLogin ? 'Login' : 'Sign up'}</button>
        </form>
      </div>
    </div>
  );
}

export default Authform;
