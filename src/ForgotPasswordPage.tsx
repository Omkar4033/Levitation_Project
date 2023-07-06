import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');


  const navigate = useNavigate();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSuccessMessage('Password reset instructions sent to your email!');

  };
  const handleback=()=>{
    navigate('/login');
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-6">
      <h1 style={{'fontFamily':'poppins'}} className="text-2xl text-[#3AA6B9] text-center mb-6 ">Levitation</h1>
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
          {emailError && <p className="text-red-500">Invalid email address.</p>}
        </div>
        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <div className="flex gap-x-10"></div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Reset Password
        </button>
        <button type="button" className="text-blue-500 hover:underline mx-6" onClick={handleback}>
           back
        </button>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
