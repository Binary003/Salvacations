import React from "react";
import { Link } from "react-router-dom";
import PlacesCard from "./PlacesCard";
// Import package data from the new files
import { PlacesData, DomesticIndiaData } from "../../data/packages";

const Places = ({ handleOrderPopup }) => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to Visit
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((item) => (
            <Link
              key={item.id}
              to={`/package/${item.id}`}
              state={item}
              className="block transform transition-all duration-500 hover:scale-105"
            >
              <PlacesCard handleOrderPopup={handleOrderPopup} {...item} />
            </Link>
          ))}
        </div>

        {/* Domestic India Packages Section */}
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold mt-12">
          Domestic India Packages
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {DomesticIndiaData.map((item) => (
            <Link
              key={item.id}
              to={`/package/${item.id}`}
              state={item}
              className="block transform transition-all duration-500 hover:scale-105"
            >
              <PlacesCard handleOrderPopup={handleOrderPopup} {...item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
