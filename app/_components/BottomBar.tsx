import Image from "next/image";
import React from "react";
import LeftArrow from "../../public/leftArrow.svg";
import RightArrow from "../../public/rightArrow.svg";
import Link from "next/link";

export default function BottomBar() {
  return (
    <div className="bg-[#17696A] text-white py-2 flex justify-center items-center gap-3">
      <Image src={LeftArrow} alt="arrowIcon" />
      <span className="font-bold">Up to 70% Off. </span>
      <Link href="/" className="underline">
        {" "}
        Shop our latest sale styles
      </Link>
      <Image src={RightArrow} alt="arrowIcon" />
    </div>
  );
}
