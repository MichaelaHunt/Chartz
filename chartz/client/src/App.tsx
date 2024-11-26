import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <div>
      <main className="container container-fluid mt-5">
        <Outlet />
      </main>
    </div>
  )
}

export default App
