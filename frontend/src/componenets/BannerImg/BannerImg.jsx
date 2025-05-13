import React from "react";

const BannerImg = ({ img }) => {
  return (
    <div
      data-aos="zoom-in"
      className="w-full relative pt-[56.25%] sm:pt-[40%] md:pt-[30%] lg:pt-[25%] xl:pt-[20%]"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
    </div>
  );
};

export default BannerImg;
