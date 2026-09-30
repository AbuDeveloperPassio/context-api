import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import React from 'react';
import Favourites from "./pages/Favourites";
import AddStudent from "./pages/AddStudent";

export default function App() {
  return (
    <>
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/add" element={<AddStudent />} />
        </Routes>
      </main>
    </>
  );
}