import React from 'react';
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Preloader from "./components/Preloader";

export default function App() {
  return (
    <div className="min-h-screen bg-[#070A12] flex flex-col justify-between text-slate-100">
      <Preloader />
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
