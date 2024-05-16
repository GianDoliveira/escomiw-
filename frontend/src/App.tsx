import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom"

function App() {
  return (
    <main className="m-0 p-0 box-border w-full container">
      <Navbar />
      <Outlet/>
      <Footer/>
    </main>
  )
}

export default App
