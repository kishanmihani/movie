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
import { useEffect, useState } from "react";
import axios from "axios";
import { fetchMovies } from "../services/movie.services";
export default function Landing() {
  const [open, setOpen] = useState(false);
  const [bollywood, setBollywood] = useState([]);
  const [hollywood, setHollywood] = useState([]);
  const [korean, setKorean] = useState([]);
  const [webSeries, setWebSeries] = useState([]);

   useEffect(() => {
    axios.get("/api/bollywood").then(res => setBollywood(res.data));
    axios.get("/api/hollywood").then(res => setHollywood(res.data));
    axios.get("/api/korean").then(res => setKorean(res.data));
    axios.get("/api/webseries").then(res => setWebSeries(res.data));
    fetchMovies()
    .then((res) => {
        if (res.data.success) {
          setBollywood(res.data.movies);
          setHollywood(res.data.movies);
          setWebSeries(res.data.movies);
          setKorean(res.data.movies)
        }
      })
      .catch(console.error);
  }, []);
  return (
    <>
      <Navbar loginPopup={open} setloginPopup={setOpen} />
      <Hero />
      <TrendingSlider playList={bollywood} title="Bollywood" />
      <TrendingSlider playList={hollywood} title="Hollywood" />
      <TrendingSlider playList={korean} title="Korean Movies" />
      <TrendingSlider playList={webSeries} title="Web Series" />
      <Features />
      <Plans />
      
      <Footer />
      <LoginPopup open={open} onClose={() => setOpen(false)} />
    </>
  )
}