import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import NavBar from './components/NavBar'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <NavBar></NavBar>

   <h2>hello from app </h2>
    
    </>
  )
}
export default App 