import React from 'react'

import { Outlet } from 'react-router-dom'
import Header from './Header/header'
import Sidebar from './sidebar'

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
        <header className='h-[20%]'>
            <Header />
        </header>
        <main className='w-full flex flex-grow h-[80%] pt-20 '>
            <div className='w-[300px]'>
                <Sidebar />
            </div>  
            <div className='flex-grow pl-4 pt-4 pr-6 min-h-screen bg-gray-500'>
                <Outlet />
            </div>
           
        </main>
    </div>
  )
}

export default Layout