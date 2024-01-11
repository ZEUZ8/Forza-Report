import { useState } from 'react'
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import DashBoardPage from './pages/admin/DashBoardPage'

const App = () => {
  return (
    <BrowserRouter>
      <main className='max-w-full p-6'>
        <Routes>
          <Route path='/admin' element={< DashBoardPage />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
