import React from "react";
import NavbarComponent from "../components/NavbarComponent";
import FooterComponent from "../components/FooterComponent";
import githubicon from "../images/github-mark-white.svg";
import instaicon from "../images/Vectorinsta.svg";
import linkedinicon from "../images/Vectorlinkedin.svg";
import mailicon from "../images/Vectormail.svg";
import { Card, Image, CardFooter } from "@nextui-org/react";
import girl from "../images/girl.jpg";

function ContactComponent({ photo, name, branch, socials }) {
  return (
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
            {socials.insta && (
              <a href={socials.insta} target="_blank" rel="noopener noreferrer">
                <img src={instaicon} className="w-5 h-5" alt="Instagram" />
              </a>
            )}
            {socials.github && (
              <a href={socials.github} target="_blank" rel="noopener noreferrer">
                <img src={githubicon} className="w-5 h-5" alt="GitHub" />
              </a>
            )}
            {socials.mail && (
              <a href={`mailto:${socials.mail}`} target="_blank" rel="noopener noreferrer">
                <img src={mailicon} className="w-6 h-6" alt="Email" />
              </a>
            )}
            {socials.linkedin && (
              <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={linkedinicon} className="w-5 h-5" alt="LinkedIn" />
              </a>
            )}
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default function AboutPage() {
  const socialAbhinav = {
    insta: "https://instagram.com/abhinav_gangil?igshid=MzRlODBiNWFlZA==",
    github: "https://github.com/xenom2004",
    mail: "cse220001002@iiti.ac.in",
    linkedin: "https://www.linkedin.com/in/abhinav-gangil-193594255/",
  };
  const socialAditya = {
    insta: "https://instagram.com/asks281?igshid=MzRlODBiNWFlZA==",
    github: "https://github.com/helium9",
    mail: "cse220001004@iiti.ac.in",
    linkedin: "https://www.linkedin.com/in/aditya-kshitiz-576135176/",
  };
  const socialParth = {
    insta: "https://instagram.com/parth_deshmukh96?igshid=NzZlODBkYWE4Ng==",
    github: "https://github.com/parth20031",
    mail: "cse220001057@iiti.ac.in",
    linkedin: "https://www.linkedin.com/in/parth-deshmukh-b01044277/",
  };
  const socialAadish = {
    insta: "https://instagram.com/aadish_jain54?igshid=MzRlODBiNWFlZA==",
    github: "https://github.com/mapcrafter2048",
    mail: "cse220001001@iiti.ac.in",
    linkedin: "https://www.linkedin.com/in/aadish-jain-177ab925a/",
  };

  return (
    <>
      <div className="flex flex-col items-center min-h-screen">
        <NavbarComponent />
        <div className="container grid lg:grid-cols-3 grid-cols-1 sm:grid-cols-2 w-fit gap-6 mt-6 mb-20">
          <div className="tile">
            <ContactComponent name="Abhinav Gangil" photo={girl} branch="CSE" socials={socialAbhinav} />
          </div>
          <div className="tile">
            <ContactComponent name="Aditya Kshitiz" photo={girl} branch="CSE" socials={socialAditya} />
          </div>
          <div className="tile">
            <ContactComponent name="Aadish Jain" photo={girl} branch="CSE" socials={socialAadish} />
          </div>
          <div className="tile">
            <ContactComponent name="Parth Deshmukh" photo={girl} branch="CSE" socials={socialParth} />
          </div>
          
        </div>
      </div>
      <FooterComponent />
    </>
  );
}
