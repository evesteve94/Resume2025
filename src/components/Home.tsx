import React, { useState } from "react";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";
import HomePage from "../pages/HomePage.tsx";
import PortfolioPage from "../pages/PortfolioPage.tsx";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<"home" | "portfolio">("home");

  return (
    <>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{currentPage === "home" ? <HomePage /> : <PortfolioPage />}</main>
      <Footer />
    </>
  );
};

export default Home;
