import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);
  
  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("response is : ",response);
      if (response.ok) {
        // Login successful, redirect to Form Page
        navigate('/form');
      } else {
        // Login failed
        setLoginError(true);
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
      setLoginError(true);
    }
  };

  const handleForgotPassword = () => {
    navigate('/forgot-password');
  };

  return (
    
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
      <h1 style={{'fontFamily':'poppins'}} className="text-2xl text-center text-[#3AA6B9] mb-6 ">Levitation</h1>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>
        {loginError && <p className="text-red-500">Invalid credentials. Please try again.</p>}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Login
        </button>
      <p className="mt-4">
        <button type="button" className="text-blue-500 hover:underline" onClick={handleForgotPassword}>
          Forgot Password?
        </button>
      </p>
      </form>
    </div>
  );
};

export default LoginPage;
