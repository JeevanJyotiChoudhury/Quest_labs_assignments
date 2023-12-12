import React from 'react'
import Message from '../Components/Message'
import { Route, Routes } from 'react-router-dom'
import Help from '../Components/Help'
import News from '../Components/News'
import HomePage from './HomePage'

const AllPages = () => {
  return (
    <Routes>
      
      <Route path="/" element={<HomePage/>}/>
      <Route path="/messages" element={<Message/>}/>
      <Route path="/help" element={<Help/>}/>
      <Route path="/news" element={<News/>}/>
    </Routes>
  )
}

export default AllPages