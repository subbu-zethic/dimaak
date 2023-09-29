import React from "react";
import Image from "next/image";
import google from "/public/images/svg/google.svg";
import clock from "/public/images/svg/clock.svg";
import locate from "/public/images/svg/locate.svg";
import routing from "/public/images/svg/routing.svg";
import discount from "/public/images/svg/discount-shape.svg";

const Info = () => {
  const Features = [
    {
      logo: google,
      offer: "4.9 Google Ratings",
    },
    {
      logo: clock,
      offer: "24/7 Trip Assistance",
    },
    {
      logo: locate,
      offer: "Destination Experts",
    },
    {
      logo: routing,
      offer: "100% Customized Trip",
    },
    {
      logo: discount,
      offer: "Transparent Pricing",
    },
  ];
  return (
    <div className="px-[72px] pt-[23px]">
      <div className="bg-[#3D4152] rounded-lg ">
        <div className="flex justify-around py-[34px]">
          {Features.map((feature, index) => {
            return (
              <div className="flex gap-[7px] items-center" key={index}>
                <Image src={feature.logo} alt="logo" />
                <p className="text-[#FFF] text-base font-medium leading-[150%] tracking-[-0.064px]">
                  {feature.offer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Info;
