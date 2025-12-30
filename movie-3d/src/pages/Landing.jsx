import Navbar from "../component/Navbar";
import Hero from "../component/Hero";
import Features from "../component/Features";
import Plans from "../component/Plans";
import Footer from "../component/Footer";
import TrendingSlider from "../component/TrendingSlider";

export default function Landing() {
  return (
    <>
      <Navbar />
      <Hero />
      <TrendingSlider />
      <Features />
      <Plans />
      
      <Footer />
    </>
  )
}