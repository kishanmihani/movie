import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Features from "../component/Features";
import Plans from "../component/Plans";
import Footer from "../component/Footer";
import TrendingSlider from "../component/TrendingSlider";
import Bollywood from "../data/Bollywood.json"
import Hollywood from "../data/Hollywood.json"
import KorenMovie from "../data/KorenMovies.json"
import WebSeries from "../data/WebSeries.json"
import LoginPopup from "./Login";
import { useState } from "react";
export default function Landing() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar loginPopup={open} setloginPopup={setOpen} />
      <Hero />
      <TrendingSlider playList={Bollywood} />
      <TrendingSlider playList={Hollywood} />
      <TrendingSlider playList={KorenMovie} />
      <TrendingSlider playList={WebSeries} />
      <Features />
      <Plans />
      
      <Footer />
      <LoginPopup open={open} onClose={() => setOpen(false)} />
    </>
  )
}