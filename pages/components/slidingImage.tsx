import React, { useState, useEffect } from "react";
import Image from "next/image";
import arrowLeft from "../../public/arrow-left.svg";
import arrowRight from "../../public/arrow-right.svg";
const SlidingImage = () => {
  const [transitionArray, setTransitionArray] = useState([
    -100, 0, 100, 200, 300, 400, 500,
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
        ...prevArray.slice(1, opacity.length),
        prevArray[0],
      ]);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [images.length, transitionArray, opacity]);

  const leftClick = () => {
    setTransitionArray((prevArray) => [
      prevArray.slice(-1)[0],
      ...prevArray.slice(0, transitionArray.length - 1),
    ]);
    setOpacity((prevArray) => [
      prevArray.slice(-1)[0],
      ...prevArray.slice(0, opacity.length - 1),
    ]);
  };
  const rightClick = () => {
    setTransitionArray((prevArray) => [
      ...prevArray.slice(1, transitionArray.length),
      prevArray[0],
    ]);
    setOpacity((prevArray) => [
      ...prevArray.slice(1, opacity.length),
      prevArray[0],
    ]);
  };

  return (
    <div className="relative h-[400px] mx-40 overflow-hidden">
      <div className="flex flex-row justify-between">
        <Image
          src={arrowLeft}
          width={15}
          height={15}
          alt="Arrow Left"
          className="mt-[200px] z-10 relative cursor-pointer"
          onClick={leftClick}
        />
        <Image
          src={arrowRight}
          height={15}
          width={15}
          alt="Arrow Right"
          className="mt-[200px] z-10 relative cursor-pointer"
          onClick={rightClick}
        />
      </div>

      <div className="">
        {images.map((image, index) => {
          return (
            <div className="" key={image}>
              <Image
                src={image}
                alt={`Image  ${index}`}
                className="rounded-[20px] m-16"
                objectFit="cover"
                width={200}
                height={300}
                style={{
                  transform: `translateX(${transitionArray[index]}%)`,
                  transition: `all 1000ms ease`,
                  opacity: `${opacity[index]}`,
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  padding: "12px",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SlidingImage;
