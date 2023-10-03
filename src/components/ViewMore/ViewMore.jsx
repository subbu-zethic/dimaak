import React from "react";
import viewMore from "/public/images/svg/View more on Instagram.svg";
import image1 from "/public/images/svg/image1.svg";
import image2 from "/public/images/svg/image2.svg";
import image3 from "/public/images/svg/image3.svg";
import image4 from "/public/images/svg/image4.svg";
import image5 from "/public/images/svg/image5.svg";
import image6 from "/public/images/svg/image6.svg";
import image7 from "/public/images/svg/image7.svg";
import image8 from "/public/images/svg/image8.svg";
import image9 from "/public/images/svg/image9.svg";
import image10 from "/public/images/svg/image10.svg";
import image11 from "/public/images/svg/image11.svg";
import image12 from "/public/images/svg/image12.svg";
import Image from "next/image";

const ViewMore = () => {
  return (
    <div className="flex flex-col gap-[38px] mb-[-80px]">
      <div className="flex justify-between">
        <Image src={image1} alt="image" />
        <Image src={image2} alt="image" />
        <Image src={image3} alt="image" />
        <Image src={image4} alt="image" />
        <Image src={image5} alt="image" />
        <Image src={image6} alt="image" />
      </div>
      <div className="flex gap-[48px] justify-center items-center">
        <div>
          <Image src={viewMore} alt="view-more" />
        </div>
        <div className="bg-[#FF4514] rounded-[14px] px-7 py-[15px]">
          <button className="text-[#FFF] text-base font-semibold leading-[150%] tracking-[-0.064px]">View More</button>
        </div>
      </div>
      <div className="flex justify-between">
        <Image src={image7} alt="image" />
        <Image src={image8} alt="image" />
        <Image src={image9} alt="image" />
        <Image src={image10} alt="image" />
        <Image src={image11} alt="image" />
        <Image src={image12} alt="image" />
      </div>
    </div>
  );
};

export default ViewMore;
