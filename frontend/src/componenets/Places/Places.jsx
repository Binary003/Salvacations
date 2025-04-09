import React from "react";
import PlacesCard from "./PlacesCard";
import Img1 from "../../assets/Places/boat.jpg";
import Img2 from "../../assets/Places/tajmahal.jpg";
import Img3 from "../../assets/Places/water.jpg";
import Img4 from "../../assets/Places/place4.jpg";
import Img5 from "../../assets/Places/place5.jpg";
import Img6 from "../../assets/Places/place6.jpg";

const PlacesData = [
  {
    img: Img1,
    title: "Boat tour",
    location: "USA",
    description:
      "The United States of America (USA) is a large and diverse country in North America, consisting of 50 states and a federal district (Washington, D.C.). ",
    price: 100,
    type: "Cultural Relax",
  },
  {
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The United States of America (USA) is a large and diverse country in North America, consisting of 50 states and a federal district (Washington, D.C.). ",
    price: 6700,
    type: "Cultural Relax",
  },
  {
    img: Img3,
    title: "Boat tour",
    location: "USA",
    description:
      "The United States of America (USA) is a large and diverse country in North America, consisting of 50 states and a federal district (Washington, D.C.). ",
    price: 100,
    type: "Cultural Relax",
  },
  {
    img: Img4,
    title: "Boat tour",
    location: "USA",
    description:
      "The United States of America (USA) is a large and diverse country in North America, consisting of 50 states and a federal district (Washington, D.C.). ",
    price: 100,
    type: "Cultural Relax",
  },
  {
    img: Img5,
    title: "Boat tour",
    location: "USA",
    description:
      "The United States of America (USA) is a large and diverse country in North America, consisting of 50 states and a federal district (Washington, D.C.). ",
    price: 100,
    type: "Cultural Relax",
  },
  {
    img: Img6,
    title: "Boat tour",
    location: "USA",
    description:
      "The United States of America (USA) is a large and diverse country in North America, consisting of 50 states and a federal district (Washington, D.C.). ",
    price: 100,
    type: "Cultural Relax",
  },
];
const Places = ({ handleOrderPopup }) => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          Best Places to visit
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {PlacesData.map((item, index) => (
            <PlacesCard
              handleOrderPopup={handleOrderPopup}
              key={index}
              {...item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
