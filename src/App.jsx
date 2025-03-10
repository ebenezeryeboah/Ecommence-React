// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from './pages/Home'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Shop from './pages/Shop'
import About from './pages/About'
import Contact from './pages/Contact'


const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/shop', element: <Shop /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> }
])
function App() {
  // const [count, setCount] = useState(0)
  // ALL CODES I HAVE COMMENTED OUT ARE ONCE THAT WE NEED TO REMOVE IT

  return (
    <>
      <RouterProvider router={
        router
      } />
    </>
  )
}

export default App
