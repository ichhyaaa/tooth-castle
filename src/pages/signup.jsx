import React, { useState } from "react";
import logo from '../Assets/logo.png'
import DentistImage from '../Assets/DentistImage.jpg'
import { useNavigate } from "react-router-dom";





export default function SignUp() {
  const navigate = useNavigate();

    return (
      <>
          <div className="flex min-h-full flex-1 flex-col justify-center bg- px-6 py-5 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <img
                className="mx-auto h-5 w-auto"
                src={logo}
                alt="Dental Clinic"
              />
              <h2 className="mt-3 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Sign Up 
              </h2>
            </div>
    
            <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="fullname" className="block text-sm font-medium leading-4 text-gray-900">
                    Full Name
                  </label>
                  <div className="mt-1">
                    <input
                      id="fullname"
                      name="fullname"
                      type="fullname"
                      autoComplete="fullname"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phonenumber" className="block text-sm font-medium leading-3 text-gray-900">
                    Phone number
                  </label>
                  <div className="mt-2">
                    <input
                      id="phonenumber"
                      name="phonenumber"
                      type="phonenumber"
                      autoComplete="phonenumber"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-3 text-gray-900">
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
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-3 text-gray-900">
                      Create Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-3 text-gray-900">
                      Confirm Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
    
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Register
                  </button>
                </div>
              </form>
    
              <p className="mt-5 text-center text-sm text-gray-500"> 
                <a href="" className="mt-10 text-center text-sm text-gray-500 font-semibold leading-3 text-indigo-600 hover:text-indigo-500"> 
                I am already member
                </a>
              </p>
              <div style={{
                  textAlign: "center",
                  marginTop: 10,
                  textDecorationColor: "rgb(79 70 229)",
                  color: "rgb(79 70 229)",
                  cursor: "pointer",
              }}
              onClick={() => navigate("/login")}
              >
              LOGIN
              </div>
            </div>
          </div>
      </>
    );
  };