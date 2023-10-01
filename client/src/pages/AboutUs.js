import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import githubicon from "../images/github-mark-white.svg"
import instaicon from "../images/Vectorinsta.svg"
import linkedinicon from "../images/Vectorlinkedin.svg"
import mailicon from "../images/Vectormail.svg"
import {
  Card,
  Image, 
  CardFooter,
} from "@nextui-org/react";
import girl from "../images/girl.jpg"

function ContactComponent({photo, name, branch, socials}){
  return(
    <Card isFooterBlurred className="w-[240px] h-[300px] col-span-12 sm:col-span-7 border-1 border-zinc-800">
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover"
        src={photo}
      />
      <CardFooter className="p-4 absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-row items-center w-full">
          <div className="flex flex-col grow items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">{branch}</p>
            <h4 className="text-white/90 font-medium text-xl">{name}</h4>
          </div>
          <div className="flex flex-row gap-3 items-center">
            <img src={instaicon} className="w-5 h-5"></img>
            <img src={githubicon} className="w-5 h-5"></img>
            <img src={mailicon} className="w-6 h-6"></img>
            <img src={linkedinicon} className="w-5 h-5"></img>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function AboutPage(){
  return (<>
  <div className="flex flex-col items-center min-h-screen">
    <NavbarComponent/>
    <div className="container grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 w-fit gap-6 mt-6 mb-20">
    <div className="tile"><ContactComponent name="Ybhinav Yangil" photo={girl} branch="CSE"/></div>
    <div className="tile"><ContactComponent name="Ybhinav Yangil" photo={girl} branch="CSE"/></div>
    <div className="tile"><ContactComponent name="Ybhinav Yangil" photo={girl} branch="CSE"/></div>
    <div className="tile"><ContactComponent name="Ybhinav Yangil" photo={girl} branch="CSE"/></div>
    </div>
  </div>
  <FooterComponent/>
  </>)
}