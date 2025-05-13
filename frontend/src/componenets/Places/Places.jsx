import React from "react";
import { Link } from "react-router-dom";
import PlacesCard from "./PlacesCard";
import Img1 from "../../assets/Places/boat.jpg";
import Img2 from "../../assets/Places/tajmahal.jpg";
import Img3 from "../../assets/Places/water.jpg";
import Img4 from "../../assets/Places/place4.jpg";
import Img5 from "../../assets/Places/place5.jpg";
import Img6 from "../../assets/Places/place6.jpg";

const PlacesData = [
  {
    id: 1,
    img: Img1,
    title: "Boat tour",
    location: "USA",
    description:
      "A US boat tour offers a unique perspective of cities, landscapes, and waterways, combining sightseeing with a relaxing aquatic experience. These tours often feature guided narration, highlighting local history, landmarks, and interesting facts about the area. From the iconic Manhattan skyline to the charming Mississippi River, boat tours provide memorable travel experiences.",
    price: 100,
    type: "Cultural Relax",
    itinerary: [
      "Arrival and check-in at lakeside hotel",
      "Morning boat cruise",
      "Evening city tour",
    ],
    inclusions: ["Boat ride", "Hotel stay", "City guide"],
    exclusions: ["Airfare", "Personal expenses"],
  },
  {
    id: 2,
    img: Img2,
    title: "Taj Mahal",
    location: "India",
    description:
      "The Taj Mahal is a stunning symbol of love and architectural beauty, located in Agra, India.",
    price: 6700,
    type: "Cultural Relax",
    itinerary: [
      "Arrival at Agra",
      "Visit Taj Mahal & Agra Fort",
      "Evening local market tour",
    ],
    inclusions: ["Hotel", "Guide", "Monument entry tickets"],
    exclusions: ["Meals", "Travel insurance"],
  },
  {
    id: 3,
    img: Img3,
    title: "Water Adventure",
    location: "USA",
    description:
      "Enjoy thrilling water sports and breathtaking ocean views in some of the best beaches across the USA.",
    price: 100,
    type: "Adventure",
    itinerary: [
      "Beach arrival and safety briefing",
      "Water sports session",
      "Bonfire and dinner by the beach",
    ],
    inclusions: ["Surf board rental", "Lunch", "Safety gear"],
    exclusions: ["Flights", "Accommodation"],
  },
  {
    id: 4,
    img: Img4,
    title: "Historic Fort",
    location: "India",
    description:
      "Step into history with a tour of India's ancient forts, rich with tales of kings and warriors.",
    price: 1500,
    type: "Heritage Tour",
    itinerary: [
      "Drive to fort city",
      "Guided fort exploration",
      "Cultural performance in evening",
    ],
    inclusions: ["Entry fees", "Tour guide", "Snacks"],
    exclusions: ["Transport", "Souvenirs"],
  },
  {
    id: 5,
    img: Img5,
    title: "Mountain Retreat",
    location: "Himalayas",
    description:
      "Relax in the serene beauty of the Himalayan mountains, perfect for meditation and spiritual escape.",
    price: 4200,
    type: "Wellness",
    itinerary: [
      "Yoga and meditation session",
      "Nature walks",
      "Campfire & local dinner",
    ],
    inclusions: ["Lodging", "All meals", "Yoga instructor"],
    exclusions: ["Travel costs", "Personal spa services"],
  },
  {
    id: 6,
    img: Img6,
    title: "Desert Safari",
    location: "Rajasthan",
    description:
      "Ride the dunes, explore ancient palaces, and experience vibrant Rajasthani culture in a desert safari.",
    price: 3100,
    type: "Adventure",
    itinerary: [
      "Camel ride through the dunes",
      "Dinner with cultural performances",
      "Overnight stay in desert camp",
    ],
    inclusions: ["Camel ride", "Dinner", "Camp stay"],
    exclusions: ["Transport to desert", "Shopping expenses"],
  },
];

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
      </div>
    </div>
  );
};

export default Places;
