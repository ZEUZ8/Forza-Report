import { useEffect, useState } from 'react'
import {BrowserRouter, Route,Routes } from 'react-router-dom'
import './App.css'
import DashBoardPage from './pages/admin/DashBoardPage'
import CounterPage from "./pages/admin/CouterPage"

const App = () => {
  return (
    <BrowserRouter>
      <main className={`max-w-[100%] p-6`}>
        <Routes>
          <Route path='/' element={< DashBoardPage />}></Route>
          <Route path='/Counter' element={<CounterPage/>}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
