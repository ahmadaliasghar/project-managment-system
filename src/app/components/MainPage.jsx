"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import img1 from '/asset/download2.png';
// import SwipeBtn from "@/app/Components/SwipeBtn";
import Link from "next/link";
import { motion } from "framer-motion";
// Swiper Css
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import Navbar from "./Navbar";
import Accordion from "./Accordion";
import AccordianData from "./AccordianData";
import WhiteAccordion from "./WhiteAccordian";
import WhiteAccodionData from "./WhiteAccodionData";
import Feedback from "./Feedback";
import Footer from "./Footer";

const HomeSlide = () => {

    const [openIndex, setOpenIndex] = useState(0);

    const handleAccordionClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative">

            <Navbar />
            <Swiper
                navigation
                pagination={{ clickable: true }}
                modules={[Navigation, Pagination]}
                className="w-full mt-2 rounded-md"
            >
                <SwiperSlide>
                    <div className="relative">
                        <div className="absolute slider shadow-lg rounded items-center">
                            <h1 className="text-5xl font-black text-white">Begin your seamless software development journey with zero overhead. </h1>
                            <div className="flex justify-center mt-3">
                                <p className="text-2xl w-[80%] text-red-500 font-semibold">SMProTech is your all-in-one solution for managing software projects effortlessly.We support to make your software development lifecycle smooth and cost effective.</p>
                            </div>
                        </div>
                        <img
                            src="/asset/slider1.png"
                            alt="Image 1"
                            className="w-full h-[70vh]"
                        />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="absolute slider3 shadow-lg rounded items-center">
                        <h1 className="text-5xl font-black text-white">Begin your seamless software development journey with zero overhead. </h1>
                        <div className="flex justify-center mt-3">
                            <p className="text-2xl w-[80%] text-red-500 font-semibold">SMProTech is your all-in-one solution for managing software projects effortlessly.We support to make your software development lifecycle smooth and cost effective.</p>
                        </div>
                    </div>
                    <img
                        src="/asset/slider2.jpg"
                        alt="Image 2"
                        className="w-full h-[70vh]"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <div className="absolute slider2 shadow-lg rounded items-center p-3">
                        <h1 className="text-5xl font-black text-white">Begin your seamless software development journey with zero overhead. </h1>
                        {/* <div className="flex justify-center mt-3">
                                <p className="text-2xl w-[80%] text-red-500 font-semibold">SMProTech is your all-in-one solution for managing software projects effortlessly.We support to make your software development lifecycle smooth and cost effective.</p>
                            </div> */}
                    </div>
                    <img
                        src="/asset/slider3.jpg"
                        alt="Image 3"
                        className="w-full h-[70vh]"
                    />
                </SwiperSlide>
            </Swiper>
            <div className=" flex flex-col gap-16 px-28 pt-20">

                <div className="flex justify-around w-full">
                    <div className="w-[50%] flex flex-col justify-center items-start row-start-2 sm:row-start-1">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                            We represent and recruit for the Software Project Management System in the world.
                        </h1>
                        <p className="text-black-500 mt-4 mb-6">
                            GT Western is an International Education and Migration agency providing study and relocation solutions with offices in Australia, Nigeria and growing. If you are keen on international education, we are here to make it happen for you. At GT Western Immigration & Education Services we provide comprehensive individually tailored services to all of our clients regardless of what, where and when it is needed. Our focus is on providing quality migration and education services to our clients
                        </p>
                        <button> Get Started </button>
                    </div>
                    <div className="w-[50%] flex justify-center items-center">
                        <img src="/asset/top.webp" alt="" />
                    </div>
                </div>
                <div class="angled-div ">
                    <AccordianData />
                </div>
                <div>
                    <h1 className="w-[50%] mb-5 text-5xl font-semibold">We also provide other services to ease transition to school.</h1>
                    <WhiteAccodionData />
                </div>
                <div>
                    <Feedback />
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>


    );
};

export default HomeSlide;