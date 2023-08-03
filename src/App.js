import logo from './logo.svg'
import './App.css'
import './css/main.css'
import Mainpage from './components/Mainpage'
import NavBar from './components/NavBar'
import 'font-awesome/css/font-awesome.min.css'
import { useState } from 'react'
function App() {
  const [islogin, setIsLogin] = useState(false)
  return (
    <>
      <NavBar islogin={islogin} setIsLogin={setIsLogin} />
      <Mainpage />
    </>
  )
}

export default App
