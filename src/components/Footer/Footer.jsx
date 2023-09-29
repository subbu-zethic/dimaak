import Image from "next/image";
import React from "react";
import friends from "/public/images/svg/friends.svg";
import leafSmall from "/public/images/svg/leaf-small.svg";
import dot from "/public/images/svg/dot.svg";
import line from "/public/images/svg/line-large.svg";
import facebook from "/public/images/svg/facebook.svg";
import instagram from "/public/images/svg/instagram.svg";
import linkedIn from "/public/images/svg/linkedin.svg";
import youtube from "/public/images/svg/youtube.svg";
import whatsapp from "/public/images/svg/whatsapp-small.svg";
import dimaak from "/public/images/svg/dimaak-logo-small.svg";

const Footer = () => {
  return (
    <div className="flex flex-col gap-[50px] bg-[#1D1B1B] p-[72px]">
      <div className="bg-[#FF6737] flex justify-around items-center rounded-[14px] p-[15px]">
        <div className="flex flex-col gap-[18.25px]">
          <p className="text-[#FFF] text-4xl font-bold leading-[120%] tracking-[-0.144px] max-w-[320px]">
            The great gateway, your way
          </p>
          <p className="text-[#FFF] text-base font-normal leading-[162%] tracking-[-0.064px] max-w-[315px]">
            Save at least 15% on stays worldwide, from relaxing retreats to
            off-grid adventures
          </p>
          <div className="bg-[#25D366] rounded-[12.583px] px-[18px] py-[14px] max-w-[139px]">
            <button className="text-[#FFF] text-base font-semibold leading-[150%] tracking-[-0.064px]">
              Send Enquiry
            </button>
          </div>
        </div>
        <div>
          <Image src={friends} alt="friends" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-[#888] text-base font-medium leading-[150%] tracking-[-0.064px]">
            Popular Destination
          </p>
          <ul className="flex items-center gap-3 text-[#F8ECE8] text-base font-normal leading-normal">
            <li>Thailand</li>
            <Image src={dot} alt="dot" />
            <li>Bali</li>
            <Image src={dot} alt="dot" />
            <li>Singapore</li>
            <Image src={dot} alt="dot" />
            <li>Maldives</li>
            <Image src={dot} alt="dot" />
            <li>Dubai</li>
          </ul>
        </div>
        <div>
          <Image src={line} alt="line" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#888] text-base font-medium leading-[150%] tracking-[-0.064px]">
            Packages based on Theme
          </p>
          <ul className="flex items-center gap-3 text-[#F8ECE8] text-base font-normal leading-normal">
            <li>Budget / Bachelor</li>
            <Image src={dot} alt="dot" />
            <li>Honey Moon</li>
            <Image src={dot} alt="dot" />
            <li>Family</li>
            <Image src={dot} alt="dot" />
            <li>Group Tours</li>
          </ul>
        </div>
        <div>
          <Image src={line} alt="line" />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col gap-4 max-w-[354px]">
          <p className="text-[#888] text-base font-medium leading-normal tracking-[-0.064px]">
            Contact
          </p>
          <p className="text-[#F8ECE8] text-base font-normal leading-{160%} tracking-[-0.4px]">
            Dimaak Tours, Workflo by OYO,Greeta Tower Phase1, Industrial Estate,
            Perungudi, OMR, Chennai, Tamil Nadu 600096.
          </p>
          <button className="text-[#FFF] text-base font-semibold leading-{150%} tracking-[-0.064px] bg-[#FF4514] rounded-[14px] px-[28px] py-[15px] max-w-[160px]">
            Get Directions
          </button>
          <p className="text-[#F8ECE8] text-base font-normal leading-{160%} tracking-[-0.4px]">
            Dimaak tours, Good Works Infinity Park,21, 2nd Main Rd, Electronics
            City Phase 1, Electronic City, Bengaluru, Karnataka 560100
          </p>
          <div className="flex flex-col gap-[13px]">
            <div>
              <p className="text-[#888] text-base font-medium leading-normal tracking-[-0.064px]">
                Social Links
              </p>
            </div>
            <div className="flex gap-[10px]">
              <Image src={facebook} alt="facebook" />
              <Image src={instagram} alt="instagram" />
              <Image src={linkedIn} alt="linkedIn" />
              <Image src={youtube} alt="youtube" />
              <Image src={whatsapp} alt="whatsapp" />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[18px]">
          <p className="text-[#888] text-base font-medium leading-normal tracking-[-0.064px]">
            Call Us
          </p>
          <ul className="text-[#F8ECE8] text-base font-normal leading-{160%} tracking-[-0.064px] flex flex-col gap-[18px]">
            <li>Sales: +91 960-009-9777</li>
            <li>COO: +91 988-688-3456</li>
            <li>HCX: +91 936-112-7954</li>
            <li>CEO: +91 961-168-0883</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[18px]">
          <p className="text-[#888] text-base font-medium leading-normal tracking-[-0.064px]">
            Resources
          </p>
          <ul className="text-[#F8ECE8] text-base font-normal leading-{160%} tracking-[-0.064px] flex flex-col gap-[18px]">
            <li>Blogs</li>
            <li>Contact Us</li>
            <li>Customers Reviews</li>
            <li>Thailand Group Tours</li>
          </ul>
        </div>
        <div className="flex flex-col gap-[18px]">
          <p className="text-[#888] text-base font-medium leading-normal tracking-[-0.064px]">
            Legal
          </p>
          <ul className="text-[#F8ECE8] text-base font-normal leading-{160%} tracking-[-0.064px] flex flex-col gap-[18px]">
            <li>Privacy policy</li>
            <li>Terms & Conditions</li>
            <li>Cancellation Policy</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <Image src={line} alt="line" />
          {/* <hr className="bg-[#3D3D3D]"/> */}
        </div>
        <div className="flex justify-between items-center">
          <Image src={dimaak} alt="dimaak" />
          <p className="text-[#FFF] text-sm font-normal leading-normal">
            Dimaak Tours © 2023. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
