import React from 'react'
import Navbar from './Navbar'
import List from './List'
const Homepage = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>

        <div className='flex flex-row space-x-[50px] px-[100px] mb-[50px]'>
            <div className='flex flex-col bg-white1 text-black1 rounded-xl p-8 w-[450px]'>
                <label className='text-2xl'>Total Balance</label>
                <label className='text-sm mb-[10px]'>1 January - 31 December 2023</label>
                <hr/>
                <label className='text-2xl font-semibold mt-[10px]'>$983,000</label>
                <label>+17% last year</label>
            </div>

            <div className='flex flex-col bg-white1 text-black1 rounded-xl p-8 w-[450px]'>
                <label className='text-2xl'>Total Income</label>
                <label className='text-sm mb-[10px]'>1 January - 31 January 2023</label>
                <hr/>
                <label className='text-2xl font-semibold mt-[10px]'>$576,000</label>
                <label>+27% last month</label>
            </div>

            <div className='flex flex-col bg-white1 text-black1 rounded-xl p-8 w-[450px]'>
                <label className='text-2xl'>Total Expends</label>
                <label className='text-sm mb-[10px]'>1 January - 31 January 2023</label>
                <hr/>
                <label className='text-2xl font-semibold mt-[10px]'>$127,000</label>
                <label>-13% last month</label>
            </div>
        </div>

        <div className='flex flex-row space-x-[50px] px-[100px]'>

            <div className='flex flex-col bg-white1 text-black1 rounded-xl p-8 w-[550px]'>
                <label className='text-2xl'>Revenue Transaction</label>
                <label className='text-sm mb-[10px]'>Latest transations all the time</label>
                <hr/>
                <label className='text-2xl font-semibold mt-[10px]'>Chart</label>
            </div>

            <div className='flex flex-col bg-white1 text-black1 rounded-xl p-8 w-[850px]'>
                <label className='text-2xl'>Last Transaction</label>
                <label className='text-sm mb-[10px]'>Latest transations all the time</label>
                <div className='flex flex-row justify-between'>
                    <button className='w-[120px] text-left'>NAME</button>
                    <button className='w-[140px] text-left'>TYPE</button>
                    <button className='w-[80px]'>DATE</button>
                    <button>AMOUNT</button>
                    <button>STATUS</button>
                </div>
                <hr/>
                <List/>
            </div>

        </div>
    </div>
  )
}

export default Homepage