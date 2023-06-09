import React, { useState, useEffect } from "react";
import Nav from "../Components/nav";
import Card from "../Components/card";
import Grid from "../Components/grid";
import Footer from "../components/Footer";
import Joinus from "../Components/Joinus";
import HeroVideo from "../components/HeroVideo";
import { music } from "../assets";
import ReactPlayer from "react-player";
import { Asset_15, Asset_16 } from "../assets";
const Homepage = () => {
  const [playing, setPlaying] = useState(false);

  const toggleAudio = () => {
    setPlaying(!playing);
  };
  useEffect(() => {
    window.onbeforeunload = function () {
      window.scrollTo(0, 0);
    };
  }, []);
  const SoundOnPNG = () => (
    <img src={Asset_15} alt="Sound On" width="15" height="15" />
  );

  const SoundOffPNG = () => (
    <img src={Asset_16} alt="Sound Off" width="15" height="15" />
  );

  return (
    <div>
      <ReactPlayer
        url={music}
        playing={playing}
        loop
        autoplay
        width="0"
        height="0"
      />
      <Nav />
      
      <HeroVideo />
      <Card />
      <Grid />
     
      <Joinus />
   
      <Footer />
      <button
        onClick={toggleAudio}
        class="   bottom-3 fixed right-6 px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-white rounded-full inline-flex hover:bg-[#99EDCC] hover:border-black hover:text-black focus:outline-none lg:w-auto focus-visible:outline-white text-xs focus-visible:ring-white"
      >
        {playing ? <SoundOnPNG /> : <SoundOffPNG />}
      </button>
    </div>
  );
};

export default Homepage;
