"use client";

import React, { useState } from "react";
import Link from "next/link";
import ProductImage from "../../public/productImage.png";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";

export default function NewArrivals() {
  // Sample product data
  const products = [
    { id: 1, name: "Product 1", price: 49.99, image: ProductImage, rating: 4 },
    { id: 2, name: "Product 2", price: 59.99, image: ProductImage, rating: 3 },
    { id: 3, name: "Product 3", price: 29.99, image: ProductImage, rating: 5 },
    { id: 4, name: "Product 4", price: 39.99, image: ProductImage, rating: 2 },
    { id: 5, name: "Product 5", price: 19.99, image: ProductImage, rating: 4 },
    { id: 6, name: "Product 6", price: 99.99, image: ProductImage, rating: 5 },
    { id: 7, name: "Product 7", price: 89.99, image: ProductImage, rating: 4 },
    { id: 8, name: "Product 8", price: 69.99, image: ProductImage, rating: 3 },
    { id: 9, name: "Product 9", price: 79.99, image: ProductImage, rating: 5 },
    {
      id: 10,
      name: "Product 10",
      price: 49.99,
      image: ProductImage,
      rating: 4,
    },
    {
      id: 11,
      name: "Product 11",
      price: 55.99,
      image: ProductImage,
      rating: 3,
    },
    {
      id: 12,
      name: "Product 12",
      price: 65.99,
      image: ProductImage,
      rating: 4,
    },
  ];

  const [sliderPosition, setSliderPosition] = useState(0);

  const slideLeft = () => {
    setSliderPosition((prev) => Math.min(prev + 100, 0)); // Move right, limit to 0%
  };

  const slideRight = () => {
    const maxTranslateX = -(Math.ceil(products.length / 6) - 1) * 100;
    setSliderPosition((prev) => Math.max(prev - 100, maxTranslateX)); // Move left, limit based on product count
  };

  return (
    <section className="newArrivals">
      {/* Header */}
      <div className="arrivalHeader text-center mb-8">
        <h3 className="text-5xl font-bold">New Arrivals</h3>
        <p className="text-gray-500">
          Check out our latest arrivals for the upcoming season
        </p>
        <Link href="/newArrivalCollection" className="underline text-[#17696A]">
          See the collection here
        </Link>
      </div>

      {/* Product Slider */}
      <div className="arrivalBody relative overflow-hidden">
        <div
          className="productSlider flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(${sliderPosition}%)` }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="productCard relative flex-shrink-0 w-1/6 px-4"
            >
              {/* Product Image */}
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-auto"
              />

              {/* Star Rating */}
              <div className="starRating absolute top-2 right-6 flex space-x-1">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar
                      key={i}
                      className={`h-4 w-4 ${
                        i < product.rating ? "text-yellow-500" : "text-gray-300"
                      }`}
                    />
                  ))}
              </div>

              {/* Favorite Icon */}
              <div className="favoriteIcon absolute bottom-2 right-2">
                <CiHeart className="h-6 w-6 text-gray-400 hover:text-red-500 transition-colors duration-300" />
              </div>

              {/* Product Details */}
              <h4 className="mt-2 font-bold">{product.name}</h4>
              <p className="text-gray-600">${product.price.toFixed(2)}</p>
            </div>
          ))}
        </div>

        {/* Slider buttons */}
        <div className="sliderButtons flex justify-between mt-4">
          <button
            onClick={slideLeft}
            className="border-t border-gray-400 w-10"
          ></button>
          <button
            onClick={slideRight}
            className="border-t border-gray-400 w-10"
          ></button>
        </div>
      </div>
    </section>
  );
}
