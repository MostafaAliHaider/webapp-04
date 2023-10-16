

import { counterContextProvider } from '@/app/testContext/page'
import React, { ReactNode, createContext, useContext, useState } from 'react'



export const CountContext = ({children}: {children: ReactNode}) => {
    const [count, setCount, increaseHandler, decreaseHandler] = useContext(counterContextProvider)

    
  return (
    <div>
        <p>{count}</p>
                <div className='flex gap-10'>
                    <button type="button" onClick={increaseHandler}>Increase</button>
                    <button type="button" onClick={decreaseHandler}>Decrease</button>

                </div>
    </div>
  )
}
