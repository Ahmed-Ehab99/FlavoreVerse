import React from "react";
import { Banner1, Banner2, Banner3, Banner4, Banner5 } from "../Images";

const images = [Banner1, Banner2, Banner3, Banner4, Banner5];

export default function TopSection({ image, title, type }) {
  return (
    <div className="w-full h-[100vh]">
      <div className="relative w-full h-full">
        <img
          className="w-full h-full object-cover"
          src={image ?? images[Math.floor(Math.random() * images.length)]}
          alt="Recipes"
        />
      </div>
      <div className="absolute w-full h-full bg-gradient-to-t from-black to-transparent top-0 z-10 flex flex-col items-center justify-center pt-40 2xl:pt-20 px-4">
        <h1 className="capitalize text-white text-4xl md:text-5xl font-bold text-center">
          {title}
        </h1>
        {type && (
          <p className="text-sm mt-4 text-center text-green-500 bg-[#00000090] px-6 py-4 rounded-full">
            Welcome to FlavorVerse, your passport to culinary adventures!
            <br className="hidden md:block" />
            Discover a treasure trove of delectable recipes from around the
            globe.
          </p>
        )}
      </div>
    </div>
  );
}
