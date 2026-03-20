import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Layout from "./Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Artists from "./pages/Artists";
import Label from "./pages/Label";
import News from "./pages/News";
import ArtistsDetail from "./pages/ArtistsDetail";
import Contact from "./components/Contact";
import ArticleDetail from "./pages/ArticleDetail";

import "./Style.css";

function App(){
  function ScrollToTop(){
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }
  useEffect(() => {
      const cursor = document.querySelector(".cursor");
      const moveCursor = (e) => {
        cursor.style.left = e.clientX + "px";
        cursor.style.top = e.clientY + "px";
      };
      window.addEventListener("mousemove", moveCursor);
      return () => window.removeEventListener("mousemove", moveCursor);
    }, []);
  
  return(
    <>
      <div className="cursor"></div>
      
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/artists/:id" element={<ArtistsDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/label" element={<Label />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<ArticleDetail />} />
        </Route>
      </Routes>
    </>
  )
};

export default App;