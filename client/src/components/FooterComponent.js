import React from "react";
import git2 from "../images/github2.svg";

export default function FooterComponent() {
  return (
    <div className="grid space-y-4 border-t border-zinc-400 lg:h-72 lg:p-5 h-10 p-0">
      <div className="hidden lg:visible flex-row lg:flex mx-10 md:mx-20 lg:mx-24">
        <div className="flex flex-row items-center">
          <div className="font-[poppins] italic font-semibold text-8xl justify-self-center self-center block ">
            HostX<sup className="font-thin not-italic">®</sup>
          </div>
          <img src={git2} className="mx-4 h-20 w-20"></img>
        </div>
        <div className="grid grid-cols-2 gap-4 gap-x-0 box-content justify-self-end  ml-auto text-2xl">
          <div className="font-[poppins]  self-left ">Home</div>
          <div className="font-[poppins]  self-left ">Contact Us</div>
          <div className="font-[poppins]  self-left ">Docs</div>
          <div className="font-[poppins]  self-left ">About Us</div>
          <div className="font-[poppins]  self-left ">Help</div>
          <div className="font-[poppins]  self-left ">Results</div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <hr className="hidden lg:inline lg:w-4/5 mx-auto h-px my-1 border-0.25 border-grey-500"></hr>
        <div className="justify-self-center font-[poppins] self-center text-xl mb-3 p-0 lg:my-2">
          HostX • 2023 • All rights reserved
        </div>
      </div>
    </div>
  );
}
