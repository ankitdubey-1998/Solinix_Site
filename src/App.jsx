import { Route, Routes, useLocation } from "react-router-dom"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Blog from "./pages/Blog"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Services from "./pages/Services"
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import Blogdetail from "./pages/Blogdetail"
import Privacy from "./pages/Privacy"
import Terms from "./pages/Terms"
import Cookies from "./pages/Cookies"
import ScrollToTop from "./components/ScrollToTop"


const App = () => {

  const location = useLocation();

  return (
    <div className="h-screen flex-1 pt-24">

      <Navbar />
       <ScrollToTop />
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/products' element={<Products />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog/:slug' element={<Blogdetail />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/cookies' element={<Cookies />} />
      </Routes>
      <Footer />

    </div>
  )
}

export default App