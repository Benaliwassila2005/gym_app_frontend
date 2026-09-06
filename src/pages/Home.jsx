import React from "react";
import NavBar from "../components/NavBar";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import About from "../components/About";
import Services from "../components/Services";
import JoinUs from "../components/JoinUs";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
      <NavBar></NavBar>
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <About></About>
      <Services></Services>
      <JoinUs></JoinUs>
      <Footer></Footer>
    </>
  );
}

export default Home;
