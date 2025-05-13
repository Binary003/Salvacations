import React from "react";
import Location from "../componenets/Location/Location.jsx";

const About = () => {
  return (
    <div className="container pt-14">
      <div className="py-10">
        <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
          About us
        </h1>
        <p>
          At SalvaCations, we believe that every journey should be more than
          just a trip — it should be an experience to remember. Founded with a
          passion for travel and a commitment to service excellence, we
          specialize in crafting personalized travel packages that bring
          comfort, adventure, and unforgettable memories to our clients. Whether
          you're dreaming of tranquil getaways, cultural explorations, or
          adrenaline-filled adventures, our team ensures every detail is
          thoughtfully planned and seamlessly executed.
        </p>
        <br />
        <p>
          With a deep understanding of destinations and traveler expectations,
          SalvaCations offers carefully curated itineraries, exclusive deals,
          and 24/7 support — all designed to make your travel stress-free and
          exciting. We don't just plan trips; we create meaningful experiences
          that connect you with the world. Join us on a journey where your
          satisfaction is our destination.
        </p>
      </div>
      <Location />
    </div>
  );
};

export default About;
