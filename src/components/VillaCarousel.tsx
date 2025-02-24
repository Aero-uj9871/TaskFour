import { useState } from "react";
import image1 from "../assets/gallery-1.png";
import image2 from "../assets/gallery-2.png";
import image3 from "../assets/gallery-3.png";
import image4 from "../assets/gallery-4.png";
import image5 from "../assets/gallery-5.png";
import image6 from "../assets/gallery-6.png";
import leftArrow from "../assets/leftArrow.svg";
import rightArrow from "../assets/right.svg"

const images = [image1, image2, image3, image4, image5, image6];

const VillaCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-full mx-auto overflow-x-hidden rounded-lg shadow-lg">
      {/* Image Display */}
      <div className="relative">
        <img
          src={images[currentIndex]}
          className="block w-full h-[200px] md:h-[300px] lg:h-[500px] object-cover"
          alt={`Slide ${currentIndex + 1}`}
        />
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute  top-1/2 left-[1rem] transform -translate-y-1/2  text-white  rounded-full"
        onClick={goToPrevious}
      ><img src={leftArrow} className=" w-[1rem] lg:h-[2.6rem] lg:w-[1.6rem]" alt="" />
      </button>
      <button
        className="absolute top-1/2 right-[1rem] transform -translate-y-1/2  text-white  rounded-full"
        onClick={goToNext}
      ><img src={rightArrow} className="w-[1rem] lg:h-[2.6rem] lg:w-[1.6rem]" alt="" />
      </button>
    </div>
  );
};

export default VillaCarousel;
