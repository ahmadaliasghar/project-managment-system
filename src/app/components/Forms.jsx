import React from 'react'

const Forms = () => {
  return (
    <div class="flex flex-col gap-6 w-[80%]">
      <div className='flex gap-4'>
        <div class="flex flex-col w-[50%] ">
          <label for="name">Name</label>
          <input type="text" name="name" id="name" placeholder="Enter Your Name" class="border bg-gray-100 rounded text-lg px-3 py-2 outline-none" />
        </div>
        <div class="flex flex-col w-[50%]">
          <label for="name">Image</label>
          <input type="file" name="name" id="name" placeholder="Enter Your Name" class="border bg-gray-100 rounded px-3 py-2 outline-none" />
        </div>
      </div>
      <div class="flex gap-4">
        <div class="flex flex-col w-[50%] ">
          <label for="name">Email Address</label>
          <input type="email" name="name" id="name" placeholder="Enter Your Email" class="border bg-gray-100 rounded text-lg px-3 py-2 outline-none" />
        </div>
        <div class="flex flex-col w-[50%]">
          <label for="name">Field</label>
          <div class="flex gap-3">
            <select name="country" className="border w-full bg-gray-100 rounded text-lg px-3 py-3 outline-none" id="country">
              <option value="dev">Web Developmemt</option>
              <option value="mobile">Mobile Application</option>
              <option value="graphic">Graphic Designing</option>
              <option value="seo">SEO</option>
            </select>
          </div>
        </div>
      </div>
      <div class="flex gap-4" >
        <div class="flex flex-col w-[50%] ">
          <label for="name"> Joning Date</label>
          <input type="date" name="nation" id="nation" placeholder="Enter Your Nationality"
            class="border rounded text-lg px-3 py-2 outline-none" />
        </div>
        <div class="flex flex-col w-[50%]">
          <label for="name">About</label>
          <textarea name="" id="" cols="30" rows="1" placeholder="Enter Your Destination" class="border w-full rounded text-lg px-3 py-2 outline-none"></textarea>
          {/* <input type="text" name="mobile" id="mobile" placeholder="Enter Your Destination" class="border w-full rounded text-lg px-3 py-2 outline-none" /> */}
        </div>

      </div>
      <div class="flex flex-col w-[49%]">
        <label for="name">Experience</label>
        <input type="text" name="name" id="name" placeholder="Enter your Experience" class="border rounded text-lg px-3 py-2 outline-none" />
      </div>
      <div className='flex justify-end'>
        <button className='bg-red-600 rounded text-white font-semibold shadow-md px-5 py-1 me-6'>Save</button>

      </div>
    </div>
  )
}

export default Forms