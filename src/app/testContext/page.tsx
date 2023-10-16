"use client"

import { CountContext } from '@/components/context/countContext'
import React, { createContext, useContext, useState } from 'react'

export const counterContextProvider = createContext();

const Page = () => {

    const [count, setCount] = useState(0); 
    
    const increaseHandler = () => {
        setCount(count + 1)
    }

    const decreaseHandler = () => {
        setCount(count - 1)
    }
    return (
        
        <div className='flex flex-col justify-center items-center'>
            
        <counterContextProvider.Provider value={[count, setCount, increaseHandler, decreaseHandler]}>
            <CountContext/>
        </counterContextProvider.Provider>
        </div>
  )
}

export default Page