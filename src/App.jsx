import { Header } from "./components/Header";
import { Artwork } from "./components/Artwork";
import { Divider } from "./components/Divider";
import { Card } from "./components/Card";
import { Route, BrowserRouter as Router, Link, Routes } from "react-router-dom";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Thanks } from "./components/Thanks";

export function App() {
  return (
    <div className="bg-zinc-800 max-w-[1280px] m-auto font-spaceMono flex flex-col gap-4 p-4">
      <Router>
        <Header/>
        <Divider/>
        <Card/>
        <div className="h-11 bg-opacity-40 flex items-center justify-center gap-7 z-10 text-purple-100 font-semibold mt-6 sticky top-0 bg-zinc-800">
          <Link to="/" className="hover:text-purple-500 transition flex items-center gap-2">Artwork</Link>
          <Link to="/about" className="hover:text-purple-500 transition flex items-center gap-2">About Me</Link>
          <Link to="/contact" className="hover:text-purple-500 transition flex items-center gap-2">Contact</Link>
        </div>

        <Routes>
            <Route path="/" element={ <Artwork/> }/>
            <Route path='/about' element={ <About/> }></Route>
            <Route path='/contact' element={ <Contact/> }></Route>
            <Route path="/thanks" element={ <Thanks/> }></Route>
        </Routes>
      </Router>
    </div>
  )
}
