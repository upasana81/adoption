import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layouts from './layouts/Layouts'
import Homepage from '../Homepage'



const MyRoutes = () => {
  return (
   <BrowserRouter>
   <Routes>
      <Route path='/' element={<Layouts/>}>
      <Route path='/' element={<Homepage/>}/>
      </Route>
   </Routes>
   </BrowserRouter>
  )
}

export default MyRoutes