import Image from "next/image";
import React from "react";
import scenic from "/public/images/svg/Scenic.svg";
import arrow from "/public/images/svg/arrow-down.svg";
import whatsappLogo from "/public/images/svg/whatsapp.svg";
import location from "/public/images/svg/location.svg";
import tickSquare from "/public/images/svg/tick-square.svg";
import calendar from "/public/images/svg/calendar.svg";
import dropDown from "/public/images/svg/drop-down.svg";
import ecllipse from "/public/images/svg/eclipse.svg";
import rectangle from "/public/images/svg/rectangle.svg";

const Plan = () => {
  return (
    <div className="w-full h-full">
      {/* <div className="absolute bg-black opacity-50 px-2 "></div> */}
      {/* <Image className="object-cover w-full" src={scenic} alt="scenic" /> */}
      {/* <div className="absolute top-[20%] font-Outfit flex w-full justify-between items-center px-14">
        <div className="max-w-[739px] flex flex-col gap-5">
          <div>
            <h1 className="text-[#FFFFFF] text-4xl font-extrabold tracking-[-0.168px] leading-[140%]">
              Customized International Adventures: Let Our Experts Plan Your
              Trip
            </h1>
          </div>
          <div>
            <p className="text-[#EBEBEB] text-lg font-normal tracking-[-0.072px] leading-[140%]">
              Experience the epitome of luxury and adventure with our customized
              international journeys. Let our experts curate an extraordinary
              trip tailored to your desires.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="flex contained text-[#FFF] bg-[#FF4514] rounded-xl gap-2 py-3.5 px-7">
              <p>Explore Packages</p>
              <Image src={arrow} alt="arrow" />
            </button>
            <button className="flex border text-[#FFF] rounded-xl gap-2 py-3.5 px-7">
              <Image src={whatsappLogo} alt="whatsapp" />
              <p>Chat on WhatsApp</p>
            </button>
          </div>
        </div>

        <div className="bg-[#FFF] rounded-[18.133px]">
          <div className=" flex flex-col gap-[29px] px-7 py-7">
            <div className="">
              <span className="text-[#3D4152] font-normal text-[28px] leading-[150%] tracking-[-0.112px]">
                Let us Plan a
              </span>
              <p className="text-[#3D4152] font-bold text-[28px] leading-[150%] tracking-[-0.112px]">
                Perfect Holiday for You.
              </p>
            </div>
            <div className="flex flex-col gap-[38px]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[10px]">
                  <div className="bg-[#FFF3ED] rounded-3xl px-2 py-2">
                    <Image src={location} alt="location" />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[#3D4152] text-sm font-semibold leading-[150%] tracking-[0.084px]">
                      Select Destination
                    </p>
                    <p className="text-[#A8A8A8] text-base font-normal leading-[150%] tracking-[-0.064px]">
                      Select Destination
                    </p>
                  </div>
                </div>
                <div>
                  <Image src={dropDown} alt="dropdown" />
                </div>
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[10px]">
                  <div className="bg-[#FFF3ED] rounded-3xl px-2 py-2">
                    <Image src={tickSquare} alt="tickSquare" />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[#3D4152] text-sm font-semibold leading-[150%] tracking-[0.084px]">
                      Select Type
                    </p>
                    <p className="text-[#A8A8A8] text-base font-normal leading-[150%] tracking-[-0.064px]">
                      Family
                    </p>
                  </div>
                </div>
                <div>
                  <Image src={dropDown} alt="dropdown" />
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="flex items-center gap-[10px]">
                  <div className="bg-[#FFF3ED] rounded-3xl px-2 py-2">
                    <Image src={calendar} alt="calendar" />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <p className="text-[#3D4152] text-sm font-semibold leading-[150%] tracking-[0.084px]">
                      Select Duration
                    </p>
                    <p className="text-[#A8A8A8] text-base font-normal leading-[150%] tracking-[-0.064px]">
                      1-2 days
                    </p>
                  </div>
                </div>
                <div>
                  <Image src={dropDown} alt="dropdown" />
                </div>
              </div>
            </div>
            <div className="bg-[#FF4514] flex justify-center rounded-[14px]">
              <button className="text-[#FFFFFF] text-base font-semibold leading-[150%] tracking-[-0.064px] px-[125px] py-[15px]">
                Send Enquiry
              </button>
            </div>
            <div className="flex justify-center gap-1">
              <Image src={ecllipse} alt="ecllipse" />
              <Image src={rectangle} alt="rectangle " />
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Plan;
