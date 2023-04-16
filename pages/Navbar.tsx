import { ConnectButton } from '@rainbow-me/rainbowkit'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex flex-col justify-center p-10 bg-black1'>
        <div className='flex flex-row justify-between border-b border-b-grey2  pb-[20px]'>
            <label className=''>Flow Money</label>

            <div className='space-x-10'>
                <button>Home</button>
                <button>About Us</button>
                <button>Planning</button>
                <button>Subscription</button>
                <button>Swap</button>
                <button>Stake</button>
            </div>

            <div className=''>
                <ConnectButton />
            </div>

        </div>

        <div className='flex flex-col mb-[20px]'>
            <label className='mt-[30px]'>Overview/Salary</label>
            <br/>
            <label className='text-3xl font-semibold'>Welcome, Ankush</label>
            <label>We are here to help manage your money</label>
        </div>

        <div className='flex flex-row justify-between w-[400px] pb-[10px] border-b border-b-grey2'>
            <button>Overview</button>
            <button>Analytics</button>
            <button>Events</button>
            <button>Message</button>
        </div>
    </div>
  )
}

export default Navbar