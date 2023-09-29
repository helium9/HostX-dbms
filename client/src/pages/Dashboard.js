

import NavbarComponent from "../components/NavbarComponent";
import userLogo from "../images/userLogo.svg";
import downArrowFilled from "../images/downArrowFilled.svg";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";

export default function Dashboard() {
  return (
    <>
    <NavbarComponent />
    <div className="flex flex-col gap-5 p-7 font-['Poppins']">
    
    <Card className="rounded-[12px] border-slate-800 border-2">
        <CardHeader className="gap-4 px-6 h-32">
            <img className="h-full p-2 opacity-90" src={userLogo} alt="menu" />
            <div className="flex flex-col"><p className="text-4xl font-bold">Admin</p><p className="text-2xl">Institute Name</p></div>
            <img className="h-4/6 p-2 ml-auto" src={downArrowFilled} alt="menu" />
        </CardHeader>
    </Card>
    <Card className="rounded-[12px] border-slate-800 border-2">
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </Card>
    </div>

    </>
  );
}
