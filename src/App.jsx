import React from "react";
import "./components/CustomHeader";
import './App.css'
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/Catalog";
import RoomsPage from "./pages/Rooms";
import Footer from "./components/CustomFooter";
import Header from "./components/CustomHeader";
import WhyUs from "./components/WhyUsPage";
import Numbers from "./components/NumbersPage";
import Reviews from "./components/ReviewsPage";
import HowToFindUs from "./components/HowToFindUsPage";


function App() {
  return (
    <HashRouter>

        <Header />

        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/why-us" element={<WhyUs />}/>
          <Route path="/numbers" element={<Numbers />}/>
          <Route path="/reviews" element={<Reviews />}/>
          <Route path="/how-to-find-us" element={<HowToFindUs/>}/>
          <Route path="/Catalog" element={<CatalogPage />}/>
          <Route path="/Rooms/:roomId" element={<RoomsPage />}/>
        </Routes>

        <Footer />

    </HashRouter>
  )
};

export default App
