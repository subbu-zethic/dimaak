import Image from "next/image";
import React from "react";
import arrow from "/public/images/svg/Arrow 2.svg";
import line from "/public/images/svg/Vector 16.svg";
import arrowLeft from "/public/images/svg/arrow-left.svg";
import arrowRight from "/public/images/svg/arrow-right.svg";

const Popular = () => {
  const Destinations = [
    {
      image: "/images/svg/thailand.svg",
      place: "Thailand",
      price: "Starting from $14,000 Per Person",
    },
    {
      image: "/images/png/bali.png",
      place: "Bali",
      price: "Starting from $14,000 Per Person",
    },
    {
      image: "/images/png/maldives.png",
      place: "Maldives",
      price: "Starting from $14,000 Per Person",
    },
    {
      image: "/images/svg/singapore.svg",
      place: "Singapore",
      price: "Starting from $14,000 Per Person",
    },
    {
      image: "/images/png/dubai.png",
      place: "Dubai",
      price: "Starting from $14,000 Per Person",
    },
  ];

  // const slideLeft = () => {
  //   var slider = document.getElementById("slider" + rowID);
  //   slider.scrollLeft = slider.scrollLeft - 500;
  // };
  // const slideRight = () => {
  //   var slider = document.getElementById("slider" + rowID);
  //   slider.scrollLeft = slider.scrollLeft + 500;
  // };

  return (
    <div>
      <div className="flex flex-col p-[72px] gap-[54px]">
        <div className="flex flex-col gap-[2.49px] items-center">
          <p className="text-[#3D4152] text-[34px] font-bold leading-[150%] tracking-[0.204px]">
            Popular Destinations
          </p>
          <Image src={arrow} alt="arrow" />
        </div>
        <div className="flex justify-between md:flex flex-wrap gap-4 md:justify-center xl:justify-between sm:justify-center xs:justify-center">
          {Destinations.map((destination, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundImage: `url(${destination.image})`,
                  height: "241px",
                  width: "241px",
                }}
              >
                <div className="flex flex-col items-center">
                  <p>{destination.place}</p>
                  <p>{destination.price}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center md:justify-center lg:justify-center xl:justify-end sm:justify-center">
          <div>
            <p className="text-[#FF4514] text-lg font-semibold leading-[163.5%] tracking-[0.108px]">
              2/4
            </p>
          </div>
          <div className="pl-6">
            <Image src={line} alt="line" />
          </div>
          <div className="flex items-center gap-[18px] pl-[14px]">
            <div className="bg-[#FFF3ED] rounded-[62px] px-[19px] py-[19px]">
              <Image src={arrowLeft} alt="arrowLeft" />
            </div>
            <div className="bg-[#FFF3ED] rounded-[62px] px-[19px] py-[19px]">
              <Image src={arrowRight} alt="arrowRight" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
