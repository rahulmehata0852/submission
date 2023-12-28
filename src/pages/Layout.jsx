import React from 'react'
import Navbar from './Navbar'
import Dashboard from './Dashboard'
import Home from './Home'

const Layout = () => {
    return <>
        <div className="   flex  ">

            <Dashboard />
            <div className="w-100 flex-1">
                <Navbar />
                <Home />
            </div>

        </div>
    </>
}

export default Layout