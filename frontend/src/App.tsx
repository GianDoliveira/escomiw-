import Home from "./Components/Home/Home"
import Navbar from "./Components/Fixed/Navbar"
import Footer from "./Components/Fixed/Footer"

function App() {
  return (
    <main className="m-0 p-0 box-border w-full container">
      <Navbar />
      <Home />
      <Footer/>
    </main>
  )
}

export default App
