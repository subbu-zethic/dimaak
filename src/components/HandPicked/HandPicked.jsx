import React from "react";
import arrow from "/public/images/svg/Arrow 2.svg";
import line from "/public/images/svg/Vector 16.svg";
import arrowLeft from "/public/images/svg/arrow-left.svg";
import arrowRight from "/public/images/svg/arrow-right.svg";
import Image from "next/image";

const HandPicked = () => {
  return (
    <div>
      <div className="flex flex-col gap-[54px] p-[72px] ">
        <div className="flex flex-col gap-[8.49px] items-center">
          <p className="text-[#3D4152] text-[34px] font-bold leading-[150%] tracking-[-0.136px]">
            Hand Picked Tour Packages Per Person
          </p>
          <Image src={arrow} alt="arrow" />
        </div>
        <div className="flex justify-between md:flex flex-wrap gap-4 md:justify-center xl:justify-between">
          <div className="flex flex-col gap-[29px]">
            <div
              style={{
                backgroundImage: "url(/images/svg/thailand-wide.svg)",
                width: "416px",
                height: "245px",
              }}
            >
              <div>
                <p>Thailand</p>
                <p>Starting from $14,000 Per Person</p>
              </div>
            </div>
            <div
              style={{
                backgroundImage: "url(/images/svg/bali-wide.svg)",
                width: "416px",
                height: "245px",
              }}
            >
              <div>
                <p>Bali</p>
                <p>Starting from $14,000 Per Person</p>
              </div>
            </div>
          </div>
          <div>
            <div
              style={{
                backgroundImage: "url(/images/svg/singapore-full.svg)",
                width: "416px",
                height: "519px",
              }}
            >
              <div>
                <p>Singapore</p>
                <p>Starting from $14,000 Per Person</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[29px]">
            <div
              style={{
                backgroundImage: "url(/images/svg/maldives-wide.svg)",
                width: "416px",
                height: "245px",
              }}
            >
              <div>
                <p>Maldives</p>
                <p>Starting from $14,000 Per Person</p>
              </div>
            </div>
            <div
              style={{
                backgroundImage: "url(/images/svg/dubai-wide.svg)",
                width: "416px",
                height: "245px",
              }}
            >
              <div>
                <p>Dubai</p>
                <p>Starting from $14,000 Per Person</p>
              </div>
            </div>
          </div>
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

export default HandPicked;
