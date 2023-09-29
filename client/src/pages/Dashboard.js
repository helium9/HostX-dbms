import NavbarComponent from "../components/NavbarComponent";
import userLogo from "../images/userLogo.svg";
import downArrowFilled from "../images/downArrowFilled.svg";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/react";
import { Button, ButtonGroup } from "@nextui-org/react";
import editPencil from "../images/editPencil.svg";
import blueCross from "../images/blueCross.svg";
import blueEditPencil from "../images/blueEditPencil.svg";
import { useState } from "react";
import { Divider } from "@nextui-org/react";
import AddFilled from "../images/AddFilled.svg";
import releaseForm from "../images/releaseForm.svg";

function DashButton({ children }) {
  const [active, setActive] = useState(false);
  let put;
  if (active) {
    put = (
      <div className="items-center flex flex-row gap-3">
        <p className="text-blue-500 font-['Roboto'] pt-1">{children}</p>
        <img className="h-5 w-5" src={blueCross} alt="menu" />
        <img className="h-5 w-5" src={blueEditPencil} alt="menu" />
      </div>
    );
  } else {
    put = (
      <div className="items-center flex flex-row gap-3">
        <p className="text-black font-['Roboto'] pt-1">{children}</p>
        <img className="h-5 w-5" src={editPencil} alt="menu" />
      </div>
    );
  }
  return (
    <Button
      className="rounded-lg w-fit h-12 text-2xl bg-zinc-300 focus:bg-white"
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      {put}
    </Button>
  );
}

export default function Dashboard() {
  return (
    <>
      <NavbarComponent />
      <div className="flex flex-col gap-5 p-7 font-['Poppins']">
        <Card className="rounded-[12px] border-slate-800 border-2">
          <CardHeader className="gap-4 px-6 h-32">
            <img className="h-full p-2 opacity-90" src={userLogo} alt="menu" />
            <div className="flex flex-col">
              <p className="text-4xl font-bold">Admin</p>
              <p className="text-2xl">Institute Name</p>
            </div>
            <img
              className="h-4/6 p-2 ml-auto"
              src={downArrowFilled}
              alt="menu"
            />
          </CardHeader>
        </Card>
        <Card className="rounded-[12px] border-slate-800 border-2 px-9">
          <CardHeader className="m-0 p-0">
            <p className="font-bold text-2xl mt-6 mb-4">Registered Hostels</p>
          </CardHeader>
          <CardBody className="m-0 mb-4 p-0 pb-4 flex-row gap-4 flex-wrap items-center">
            <DashButton>Name</DashButton>
            <DashButton>Name</DashButton>
            <DashButton>Vikram Sarabai</DashButton>
            <DashButton>Name</DashButton>
            <img className="w-8 h-8" src={AddFilled} alt="menu" />{/*change such that onfocus becomes white */}
          </CardBody>
          <CardBody className="flex flex-row items-start m-0 mb-4 p-0 h-28">
            <div className="flex flex-col items-center">
              <p className="font-['Roboto'] mb-2 text-lg">5 units rooms</p>
              <p className="text-6xl font-semibold">12</p>
            </div>
            <Divider orientation="vertical" className="bg-white h-24 mx-4" />
            <div className="flex flex-col items-center">
              <p className="font-['Roboto'] mb-2 text-lg">6 units rooms</p>
              <p className="text-6xl font-semibold">50</p>
            </div>
          </CardBody>
        </Card>
        <Button className="bg-blue-600 h-20">
            <img className="h-9 w-9" src={releaseForm} alt="menu" />
            <p className="text-3xl font-bold">Release form</p>
          </Button>
      </div>
    </>
  );
}
