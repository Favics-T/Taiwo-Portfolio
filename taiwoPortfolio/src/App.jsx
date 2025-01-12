import React from "react";
import{HashRouter as Router,Routes,Route,Outlet} from 'react-router-dom'
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";

const Layout = ()=>{
  return(
  <>
  <Nav />
  <Outlet />
  <Footer />
  </>)
}

function App(){
  return(
    <div className="bg-black text-white">
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />


        </Route>
      </Routes>
    </Router>
    </div>

  )
}

export default App