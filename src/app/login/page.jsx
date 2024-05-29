"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const Login = () => {

  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Validation logic
    if (email === 'admin@gmail.com' && password === 'Admin123') {
      // Redirect to the dashboard
      router.push("/dashboard")
    } else {
      alert('Please enter the correct password!');
    }
  };

  return (
    <div className="flex bg-fixed h-screen">
      {/* Left Image Section */}
      <div
        className="w-1/2 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url('/asset/download2.png')` }}
      ></div>
      {/* Right Form Section */}
      <div className="w-1/2 h-full overflow-auto flex flex-col items-center py-12">
        {/* Logo */}
        <div>
          <img src="/asset/logo.png" alt="Logo" className="w-[280px]" />
        </div>
        {/* Welcome Text */}
        <div className="mt-10 text-center">
          <h1 className="text-4xl text-gray-600 mb-1 font-semibold">Welcome back</h1>
          <h5 className="text-xl text-gray-400">Welcome back! Please enter your details.</h5>
        </div>
        {/* Form */}
        <form className="w-3/4 flex flex-col items-center mt-5 gap-3 px-8" onSubmit={handleSubmit}>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="email">EMAIL ADDRESS</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border rounded text-lg p-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              name="password"
              id="password"
              className="border rounded text-lg p-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="w-full mt-1 flex justify-between">
            <div className="flex gap-1 items-center">
              <input
                type="checkbox"
                name="remember"
                id="remember"
                className="w-[17px] h-[17px]"
              />
              <label htmlFor="remember" className="text-md text-gray-500">
                Remember for 7 days
              </label>
            </div>
            <div>
              <Link href="/forgot">
                <span className="text-red-400 font-medium">Forgot Password</span>
              </Link>
            </div>
          </div>
          <button
            type="submit"
            id="sbmit"
            className="w-full rounded bg-red-600 py-3 mt-3 text-xl text-white font-medium border hover:border-red-600 hover:bg-white hover:text-red-400"
          >
            Sign In
          </button>
          <div className="mt-5">
            <h5>
              Don't have an account?{' '}
              <span className="text-red-400">
              <Link href="/signup">
                <span>Sign Up</span>
              </Link>
              </span>
            </h5>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
