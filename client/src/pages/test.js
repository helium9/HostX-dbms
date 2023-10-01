import React from "react";
import FooterComponent from "../components/FooterComponent";
import NavbarComponent from "../components/NavbarComponent";
import {Input} from "@nextui-org/react";
import {Card, CardBody,CardHeader,CardFooter,Link, Image, Button, Progress} from "@nextui-org/react";
export default function Dashboard2() {
  return (<>
    <NavbarComponent />
    <div className="min-h-full grid mx-8 mt-12 md:mx-24 lg:mx-48 xl:mx-64 2xl:mx-96">
    <div className=" font-[poppins] text-5xl  justify-self-start">Seamlessly<span className="text-blue-500"> Allot</span> Rooms,</div>
    <div className="font-[poppins] text-5xl justify-self-start">get started</div>
    
    <Button 
            as={Link}
            color="primary"
            href="#"
            variant="flat"
            className="sm:visible text-xl h-10 rounded-lg mt-4 justify-self-start"
          >
            Sign Up
          </Button>
          
    <div className="mt-24 font-[poppins] text-xl  justify-self-start">get started in 3 easy steps:</div>
    <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-self-start">
    <div className="grid  bg-opacity-10 backdrop-blur-lg backdrop-filter bg-slate-100 rounded-xl  max-w-full p-4 pl-8   "><div className="font-[poppins] font-semibold text-2xl"><span className="text-3xl whitespace-pre ">①  </span> Register</div><div className="text-xl font-[poppins] invisible  sm:visible">Register either as a resident or an administrator.</div></div>
    <div className="grid  bg-opacity-10 backdrop-blur-lg backdrop-filter bg-slate-100 rounded-xl  max-w-full p-4 pl-8   "><div className="font-[poppins] font-semibold text-2xl"><span className="text-3xl whitespace-pre ">②  </span> Let us know your preferences</div><div className="text-xl font-[poppins] invisible  sm:visible ">Provide hostel details as an administrator or roommates as a resident.</div></div>
    <div className="grid  bg-opacity-10 backdrop-blur-lg backdrop-filter bg-slate-100 rounded-xl  max-w-full p-4 pl-8   "><div className="font-[poppins] font-semibold text-2xl"><span className="text-3xl whitespace-pre ">③  </span> Get allotment</div><div className="text-xl font-[poppins] invisible  sm:visible">Export your alloment list as a PDF or an excel file.</div></div>
    </div>
    </div>
    <Input
        label="Search"
        isClearable
        radius="lg"
        classNames={{
          label: "text-5xl dark:text-white/90",
          input: [
            "bg-transparent",
            "text-6xl dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Type to search..."
      />
    <FooterComponent className="mt-auto" />
    </>
  );
}