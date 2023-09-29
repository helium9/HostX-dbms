import NavbarComponent from "../components/NavbarComponent";
import userLogo from "../images/userLogo.svg";
import downArrowFilled from "../images/downArrowFilled.svg";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import {Button, ButtonGroup} from "@nextui-org/react";
import editPencil from "../images/editPencil.svg";
import blueCross from "../images/blueCross.svg";
import blueEditPencil from "../images/blueEditPencil.svg";
import {useState} from 'react';

function DashButton({children}){
    const [active, setActive] = useState(false);
    let put;
    function changeButton(){
        if(active){
            put = <div><p className="text-blue-500 font-['Roboto']">{children}</p>
            <img className="h-5 w-5" src={blueCross} alt="menu" />
            <img className="h-5 w-5" src={blueEditPencil} alt="menu" /></div>;
        }
        else{
            put =  <div><p className="text-black font-['Roboto']">{children}</p><img className="h-5 w-5" src={editPencil} alt="menu" /></div>
        }
    }
    return(
    <Button className="rounded-md w-fit text-2xl bg-zinc-300 focus:bg-white items-center flex flex-row" onFocus={()=>{setActive(!active); changeButton();}}>
            {put}
    </Button>);
}

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
    <Card className="rounded-[12px] border-slate-800 border-2 px-9">
        <CardHeader className="m-0 p-0"><p className="font-bold text-2xl mt-6 mb-4">Registered Hostels</p></CardHeader>
      <CardBody className="m-0 p-0 pb-4">
        <DashButton />
      </CardBody>
    </Card>
    </div>
    </>
  );
}
