import Image from "next/image";
import React from "react";
import arrow from "/public/images/svg/Arrow 2.svg";
import dottedLine from "/public/images/svg/dottedline.svg";
import bachelor from "/public/images/svg/bachelor.svg";
import honeyMoon from "/public/images/svg/honeymoon.svg";
import family from "/public/images/svg/family.svg";
import groupTours from "/public/images/svg/grouptours.svg";
import line from "/public/images/svg/Vector 16.svg";
import arrowLeft from "/public/images/svg/arrow-left.svg";
import arrowRight from "/public/images/svg/arrow-right.svg";

const PackagesTheme = () => {
  const PackagesList = [
    {
      image: bachelor,
      theme: "Budget / Bachelor",
      price: "Starting from $37,000 Per Person",
    },
    {
      image: honeyMoon,
      theme: "Honey Moon",
      price: "Starting from $37,000 Per Person",
    },
    {
      image: family,
      theme: "Family",
      price: "Starting from $37,000 Per Person",
    },
    {
      image: groupTours,
      theme: "Group Tours",
      price: "Starting from $37,000 Per Person",
    },
  ];
  return (
    <div className="bg-[#F8EBE6]">
      <div className="flex flex-col gap-[54px] p-[72px] ">
        <div className="flex flex-col gap-[2.49px] items-center">
          <p className="text-[#3D4152] text-[34px] font-bold leading-[150%] tracking-[0.204px]">
            Packages Based on Theme
          </p>
          <Image src={arrow} alt="arrow" />
        </div>
        <div className="flex md:flex flex-wrap gap-4 md:justify-center xl:justify-between">
          {PackagesList.map((list, index) => {
            return (
              <div className="flex flex-col bg-[#FFF] rounded-[14px]" key={index}>
                <div className="rounded-[14px] py-[28px] px-[28px]">
                  <Image src={list.image} alt="packages-list" />
                </div>
                <div className="flex justify-center">
                  <Image src={dottedLine} alt="dottedLine" />
                </div>
                <div className="flex flex-col gap-[6px] pt-[23px] px-[28px] pb-[28px]">
                  <p className="text-[#3D4152] text-lg font-bold leading-[150%] tracking-[-0.072px]">
                    {list.theme}
                  </p>
                  <p className="text-[#3D4152] text-sm font-normal leading-[150%] tracking-[-0.056px]">
                    {list.price}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center md:justify-center lg:justify-center xl:justify-end">
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

export default PackagesTheme;
