"use client"
import React, { useState } from 'react';
import Forms from './Forms';
import Tablesview from './Tablesview';

function TabbedInterface() {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState('schoolInfo');

    const rowsData = [
        {
            date: '23-04-2024',
            name: 'Muhammad Haris',
            email: 'haris@gmail.com',
            status: { type: 'Visa Application', color: 'green', text: 'Completed' },
            num: '+924123456',
            msg: "ok",
        },
        {
            date: '23-04-2021',
            name: 'Muhammad Yunas',
            email: 'yunas@gmail.com',
            status: { type: 'Leave Application', color: 'green', text: 'Completed' },
            num: '+923456789',
            msg: "ok",
        },
        {
            date: '23-04-2024',
            name: 'Muhammad Haris',
            email: 'haris@gmail.com',
            status: { type: 'Visa Application', color: 'green', text: 'Completed' },
            num: '+924123456',
            msg: "ok",
        },
        {
            date: '23-04-2021',
            name: 'Muhammad Yunas',
            email: 'yunas@gmail.com',
            status: { type: 'Leave Application', color: 'green', text: 'Completed' },
            num: '+923456789',
            msg: "ok",
        },
        {
            date: '23-04-2024',
            name: 'Muhammad Haris',
            email: 'haris@gmail.com',
            status: { type: 'Visa Application', color: 'green', text: 'Completed' },
            num: '+924123456',
            msg: "ok",
        },
        {
            date: '23-04-2021',
            name: 'Muhammad Yunas',
            email: 'yunas@gmail.com',
            status: { type: 'Leave Application', color: 'green', text: 'Completed' },
            num: '+923456789',
            msg: "ok",
        },
    ];

    return (
        <div>
            <div className="tabs flex gap-3 items-center">
                <button
                    className={`tab-button ${activeTab === 'schoolInfo' ? 'active' : ''}`}
                    onClick={() => setActiveTab('schoolInfo')}>
                    Add Member Information
                </button>
                <button
                    className={`tab-button ${activeTab === 'programInfo' ? 'active' : ''}`}
                    onClick={() => setActiveTab('programInfo')}>
                    Team Member Information
                </button>
            </div>

            <div className="py-4 px-3 mt-3">
                {activeTab === 'schoolInfo' && (
                    <Forms />
                )}
                {activeTab === 'programInfo' && (
                    <div class="mx-3 mt-4">
                    <table class="w-full h-[10vh] overflow-auto text-center text-gray-500">
                        <tr class="border-b">
                            <th>Project</th>
                            <th>Category</th>
                            <th>Lead Member</th>
                            <th>Start Date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>

                        <tbody>
                            {rowsData.map((data, index) => (
                                <Tablesview
                                    key={index}
                                    date={data.date}
                                    name={data.name}
                                    email={data.email}
                                    status={data.status}
                                    num={data.num}
                                    msg={data.msg}
                                />
                            ))}
                        </tbody>

                    </table>
                </div>
                )}
            </div>
        </div>
    );
}

export default TabbedInterface;
