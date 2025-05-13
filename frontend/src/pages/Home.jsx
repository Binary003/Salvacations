import React from "react";
import MainVid from "../assets/video/main.mp4";
import Hero from "../componenets/Hero/Hero";
import Places from "../componenets/Places/Places";
import BannerImg from "../componenets/BannerImg/BannerImg";
import Poster from "../assets/cover-women.jpg";
import Banner2 from "../assets/travel-cover2.jpg";
import Blogs from "./Blogs";
import Banner from "../componenets/Banner/Banner";
import Testimonial from "../componenets/Testimonial/Testimonial";
import Popup from "../componenets/Popup/Popup";
import OfferStrip from "../componenets/OfferStrip/OfferStrip";
const Home = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  return (
    <>
      <div>
        <div className="relative h-[700px]">
          <video
            autoPlay
            loop
            muted
            className="absolute right-0 top-0 h-[700px] w-full object-cover z-[-1]"
          >
            <source src={MainVid} type="video/mp4" />
          </video>
          <Hero />
        </div>
        <Places handleOrderPopup={handleOrderPopup} />
        <OfferStrip />
        <BannerImg img={Poster} />
        <OfferStrip />
        <Blogs />
        <Banner />
        <OfferStrip />
        <BannerImg img={Banner2} />
        <OfferStrip />
        <Testimonial />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default Home;
