import Link from 'next/link';
import React, { useState } from 'react'

const Navbar = () => {
    const [activeButton, setActiveButton] = useState("");

    // Function to handle button click
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (


        <nav className="py-2 sticky top-0 z-50 max-md:flex-wrap px-4 shadow-lg bg-white ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" class="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="/asset/logo.png" class="h-10" alt="Flowbite Logo" />

                </a>
                <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link href="#">
                                <div className={`flex gap-2 items-center p-2 rounded font-medium ${activeButton === 'home' ? 'bg-red-600 text-white' : ''}`}
                                    onClick={() => handleButtonClick('home')}>
                                    <button>Home</button>
                                </div>
                            </Link>
                            {/* <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a> */}
                        </li>
                        <li>
                            <Link href="#">
                                <div className={`flex gap-2 items-center p-2 rounded font-medium ${activeButton === 'about' ? 'bg-red-600 text-white' : ''}`}
                                    onClick={() => handleButtonClick('about')}>
                                    <button>About</button>
                                </div>
                            </Link>
                            {/* <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a> */}
                        </li>
                        <li>
                            <Link href="#">
                                <div className={`flex gap-2 items-center p-2 rounded font-medium ${activeButton === 'Services' ? 'bg-red-600 text-white' : ''}`}
                                    onClick={() => handleButtonClick('Services')}>
                                    <button>Services</button>
                                </div>
                            </Link>
                            {/* <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a> */}
                        </li>
                        <li>
                            <Link href="#">
                                <div className={`flex gap-2 items-center p-2 rounded font-medium ${activeButton === 'Pricing' ? 'bg-red-600 text-white' : ''}`}
                                    onClick={() => handleButtonClick('Pricing')}>
                                    <button>Pricing</button>
                                </div>
                            </Link>
                            {/* <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a> */}
                        </li>
                        <li>
                            <Link href="#">
                                <div className={`flex gap-2 items-center p-2 rounded font-medium ${activeButton === 'members' ? 'bg-red-600 text-white' : ''}`}
                                    onClick={() => handleButtonClick('members')}>
                                    <button>Team Members</button>
                                </div>
                            </Link>
                            {/* <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a> */}
                        </li>
                        <li>
                            <Link href="/login">
                                <div className={`flex gap-2 bg-red-600 text-white items-center p-2 rounded font-medium hover:bg-blue-500 hover:shadow-xl ${activeButton === 'admin' ? '' : ''}`}
                                    onClick={() => handleButtonClick('admin')}>
                                    <button>Admin Panel</button>
                                </div>
                            </Link>
                            {/* <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a> */}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

       

    )
}

export default Navbar