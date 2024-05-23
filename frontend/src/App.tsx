import Navbar from "./Components/Fixed/Navbar"
import Footer from "./Components/Fixed/Footer"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
