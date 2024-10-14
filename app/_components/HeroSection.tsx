"use client";

import { useState } from "react";

import HeroBackground from "../../public/heroBackground.png";
import LeftArrow from "../../public/carouselLeftArrow.svg";
import RightArrow from "../../public/carouselRightArrow.svg";

import Image from "next/image";

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: HeroBackground,
      title: "New Collection",
      subtitle: "Menswear 2020",
      button1: "Shop Sale",
      button2: "Shop the Menswear",
    },
    {
      id: 2,
      image: HeroBackground,
      title: "Latest Fashion",
      subtitle: "Womenwear 2020",
      button1: "Shop Sale",
      button2: "Shop the Collection",
    },
    // Add more slides as needed
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Carousel Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white space-y-4">
              <h2 className="text-4xl font-bold">{slide.title}</h2>
              <p className="text-2xl">{slide.subtitle}</p>
              <div className="space-x-4">
                <button className="px-6 py-2 bg-white text-black font-semibold hover:bg-gray-200">
                  {slide.button1}
                </button>
                <button className="px-6 py-2 bg-white text-black font-semibold hover:bg-gray-200">
                  {slide.button2}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full text-black hover:bg-gray-200"
      >
        <Image src={LeftArrow} alt="LeftButton" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full text-black hover:bg-gray-200"
      >
        <Image src={RightArrow} alt="RightButton" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-8 rounded-full ${
              currentSlide === index ? "bg-white" : "bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
          >
            {`0${index + 1}`}
          </button>
        ))}
      </div>
    </section>
  );
}


