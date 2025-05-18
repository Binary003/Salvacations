// Import all images required for these packages
import Img1 from "../../assets/Places/boat.jpg";
import Img2 from "../../assets/Places/tajmahal.jpg";
import Img3 from "../../assets/Places/water.jpg";
import Img4 from "../../assets/Places/place4.jpg";
import Img5 from "../../assets/Places/place5.jpg";
import Img6 from "../../assets/Places/place6.jpg";

// Domestic India package collection
export const DomesticIndiaData = [
  {
    id: 101,
    img: Img2,
    images: [Img2, Img6, Img5, Img4, Img3],
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
