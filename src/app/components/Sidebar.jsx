"use client";

import React, { useState, useEffect } from 'react';
import { MdOutlineAutoGraph, MdRoomPreferences } from "react-icons/md";
import { FaFileCode, FaRegBuilding } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';


const Sidebar = ({ value }) => {
    const pathname = usePathname();
    const [activeButton, setActiveButton] = useState('overview');

    useEffect(() => {
        if (pathname.includes('projects')) {
            setActiveButton('projects');
        } else if (pathname.includes('members')) {
            setActiveButton('members');
        } else if (pathname.includes('tasks')) {
            setActiveButton('task');
        } else {
            setActiveButton('overview');
        }
    }, [pathname]);

    return (
        <div className="w-[20%] h-screen flex flex-col gap-4 border-r py-1 px-3 text-xl">
            <div className="flex mt-2 justify-center">
                <img src="/asset/logo.png" className="w-[200px]" alt="logo" />
            </div>
            <Link href="/dashboard">
                <div className={`flex mt-4 gap-2 items-center p-2 rounded font-medium ${activeButton === 'overview' ? 'bg-red-600 text-white' : ''}`}
                    onClick={() => setActiveButton('overview')}>
                    <MdOutlineAutoGraph className='text-xl' />
                    <button>Overview</button>
                </div>
            </Link>
            <Link href="/dashboard/projects">
                <div className={`flex w-full justify-between p-2 rounded font-medium ${activeButton === 'projects' ? 'bg-red-600 text-white' : ''}`}
                    onClick={() => setActiveButton('projects')}>
                    <div className="flex gap-2 items-center">
                        <FaFileCode className='text-xl' />
                        <button className='w-full'>Projects</button>
                    </div>
                    <div>
                        <i className="fa-solid fa-caret-down"></i>
                    </div>
                </div>
            </Link>
            <Link href="/dashboard/members">
                <div className={`flex gap-2 items-center p-2 rounded font-medium ${activeButton === 'members' ? 'bg-red-600 text-white' : ''}`}
                    onClick={() => setActiveButton('members')}>
                    <FaRegBuilding className='text-xl' />
                    <button>Team Members</button>
                </div>
            </Link>
            <Link href="/dashboard/tasks">
                <div className={`flex gap-2 items-center p-2 rounded font-medium ${activeButton === 'task' ? 'bg-red-600 text-white' : ''}`}
                    onClick={() => setActiveButton('task')}>
                    <MdRoomPreferences className='text-xl' />
                    <button>Assigned Tasks</button>
                </div>
            </Link>
        </div>
    );
};

export default Sidebar;
