import React from 'react'
import { IoMdArrowUp } from "react-icons/io";
import { IoMdArrowDown } from "react-icons/io";

const Cards = ({ subject, num, percentage }) => {
    return (
        <div class="w-[33%] flex flex-col gap-3 bg-gray-100 shadow-md rounded p-3 cursor-pointer hover:scale-105 transition-all duration-300">
            <h2>{subject}</h2>
            <h3 class="text-3xl font-bold">{num}</h3>
            <div class="flex gap-1">
                <div class="flex items-center ">
                    {percentage > 40 ? <p className='flex items-center text-green-500'><IoMdArrowUp />{percentage}% <span className='text-gray-500 font-medium'> &nbsp; vs last month</span></p> : <p className='flex items-center text-red-500'><IoMdArrowDown />{percentage}% <span className='text-gray-500 font-medium'> &nbsp;vs last month</span></p>}
                    <p class="text-gray-500"></p>
                </div>
            </div>
        </div>
    )
}

export default Cards