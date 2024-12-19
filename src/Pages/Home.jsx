import React from "react";
import Recipes from "../Components/Recipes";
import TopSection from "../Components/TopSection";

export default function Home() {
  return (
    <section className="w-full flex flex-col">
      <TopSection
        title={
          <p>
            Taste the World with
            <br /> FlavorVerse!
          </p>
        }
        type="home"
      />
      <div className="md:max-w-[1440px] mx-auto px-4 md:px-20" id="recipes">
        <Recipes />
      </div>
    </section>
  );
}
