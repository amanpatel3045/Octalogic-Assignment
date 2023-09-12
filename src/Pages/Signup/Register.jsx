import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Register.css'
import { useState } from 'react'

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate=useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      alert("Email is required");
    } else if (pass === "") {
      alert("password Is required");
    }  else {
      localStorage.setItem("email", email);
      localStorage.setItem("pass", pass);
     
      
      alert("Registered Succesfully");
      navigate('/')
    }
  };
  return (
    <>
        <div className=" main flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 shadow-lg w-[600px] h-[35rem] mx-auto ">
        
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
            className="mx-auto h-20 w-auto rounded-lg"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZu9YYxGZL8zDlqs6Nd3ifIFrOrk2AD9upvffkzxF38w&s"
            alt="Company Logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Register Your Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
               />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmit}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            You have account?
            <Link to='/' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
        
      </div>
      
    </>
  )
}

export default Register