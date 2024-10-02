import Image from "next/image";
import HomePlantSmall from "../public/homePlantSmall.png";
import HomePlantBig from "../public/homePlantBig.png";

export default function Home() {
  return (
    <section className="flex max-w-7xl m-auto">
      <div className="space-y-4">
        <h1 className="font-semibold">WELCOME TO THE GREENSHOP</h1>
        <h2 className="text-7xl font-extrabold">
          LET'S MAKE A BETTER <span className="text-green">PLANET</span>
        </h2>
        <p>
          We are an online plant shop offering a wide range of cheap and trendy
          plants. Use our plant to create an unique Urban Jungle. Order your
          favorite plants
        </p>
        <button className="bg-green text-white flex justify-center items-center px-3 py-1 gap-1 rounded">
          SHOP NOW
        </button>
      </div>

      <div className="flex">
        <Image src={HomePlantSmall} alt="Home Header Plant Picture" className="h-40 self-end"  />
        <Image src={HomePlantBig} alt="Home Header Plant Picture"  />
      </div>
    </section>
  );
}
