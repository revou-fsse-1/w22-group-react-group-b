import React, { useState, useEffect } from "react";
import Image from "next/image";
const SlidingImage = () => {
  const [transitionArray, setTransitionArray] = useState([
    -100, 0, 100, 200, 300, 400, 500, 600,
  ]);
  const [opacity, setOpacity] = useState([0, 1, 1, 1, 1, 1, 0]);

  const images = [
    "https://i.imgur.com/NBMN1F3.jpeg",
    "https://i.imgur.com/E8F5TwR.jpeg",
    "https://i.imgur.com/kjdXJBF.jpeg",
    "https://i.imgur.com/0Pln4DY.jpeg",
    "https://i.imgur.com/fo9GRPE.jpeg",
    "https://i.imgur.com/eMRAH69.jpeg",
    "https://i.imgur.com/OJwSq4c.jpeg",
    "https://i.imgur.com/BLUWLNo.jpeg",
    // Add more image URLs as needed
  ];

  useEffect(() => {
    // Automatic sliding effect
    const interval = setInterval(() => {
      setTransitionArray((prevArray) => [
        ...prevArray.slice(1, transitionArray.length),
        prevArray[0],
      ]);
      setOpacity((prevArray) => [
        ...prevArray.slice(1, transitionArray.length),
        prevArray[0],
      ]);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length, transitionArray]);

  return (
    <div className="relative h-[400px] mx-20 overflow-hidden">
      {images.map((image, index) => {
        return (
          <div key={image}>
            <Image
              src={image}
              alt={`Image  ${index}`}
              className="rounded-[30px]"
              width={332}
              height={332}
              style={{
                transform: `translateX(${transitionArray[index]}%)`,
                transition: `all 1000ms ease`,
                opacity: `${opacity[index]}`,
                position: "absolute",
                width: "250px",
                top: "0",
                bottom: "0",
                padding: "16px",
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SlidingImage;
