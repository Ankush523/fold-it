import React from 'react'
import Navbar from './Navbar'
import List from './List'
import Image from 'next/image'
import graph from './graph.png'
import wallet from './wallet.png'
import Link from 'next/link'
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
                <label className='text-sm mb-[10px] text-silver'>1 April - 30 April 2023</label>
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
                <label className='text-2xl'>Subscriptions</label>
                <label className='text-sm mb-[10px] text-silver'>1 April - 30 April 2023</label>
                <hr/>
                <div className='flex flex-row justify-between'>
                    <button className='text-blue1 bg-blue1/10 px-[20px] my-[15px] rounded-lg'>Continue to Subs. page</button>
                    <Image src={graph} alt="graph" className='h-[80px] w-[150px]'/>
                </div>
            </div>
        </div>

        <div className='flex flex-row space-x-[50px] px-[100px] bg-white2 pb-[20px]'>

            <div className='flex flex-col bg-white1 text-black1 rounded-2xl p-8 w-[550px] shadow-2xl'>
                <label className='text-2xl'>Flow DEX</label>
                <label className='text-sm mb-[10px] text-silver'>Loans, Wrap/Unwrap, Faucet and more</label>
                <hr/>
                <p className='mt-[15px] text-lg'>Realtime staking platform that allows you to stake your assets in the POLYGON chain.</p>
                <p className='text-lg'>Get staking rewards directly streamed to your wallet per second</p>
                <button className='mt-[20px] text-blue1 bg-blue1/10 py-[5px] rounded-lg'><Link href="https://straker-mocha.vercel.app/">Proceed to DEX</Link></button>
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