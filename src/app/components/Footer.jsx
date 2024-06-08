import Link from 'next/link'
import React from 'react'

const Footer = () => {
    const catgories = [
        {
            name: "Introduction",
        },
        {
            name: "About"
        },
        {
            name: "Services",
        },
        {
            name: "Contact Us"
        }
    ]
    return (
        <footer className='bg-blue-600 text-white mt-4 p-6'>
            <div className='w-full flex px-4 '>
                <div className='w-[33%] border-1 flex flex-col gap-3'>
                    <img src="/asset/logo.png" width="200px" alt="Logo" />
                    {catgories.map((item, index) => (
                        <h1 className='text-xl pl-2 mt-2' key={index}>{item.name}</h1>
                    ))}
                </div>
                <div className='w-[33%] border-x border-gray-400 flex flex-col justify-center items-center gap-4'>
                    <h1 className='text-5xl font-semibold '>Ready to start work</h1>
                    <Link href="/login" ><button className='bg-red-500 px-4 py-2 rounded shadow-xl text-xl'>Admin Panel</button></Link>
                </div>
                <div className='w-[33%] flex flex-col justify-center items-center '>
                    <div className='text-right'>

                        <h1>Faisalabad, Pakistan</h1>
                        <h1>National Textile University IT Center <br /> Lab-2, Faisalabad</h1>
                        <p>Ahmad Ali Asghar</p>
                        <p>Muhammad Awais</p>
                        <p>Abdur Rehman</p>
                    </div>
                </div>
            </div>
            <div className='border-t mt-4 p-4 text-center'>
                <h1>@ 2024 SP Management. All Rights Reserved</h1>
            </div>
        </footer>
    )
}

export default Footer