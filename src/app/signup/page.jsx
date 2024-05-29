import Link from 'next/link'
import React from 'react'

const Page = () => {
  return (
    <div class="flex bg-fixed">
        <div class="w-[50%]  bg-no-repeat bg-cover bg-center" style={{ backgroundImage: `url('/asset/download2.png')`}}>
        </div>
        <div class="w-[50%] h-[100vh] overflow-auto flex flex-col items-center py-2">
            <div>
                <img src="/asset/logo.png" alt="logo" class="w-[280px]" />
            </div>
            <div class="mt-10 text-center">
                <h1 class="text-3xl text-gray-600 mb-1 font-semibold">Create an Account</h1>
                <h5 class="text-lg text-gray-400">Welcome back! Please enter your details.</h5>
            </div>
            <form action="" class="w-[75%] flex flex-col items-center mt-5 gap-3 px-8">
                <div class="w-full flex flex-col gap-1">
                    <label htmlFor="name">FULL NAME</label>
                    <input type="text" name="name" id="name" class="border rounded text-lg p-3" />
                </div>
                <div class="w-full flex flex-col gap-1">
                    <label for="email">EMAIL ADDRESS</label>
                    <input type="email" name="email" id="email" class="border rounded text-lg p-3" />
                </div>
                <div class="w-full flex flex-col gap-1">
                    <label for="password">PASSWORD</label>
                    <input type="password" name="password" id="password" class="border rounded text-lg p-3" />
                </div>
                <div class="w-full mt-1">
                    <div class="flex gap-1 items-center">
                        <input type="checkbox" id="min" class="w-[17px] h-[17px]" />
                        <label for="min" class="text-md text-gray-500">Minimum of 8 characters</label>
                    </div>
                    <div class="flex gap-1 items-center">
                        <input type="checkbox" id="upper" class="w-[17px] h-[17px]" />
                        <label for="upper" class="text-md text-gray-500">One uppercase letter</label>
                    </div>
                    <div class="flex gap-1 items-center">
                        <input type="checkbox" id="lower" class="w-[17px] h-[17px]" />
                        <label for="lower" class="text-md text-gray-500">One lowercase letter</label>
                    </div>
                    <div class="flex gap-1 items-center">
                        <input type="checkbox" id="numbers" class="w-[17px] h-[17px]" />
                        <label for="numbers" class="text-md text-gray-500">One number</label>
                    </div>
                    <div class="flex gap-1 items-center">
                        <input type="checkbox" id="One" class="w-[17px] h-[17px]" />
                        <label for="One" class="text-md text-gray-500">One special character</label>
                    </div>
                </div>
                <button type="submit" class="w-full rounded bg-red-600 py-3 mt-3 text-xl text-white font-medium border hover:border-red-600 hover:bg-white hover:text-red-400">Sign Up</button>
                <div class="mt-3">
                    <h5>
                        Already have an account? <span class="text-red-400">
                        <Link href="/login" >
                          <span>Sign In</span>
                        </Link>
                        </span>
                    </h5>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Page