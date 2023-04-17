import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col justify-center py-[50px] mx-[10px] my-[10px] px-[90px] bg-black1 rounded-xl bg-gradient-to-r from-black1 via-purple-900 to-blac1'>
        <div className='flex flex-row justify-between border-b border-b-grey2  pb-[20px]'>
            <label className='text-2xl font-bold'>Flow Money</label>

            <div className='space-x-10'>
                <button>Home</button>
                <button className='text-silver'>About Us</button>
                <button className='text-silver'>Planning</button>
                <button className='text-silver'>Subscription</button>
                <button className='text-silver'>Swap</button>
                <button className='text-silver'>Stake</button>
            </div>

            <div className=''>
                <ConnectButton />
            </div>

        </div>

        <div className='flex flex-col mb-[20px]'>
            <div className='flex flex-row mb-[30px]'>
                <label className='mt-[30px] text-silver'>Overview</label>
                <label className='mt-[30px]'>/Salary</label>
            </div>
            <br/>
            <label className='text-4xl font-semibold'>Welcome, Ankush</label>
            <label className='text-silver'>We are here to help manage your money</label>
        </div>

        <div className='flex flex-row justify-between w-[400px] mt-[30px] pb-[10px] border-b border-b-grey2'>
            <button>Overview</button>
            <button className='text-silver'>Analytics</button>
            <button className='text-silver'>Events</button>
            <button className='text-silver'>Message</button>
        </div>
    </div>
  )
}

export default Navbar