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

const DomesticIndiaData = [
  {
    id: 101,
    img: Img2,
    title: "Taj Mahal Tour",
    location: "Agra, India",
    description:
      "Witness the majestic Taj Mahal and immerse in the charm of Mughal architecture.",
    price: 5999,
    type: "Heritage",
    itinerary: ["Day 1: Arrival", "Day 2: Taj Mahal & Fort", "Day 3: Return"],
    inclusions: ["Hotel", "Guide", "Entry Tickets"],
    exclusions: ["Meals", "Travel insurance"],
  },
  {
    id: 102,
    img: Img4,
    title: "Historic Forts of India",
    location: "Gwalior, India",
    description:
      "Explore India's ancient forts that tell tales of valor and history.",
    price: 3499,
    type: "Historic",
    itinerary: ["Arrival", "Fort Tour", "Cultural Evening"],
    inclusions: ["Guide", "Snacks", "Entry Passes"],
    exclusions: ["Travel fare", "Shopping expenses"],
  },
  {
    id: 103,
    img: Img5,
    title: "Himalayan Wellness Retreat",
    location: "Himalayas",
    description:
      "Reconnect with your inner self in the peaceful and scenic Himalayas.",
    price: 6999,
    type: "Wellness",
    itinerary: ["Meditation", "Yoga", "Nature Walks"],
    inclusions: ["Stay", "Meals", "Instructors"],
    exclusions: ["Spa", "Travel costs"],
  },
  {
    id: 104,
    img: Img6,
    title: "Rajasthan Desert Safari",
    location: "Jaisalmer, Rajasthan",
    description:
      "Experience camel rides, cultural nights, and the vast golden desert.",
    price: 4999,
    type: "Adventure",
    itinerary: ["Camel Safari", "Campfire", "Stay in Desert Camp"],
    inclusions: ["Camp stay", "Cultural show", "Dinner"],
    exclusions: ["Travel", "Personal shopping"],
  },
  {
    id: 105,
    img: Img3,
    title: "Backwaters of Kerala",
    location: "Alleppey, Kerala",
    description:
      "Cruise through serene backwaters in a traditional houseboat in Kerala.",
    price: 5299,
    type: "Relaxation",
    itinerary: ["Houseboat cruise", "Village tour", "Local cuisine"],
    inclusions: ["Houseboat stay", "Meals", "Guide"],
    exclusions: ["Flights", "Alcoholic drinks"],
  },
  {
    id: 106,
    img: Img1,
    title: "Goa Beach Getaway",
    location: "Goa, India",
    description:
      "Enjoy sun, sand, and sea in Goa's top beaches with vibrant nightlife.",
    price: 4599,
    type: "Beach",
    itinerary: ["Beach tour", "Night market", "Water sports"],
    inclusions: ["Hotel", "Breakfast", "Local transport"],
    exclusions: ["Airfare", "Lunch/Dinner"],
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
