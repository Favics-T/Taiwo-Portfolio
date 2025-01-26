import React from "react";
import{HashRouter as Router,Routes,Route,Outlet} from 'react-router-dom'
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import HireMe from "./Pages/HireMe";

const Layout = ()=>{
  return(
  <>
  <Nav />
  <Outlet />
  
  </>)
}
// #07091b
function App(){
  return(
    <div className="bg-black text-black max-w-full overflow-hidden overflow-y-scroll">
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />}/>
        <Route  path="resume" element={<Resume />}/>
        <Route path="hireme" element={<HireMe />}/>

        </Route>
      </Routes>
    </Router>
    </div>

  )
}

export default App