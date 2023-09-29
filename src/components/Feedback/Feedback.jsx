import Image from "next/image";
import React from "react";
import travel from "/public/images/svg/travel.svg";
import ready from "/public/images/svg/ready.svg";
import quote from "/public/images/svg/quote.svg";
import userPicture from "/public/images/svg/user-picture.svg";
import googlereviews from "/public/images/svg/google-reviews.svg";
import "./Feedback.style.css"

const Feedback = () => {
  return (
    <div>
      <div className="flex justify-center gap-[26px] p-[74px] review-wrapper">
        <div className="">
          <Image src={travel} alt="travel"/>
        </div> 
        <div className="flex flex-col gap-[36px]">
          <div className="flex flex-col border rounded-[16.279px] border-#E9DAD4">
            <div className="pl-[26px] mb-[33px]">
              <Image src={quote} alt="quote" />
            </div>
            <div className="flex flex-col gap-[29px] pl-[42px] pr-[44px]">
              <div className="max-w-[549px]">
                <p className="text-[#3D4152] text-lg font-light leading-[163.5%] tracking-[-0.072px]">
                  We just went to Phuket, Pattaya and Bangkok and had a great
                  experience and memories in Thailand. Thank you Team Dimaak and
                  Thai Tour Team for ur excellent support and coordinating the
                  trip in a superb way. I want to really want to thank Anirudh
                  for his excellent coordination and prompt responses to our
                  queries and requests.
                </p>
              </div>
              <div className="flex items-center gap-3 mb-[40px]">
                <Image
                  src={userPicture}
                  alt="user-picture"
                  width={77}
                  height={77}
                />
                <p className="text-[#3D4152] text-lg font-semibold leading-[163.5%] tracking-[-0.072px]">
                  -Subash Raj Anandhan
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-[33px] justify-end items-center">
            <div>
              <Image src={googlereviews} alt="google-reviews" />
            </div>
            <div className="bg-[#FF6737] px-[28px] py-[15px] rounded-[14px]">
              <button className="text-[#FFF] text-base font-semibold leading-[150%] tracking-[-0.064px]">
                View more Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
