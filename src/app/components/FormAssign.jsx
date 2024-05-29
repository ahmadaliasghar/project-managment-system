import React from 'react'

const FormAssign = () => {
    return (
        <div class="flex flex-col gap-6 w-[80%]">
            <div className='flex gap-4'>
                <div class="flex flex-col w-[50%] ">
                    <label for="name">Task Title</label>
                    <input type="text" name="name" id="name" placeholder="Enter Task Title" class="border bg-gray-100 rounded text-lg px-3 py-2 outline-none" />
                </div>
                <div class="flex flex-col w-[50%]">
                    <label for="name">RELATED TO PROJECT</label>
                    <select name="country" className="border w-full bg-gray-100 rounded text-lg px-3 py-3 outline-none" id="country">
                        <option value="dev">Web Developmemt</option>
                        <option value="mobile">Mobile Application</option>
                        <option value="graphic">Graphic Designing</option>
                        <option value="seo">SEO</option>
                    </select>
                </div>
            </div>
            <div class="flex gap-4">
                <div class="flex flex-col w-[50%] ">
                    <label for="name">Assigned To</label>
                    <select name="country" className="border w-full bg-gray-100 rounded text-lg px-3 py-3 outline-none" id="country">
                        <option value="dev">Web Developmemt</option>
                        <option value="mobile">Mobile Application</option>
                        <option value="graphic">Graphic Designing</option>
                        <option value="seo">SEO</option>
                    </select>
                </div>
                <div class="flex flex-col w-[50%]">
                    <label for="name">Status</label>
                    <select name="catagory" className="border bg-gray-100 rounded text-lg px-3 py-3 outline-none" id="catagory">
                        <option value="complete">Completed</option>
                        <option value="progress">In Progress</option>
                        <option value="Pending">Pending</option>
                        <option value="review">In Review</option>
                    </select>

                </div>
            </div>
            <div class="flex gap-4" >
                <div class="flex flex-col w-[50%] ">
                    <label for="name"> Due Date</label>
                    <input type="date" name="nation" id="nation" placeholder="Enter Your Nationality"
                        class="border rounded text-lg px-3 py-2 outline-none" />
                </div>
            </div>
            <div className='flex justify-end'>
                <button className='bg-red-600 rounded text-white font-semibold shadow-md px-5 py-1 me-6'>Save</button>

            </div>
        </div>
    )
}

export default FormAssign