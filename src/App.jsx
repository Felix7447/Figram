import React, { useContext } from 'react'
import './styles/App.css'
import { RouterProvider } from "react-router-dom";
import { router } from './routes/router';
import { Context } from './context/context';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
