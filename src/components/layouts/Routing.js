import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from "../pages/About";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Search from "../pages/Search";



function Routing(){
  return(
      <div>
            <React.Fragment>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="search" element={<Search />} />
                    <Route path="aboutus" element={<About />} />
                    <Route path="/search/detail" element={<Detail />} />
                </Routes>
            </React.Fragment>
      </div>
  )
}

export default Routing;