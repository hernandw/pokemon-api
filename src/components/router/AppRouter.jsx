import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import Detalles from '../../pages/Detalles'

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='pokemon/:id' element={<Detalles />} />
      </Routes>
    </div>
  )
}

export default AppRouter
