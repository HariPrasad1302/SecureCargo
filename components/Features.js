import React from "react";
import Title from "./Title";
import Card from "./Card";
import { featuresData } from "./data";
const Features = () => {
  return (
    <section
      id="features"
      className="w-full bg-gray-100 px-12 py-20 border-b-[1px] border-b-black"
    >
      <Title title="" des="Secure Cargo Solutions" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        {featuresData.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default Features;