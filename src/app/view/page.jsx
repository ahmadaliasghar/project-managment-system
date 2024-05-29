import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';

const page = () => {
    return (
        <div class="flex">
            <Sidebar value="projects" />
            <div class="w-full py-1 ">
                <Header />
                <div className=" flex flex-col gap-6 px-5">
                    <div className="mt-4 w-[15%]">
                        <Link href="/visa" class="flex gap-2  font-bold items-center">
                            <FaArrowLeftLong />
                            <label className='cursor-pointer'>Go Back</label>
                        </Link>
                    </div>
                    <div className='flex justify-between'>
                        <p class="text-lg w-[180px] text-center font-medium text-red-500 border-b-2 border-red-500">Project Information</p>
                    </div>

                    {/* <!-- Form --> */}

                    <div class="flex flex-col gap-6 w-[80%]">
                        <div class="flex gap-4">
                            <div className='w-[50%] flex flex-col'>

                                <label for="name">Project Category</label>
                                <input type="text" name="name" id="name" placeholder="Enter Project Name" class="border bg-gray-100 rounded text-lg px-3 py-2 outline-none" />
                            </div>
                            <div class="flex flex-col w-[50%] ">
                                <label for="name">Project Category</label>
                                <select name="catagory" className="border bg-gray-100 rounded text-lg px-3 py-3 outline-none" id="catagory">
                                    <option value="pk">E.Com</option>
                                    <option value="ind">Bloging</option>
                                    <option value="uae">Technical</option>
                                    <option value="china">Management</option>
                                </select>
                                {/* <input type="email" name="name" id="name" placeholder="Enter Your Email" class="border bg-gray-100 rounded text-lg px-3 py-2 outline-none" /> */}
                            </div>
                        </div>

                     

                            <div class="flex gap-4 w-full">
                                <div className="w-[50%] flex flex-col">
                                    <label for="name">Project Start Date</label>
                                    <input type="date" name="startdate" id="startdate" className="border w-full bg-gray-100 rounded text-lg px-3 py-2 outline-none" />
                                </div>
                                <div class="w-[50%] flex flex-col">
                                    {/* <input type="datetime" name="" id="" /> */}
                                    <label for="">Project Deadline</label>
                                    <input type="date" name="enddate" id="enddate" className="border w-full bg-gray-100 rounded text-lg px-3 py-2 outline-none" />

                                </div>
                            </div>
                      
                        <div class="flex gap-4" >
                            <div class="flex flex-col w-[50%] ">
                                <label for="name"> Project Members</label>
                                <select name="catagory" className="border bg-gray-100 rounded text-lg px-3 py-3 outline-none" id="catagory">
                                    <option value="first">Ahmad</option>
                                    <option value="second">Awais</option>
                                    <option value="third">Abdur Rehman</option>
                                    <option value="fourth">Ali</option>
                                </select>
                            </div>
                            <div class="flex flex-col w-[50%]">
                                

                                    <label for="name">Project Lead</label>
                                    <select name="catagory" className="border bg-gray-100 rounded text-lg px-3 py-3 outline-none" id="catagory">
                                        <option value="first">Ahmad</option>
                                        <option value="second">Awais</option>
                                        <option value="third">Abdur Rehman</option>
                                        <option value="fourth">Ali</option>
                                    </select>
                               

                            </div>

                        </div>

                        <div className='w-[50%] flex flex-col'>

                            <label for="name">Status</label>
                            <select name="catagory" className="border bg-gray-100 rounded text-lg px-3 py-3 outline-none" id="catagory">
                                <option value="complete">Completed</option>
                                <option value="progress">In Progress</option>
                                <option value="Pending">Pending</option>
                                <option value="review">In Review</option>
                            </select>
                        </div>
                        <div className='flex justify-end'>
                            <button className='bg-red-600 rounded text-white font-semibold shadow-md px-5 py-1 me-6'>Save</button>

                        </div>
                    </div>

                </div>
                {/* <!-- Mian --> */}


            </div>
        </div>


    )
}

export default page