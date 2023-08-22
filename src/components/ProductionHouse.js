import React from "react";
import disney from "./../assets/Images/disney.png";
import marvel from "./../assets/Images/marvel.png";
import nationalG from "./../assets/Images/nationalG.png";
import pixar from "./../assets/Images/pixar.png";
import starwar from "./../assets/Images/starwar.png";

import starwarV from "./../assets/Videos/star-wars.mp4";
import disneyV from "./../assets/Videos/disney.mp4";
import marvelV from "./../assets/Videos/marvel.mp4";
import nationalGeographicV from "./../assets/Videos/national-geographic.mp4";
import pixarV from "./../assets/Videos/pixar.mp4";

function ProductionHouse() {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGeographicV,
    },
  ];

  return (
    <div className="flex gap-2 lg:gap-5 mx-12">
      {productionHouseList.map(proHouse => (
        <div className="border-[2px] p-0 m-0 rounded-sm  hover:scale-110 transition-all duration-300 ease-in-out shadow-lg shadow-black relative">
          <video
            src={proHouse.video}
            alt="brand video"
            preload="yes"
            autoPlay
            muted
            loop
            playsInline
            className="absolute top-0 rounded-sm z-0 opacity-0 hover:opacity-100 w-full "
          ></video>
          <img src={proHouse.image} alt="brand logo" className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
}

export default ProductionHouse;
