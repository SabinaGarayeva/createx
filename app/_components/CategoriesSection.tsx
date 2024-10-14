import Image from "next/image";
import React from "react";
import Category1 from "../../public/category1.png";
import Category2 from "../../public/category2.png";
import Category3 from "../../public/category3.png";

export default function CategoriesSection() {
  return (
    <section className="flex flex-wrap justify-center relative">
     <div className="relative -mt-16 flex flex-wrap justify-center">
    <div className="m-4 text-center rounded">
      <Image src={Category1} alt="women's category" />
      <p className="mt-2 font-semibold">Women's</p>
    </div>
    <div className="m-4 text-center">
      <Image src={Category2} alt="men's category" />
      <p className="mt-2 font-semibold">Men's</p>
    </div>
    <div className="m-4 text-center">
      <Image src={Category3} alt="kids' category" />
      <p className="mt-2 font-semibold">Kids'</p>
    </div>
  </div>
  </section>
  
  );
}
