import { useState } from 'react';
import Image1 from "../assets/banner-1.png";
import Image2 from '../assets/banner-2.png';
import Image3 from '../assets/banner-3.png';
 
const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [Image1, Image2, Image3];
 
    const prevSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
 
    const nextSlide = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
 
    return (
        <div className="relative mx-auto mt-16 w-[90%] sm:w-[80%] mb-2 pb-3">
            {/* Image Container with LOWER HEIGHT */}
            <div className="relative h-50 sm:h-84 md:h-84 lg:h-78 pb-4 overflow-x-hidden">
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        className={`absolute block w-full h-[90%]  rounded-lg object-cover transition-opacity duration-700 ${
                            index === activeIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                        alt={`Slide ${index + 1}`}
                    />
                ))}
            </div>
 
            {/* Indicator Dots */}
            <div className="absolute p-6 sm:p-10 lg:p-10 z-30 flex space-x-2 bottom-4 left-1/2 -translate-x-1/2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === activeIndex ? 'bg-primary w-2 h-2' : 'bg-white'
                        }`}
                        onClick={() => setActiveIndex(index)}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
 
            {/* Navigation Buttons */}
            <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 z-30 p-2  hover:bg-gray-800/80 rounded-full transition-all"
                onClick={prevSlide}
            >
                <svg className="w-6 h-6 text-white" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 1L1 5l4 4"/>
                </svg>
            </button>
            <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 z-30 p-2  hover:bg-gray-800/80 rounded-full transition-all"
                onClick={nextSlide}
            >
                <svg className="w-6 h-6 text-white" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M1 9l4-4-4-4"/>
                </svg>
            </button>
        </div>
    );
};
 
export default Carousel;