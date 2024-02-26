import { Header } from "./components/Header";
import { Artwork } from "./components/Artwork";
import { Divider } from "./components/Divider";
import { Resume } from "./components/Resume";
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Thanks } from "./components/Thanks";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <div className="bg-zinc-800 max-w-[1280px] m-auto font-spaceMono flex flex-col gap-4 p-4 border-x border-purple-100 border-opacity-10">
      <Router>
        <Header/>
        <Divider/>
        <Resume/>
        <div className="h-11 bg-opacity-40 flex items-center justify-center gap-7 z-10 text-purple-100 font-semibold mt-6 sticky top-0 bg-zinc-800">
          <Link to="/" className="hover:text-purple-500 transition flex items-center">Artwork</Link>
          <Link to="/about" className="hover:text-purple-500 transition flex items-center">About Me</Link>
          <Link to="/contact" className="hover:text-purple-500 transition flex items-center">Contact</Link>
        </div>

        <Routes>
            <Route path="/" element={ <Artwork/> }/>
            <Route path='/about' element={ <About/> }></Route>
            <Route path='/contact' element={ <Contact/> }></Route>
            <Route path="/thanks" element={ <Thanks/> }></Route>
        </Routes>
        <Divider/>
        <Cards/>
        <Footer/>
      </Router>
    </div>
  )
}
