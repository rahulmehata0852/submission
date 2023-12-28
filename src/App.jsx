import React from 'react'
import Navbar from './pages/Navbar'
import Dashboard from './pages/Dashboard'
import Layout from './pages/Layout'
import "react-toastify/dist/ReactToastify.css"
import { ToastContainer } from 'react-toastify'

const App = () => {
  return <>
    <ToastContainer
      theme='colored'
      position='bottom-right'
      closeOnClick
      closeButton
      autoClose={2500}
    />
    <Layout />
  </>
}

export default App