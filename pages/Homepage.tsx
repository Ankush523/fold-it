import React from 'react'
import Navbar from './Navbar'
import List from './List'
import Image from 'next/image'
import graph from './graph.png'
import wallet from './wallet.png'
const Homepage = () => {
  return (
    <div className='flex flex-col'>
        <div className='bg-white2'>
            <Navbar/>
        </div>

        <div className='flex flex-row space-x-[50px] px-[100px] pb-[40px] bg-white2 pt-[20px]'>
            <div className='flex flex-col bg-white1 text-black1 rounded-2xl p-8 w-[450px] shadow-xl'>
                <div className='flex flex-row justify-between'>
                    <label className='text-2xl'>Total Balance</label>
                    <Image src={wallet} alt="wallet" className='h-[30px] w-[35px] bg-blue1/10 mr-[10px] px-1 py-[2px] rounded-lg'/>
                </div>
                <label className='text-sm mb-[10px] text-silver'>1 January - 31 December 2023</label>
                <hr/>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <label className='text-2xl font-semibold mt-[10px]'>$983,000</label>
                        <label className='text-green1'>+17% last year</label>
                    </div>
                    <Image src={graph} alt="graph" className='h-[80px] w-[150px]'/>
                </div>
            </div>

            <div className='flex flex-col bg-white1 text-black1 rounded-2xl p-8 w-[450px] shadow-xl'>
                <label className='text-2xl'>Total Income</label>
                <label className='text-sm mb-[10px] text-silver'>1 January - 31 January 2023</label>
                <hr/>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <label className='text-2xl font-semibold mt-[10px]'>$576,000</label>
                        <label className='text-green1'>+27% last year</label>
                    </div>
                    <Image src={graph} alt="graph" className='h-[80px] w-[150px]'/>
                </div>
            </div>

            <div className='flex flex-col bg-white1 text-black1 rounded-2xl p-8 w-[450px] shadow-xl'>
                <label className='text-2xl'>Total Expends</label>
                <label className='text-sm mb-[10px] text-silver'>1 January - 31 January 2023</label>
                <hr/>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <label className='text-2xl font-semibold mt-[10px]'>$127,000</label>
                        <label className='text-red1'>-13% last year</label>
                    </div>
                    <Image src={graph} alt="graph" className='h-[80px] w-[150px]'/>
                </div>
            </div>
        </div>

        <div className='flex flex-row space-x-[50px] px-[100px] bg-white2 pb-[20px]'>

            <div className='flex flex-col bg-white1 text-black1 rounded-2xl p-8 w-[550px] shadow-2xl'>
                <label className='text-2xl'>Revenue Transaction</label>
                <label className='text-sm mb-[10px] text-silver'>Latest transations all the time</label>
                <hr/>
            </div>

            <div className='flex flex-col bg-white1 text-black1 rounded-2xl p-8 w-[850px] shadow-2xl'>
                <label className='text-2xl'>Last Transaction</label>
                <label className='text-sm mb-[10px] text-silver pb-[10px]'>Latest transations all the time</label>
                <div className='flex flex-row justify-between text-silver'>
                    <button className='w-[110px] text-left'>NAME</button>
                    <button className='w-[130px] text-left'>TYPE</button>
                    <button className='w-[70px]'>DATE</button>
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