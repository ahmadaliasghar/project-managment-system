import React from 'react'

const Header = () => {
    return (
        <div class="flex justify-between border-b shadow-sm px-3 py-2">
            <div class="ml-2">
                <h2 class="text-lg font-semibold">Hi! Mr. Admin</h2>
                <p class="text-center">Welcome Back!</p>
            </div>
            <div class="flex gap-2 justify-center items-center">
                <div>
                    <i class="fa-regular fa-bell"></i>
                </div>
                <div class="flex gap-2 bg-gray-300 p-1 rounded-full items-center px-4">
                    <img src="/asset/myimage.jpg" class="w-[30px] h-[30px] rounded-full" alt="" />
                    <p>Mr Admin</p>
                </div>
            </div>
        </div>
    )
}

export default Header