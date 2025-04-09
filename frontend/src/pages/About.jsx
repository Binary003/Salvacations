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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa
          laboriosam a tenetur facilis earum neque nobis ad enim! Sapiente
          reiciendis, commodi alias optio quae quo tempora impedit incidunt iste
          corporis perferendis numquam rem, eligendi eos explicabo facilis
          reprehenderit repellendus quasi?
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum expedita
          doloremque quis. Illo ipsum cupiditate doloremque nam enim a eligendi
          earum adipisci aliquid ipsam. Animi voluptates sequi ad deserunt illum
          nostrum a saepe consequatur ipsam ex. Facilis a quod esse?
        </p>
      </div>
      <Location />
    </div>
  );
};

export default About;
