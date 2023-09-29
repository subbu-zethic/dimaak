import Image from "next/image";
import React from "react";

const Expert = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col gap-[38px] p-[74px]">
        <div className="flex flex-col gap-[14px]">
          <p className="text-[#FF6737] text-2xl font-normal leading-[150%] tracking-[-0.096px]">
            Our Happy Experts
          </p>
          <p className="text-[#FFF] text-[46px] font-semibold leading-[120%] tracking-[-0.184px] max-w-[487px]">
            Meet The Expert Travel Planners Dimaak Team
          </p>
          <p className="text-[#FFF] text-lg font-light leading-[162%] tracking-[-0.072px] max-w-[436px]">
            Testimonial makes collecting text and video testimonials fast and
            easy for any business who needs social proof.
          </p>
        </div>
        <div className="bg-[#FF4514] rounded-[14px] px-[28px] py-[15px] max-w-[187px]">
          <button className="text-[#FFF] text-base font-semibold leading-[150%] tracking-[-0.064px]">
            Know Our Experts
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Expert;
