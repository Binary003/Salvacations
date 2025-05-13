import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const PlacesCard = ({
  img,
  title,
  location,
  description,
  price,
  type,
  id,
  itinerary,
  inclusions,
  exclusions,
}) => {
  return (
    <Link
      to={`/package/${id}`}
      state={{
        img,
        title,
        location,
        description,
        price,
        type,
        itinerary,
        inclusions,
        exclusions,
      }}
      className="shadow-lg transition-all duration-500 hover:shadow-xl cursor-pointer block"
    >
      <div className="overflow-hidden">
        <img
          src={img}
          alt=""
          className="mx-auto h-[220px] w-full object-cover transition duration-700 hover:scale-110"
        />
      </div>
      <div className="space-y-2 p-3">
        <h1 className="line-clamp-1 font-bold text-xl">{title}</h1>
        <div className="flex items-center gap-2 opacity-70">
          <IoLocationSharp />
          <span>{location}</span>
        </div>
        <p className="line-clamp-2">{description}</p>
        <div className="flex items-center justify-between border-t-2 !mt-3">
          <div className="opacity-70">
            <p>{type}</p>
          </div>
          <div>
            <p className="text-2xl font-bold ">₹{price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default PlacesCard;
