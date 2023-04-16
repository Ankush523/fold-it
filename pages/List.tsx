import Image from 'next/image'
import React from 'react'
import {data} from './data'
const List = () => {
  return (
    <div>
        {data.map((transaction) => {
            const{id,name,txid,type,date,amount,status} = transaction
            return (
                <article key={id} className='flex flex-row mt-[10px] justify-between'>
                    <div className='flex flex-col '>
                        <p className='text-black1'>{name}</p>
                        <p className='text-black1 text-xs'>{txid}</p>
                    </div>
                    <p className='text-black1 text-sm mt-[5px] w-[150px]'>{type}</p>
                    <p className='text-black1 text-sm mt-[5px]'>{date}</p>
                    <p className='text-black1 text-sm mt-[5px]'>{amount}</p>
                    <p className='text-black1 text-sm mt-[5px]'>{status}</p>
                </article>
            )
        })}
    </div>
  )
}

export default List