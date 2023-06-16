import React from "react";

const Hero = () => {
  return (
    <div className="flex h-[75vh] py-10">
      <div className="w-1/2 flex flex-col justify-center items-start px-12">
        <h1 className="text-5xl font-bold text-white-800">
          Welcome to Laptop Bazar
        </h1>
        <p className="text-white-700 my-3">
          Buy the best laptops at the best prices. We have a wide range of
          laptops for you to choose from. Also get amazing discounts on your
          purchase.
        </p>
      </div>
      <div className={`w-1/2 px-12 bg-hero bg-cover bg-no-repeat bg-center`}>
      </div>
    </div>
  );
};

export default Hero;
