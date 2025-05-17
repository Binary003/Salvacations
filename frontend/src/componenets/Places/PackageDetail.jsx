import React from "react";
import { useLocation } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

const PackageDetail = () => {
  const { handleOrderPopup } = useOutletContext();
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const {
    img,
    title,
    location,
    description,
    price,
    type,
    itinerary,
    inclusions,
    exclusions,
  } = state || {};

  if (!state)
    return (
      <div className="p-6 text-center text-gray-600">Package not found.</div>
    );

  return (
    <div className="bg-gray-50 py-10 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        {/* Image Section */}
        <div className="w-full">
          <img
            src={img}
            alt={title}
            className="w-full max-h-[450px] object-cover object-center rounded-t-xl"
          />
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
