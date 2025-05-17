import React from "react";
import { useLocation } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Custom arrows for the slider
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button 
      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/60 hover:bg-white/80 p-2 rounded-full shadow-md"
      onClick={onClick}
    >
      <FaChevronLeft className="text-gray-800" />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button 
      className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/60 hover:bg-white/80 p-2 rounded-full shadow-md"
      onClick={onClick}
    >
      <FaChevronRight className="text-gray-800" />
    </button>
  );
};

const PackageDetail = () => {
  const { handleOrderPopup } = useOutletContext();
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    img,
    images = [],
    title,
    location,
    description,
    price,
    type,
    itinerary,
    inclusions,
    exclusions,
  } = state || {};

  // If no images array is provided, use the single image
  const imageArray = images.length > 0 ? images : img ? [img] : [];

  // Settings for the image carousel
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  if (!state)
    return (
      <div className="p-6 text-center text-gray-600">Package not found.</div>
    );

  return (
    <div className="bg-gray-50 py-10 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Image Carousel Section */}
        <div className="w-full max-h-[450px]">
          <Slider {...sliderSettings} className="package-slider">
            {imageArray.map((image, index) => (
              <div key={index} className="outline-none">
                <img
                  src={image}
                  alt={`${title} - image ${index + 1}`}
                  className="w-full h-[450px] object-cover object-center"
                />
              </div>
            ))}
          </Slider>
        </div>

        {/* Content Section */}
        <div className="p-6 space-y-6">
          {/* Title and Location */}
          <div>
            <h1 className="text-4xl font-bold text-gray-800">{title}</h1>
            <div className="flex items-center gap-2 text-gray-600 mt-1">
              <IoLocationSharp />
              <span className="text-lg">{location}</span>
            </div>
          </div>

          {/* Type and Price */}
          <div className="flex flex-wrap gap-4 text-sm font-medium">
            <span className="bg-blue-100 text-blue-800 px-4 py-1 rounded-full">
              {type}
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full">
              ₹{price}
            </span>
          </div>

          {/* Description */}
          {description && (
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                Overview
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                {description}
              </p>
            </div>
          )}

          {/* Itinerary */}
          {itinerary?.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                Itinerary
              </h2>
              {itinerary.map((item, index) => (
                <p key={index} className="text-gray-700 mb-2">
                  Day {index + 1}: {item}
                </p>
              ))}
            </div>
          )}

          {/* Inclusions */}
          {inclusions?.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                Inclusions
              </h2>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                {inclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Exclusions */}
          {exclusions?.length > 0 && (
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-gray-800">
                Exclusions
              </h2>
              <ul className="list-disc ml-5 text-gray-700 space-y-1">
                {exclusions.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Book Now Button */}
          <div className="pt-4">
            <button
              onClick={handleOrderPopup}
              className="text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500 text-white px-6 py-3 rounded-full cursor-pointer shadow-md"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetail;
