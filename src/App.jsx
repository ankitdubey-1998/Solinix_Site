
import { Route, Routes, useLocation  } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import ScrollToTop from "./components/ScrollToTop"
import CursorGlow from "./components/CursorGlow"


const App = () => {

  const location = useLocation();

  return (
    <div className="h-screen flex-1 pt-24">
      <CursorGlow />
      <Navbar />
       <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />





    </div>
  )
}

export default App


