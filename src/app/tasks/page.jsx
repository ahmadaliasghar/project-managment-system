import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { FaArrowLeftLong } from "react-icons/fa6";
import Link from 'next/link';
import Assigned from '../components/Assigned';

const page = () => {
  return (
    <div class="flex">
    <Sidebar value="task" />
    <div class="w-full py-1 ">
        <Header />
        <div class=" flex flex-col gap-6 px-5">
                 <div class="mt-4 ">
                     <Link href="/visa" class="flex gap-2 font-bold items-center">
                         <FaArrowLeftLong />
                         <label>Go Back</label>
                     </Link>
                 </div>
                 {/* <div className='flex justify-between'>
                     <button class="text-lg w-[180px] text-center font-medium text-red-500 border-b-2 border-red-500">Personal Information</button>
                 </div> */}

                 {/* <!-- Form --> */}
                <Assigned />
                 

            </div>
        {/* <!-- Mian --> */}


    </div>
</div>

 
  )
}

export default page