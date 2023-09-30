import NavbarComponent from "../components/NavbarComponent";
import userLogo from "../images/userLogo.svg";
import downArrowFilled from "../images/downArrowFilled.svg";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  ButtonGroup,
  Divider,
} from "@nextui-org/react";
import editPencil from "../images/editPencil.svg";
import blueCross from "../images/blueCross.svg";
import blueEditPencil from "../images/blueEditPencil.svg";
import { useState } from "react";
import AddFilled from "../images/AddFilled.svg";
import releaseForm from "../images/releaseForm.svg";
import expandArrowUp from "../images/expandArrowUp.svg";
import linkLogo from "../images/linkLogo.svg";
import stopForm from "../images/stopForm.svg";
import viewForm from "../images/viewForm.svg";

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

function FormControlsSection() {
  const [active, setActive] = useState(false);
  let put;
  if (active) {
    put = (
      <div className="flex flex-col gap-5">
        <Button
          className="bg-black h-20 border-2 border-blue-600 flex flex-row items-center content-center"
          onClick={() => setActive(false)}
        >
          <p className="text-3xl font-bold ml-6">Form options</p>
          <img className="h-9 w-9" src={expandArrowUp} alt="menu" />
        </Button>
        <Card className="border-2 border-blue-600 bg-black">
          <CardHeader className="flex flex-row justify-center items-start my-2">
            <div className="flex flex-col items-center">
              <p className="font-['Roboto'] mb-2 text-xl">Filled by</p>
              <p className="text-5xl font-semibold">30</p>
            </div>
            <Divider
              orientation="vertical"
              className="bg-white h-20 mx-5 mt-1"
            />
            <div className="flex flex-col items-center m-0 p-0 gap-1">
              <p className="font-['Roboto'] mb-2 text-xl">Open Since</p>
              <p className="text-5xl font-semibold ">28-9-23</p>
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-blue-600 px-7">
          <CardBody className="flex flex-row items-center">
            <img className="h-14 w-14 mr-1" src={linkLogo} alt="menu" />
            <div className="flex flex-col p-3 gap-2">
              <p className="text-3xl font-bold">Form link</p>
              <p className="text-xl grow break-words">ergteterw46b746</p>
            </div>{" "}
            {/* Word wrapping not working */}
          </CardBody>
        </Card>
        <Button className="bg-zinc-300 h-20 hover:bg-white">
          <img className="h-10 w-10" src={viewForm} alt="menu" />
          <p className="text-3xl font-bold text-black">View form</p>
        </Button>
        <Button className="bg-zinc-300 h-20 hover:bg-white">
          <img className="h-9 w-9" src={stopForm} alt="menu" />
          <p className="text-3xl font-bold text-black">Stop form</p>
        </Button>
      </div>
    );
  } else {
    put = (
      <Button className="bg-blue-600 h-20 min-w-fit" onClick={() => setActive(true)}>
        <img className="h-8 w-8" src={releaseForm} alt="menu" />
        <p className="text-3xl font-bold lg:text-2xl">Release form</p>
      </Button>
    );
  }
  return <>{put}</>;
}
export default function Dashboard() {
  return (
    <>
      <NavbarComponent />
      <div className="flex flex-col gap-5 p-7 font-['Poppins'] lg:flex-row lg:flex-no-wrap lg:px-32">
        <Card className="rounded-[12px] border-slate-800 border-2 lg:py-8 lg:m-0 shrink-0">
          <CardHeader className="gap-4 px-6 h-32 flex lg:flex-col lg:h-72 lg:items-center lg:w-64">
            <img
              className="h-full p-2 opacity-90 lg:p-0 lg:m-0"
              src={userLogo}
              alt="menu"
            />
            <div className="flex flex-col lg:items-center lg:m-0">
              <p className="text-4xl font-bold lg:w-fit">Admin</p>
              <p className="text-2xl">Institute Name</p>
            </div>
            <img
              className="h-4/6 p-2 ml-auto lg:hidden"
              src={downArrowFilled}
              alt="menu"
            />
          </CardHeader>
        </Card>
        <Card className="rounded-[12px] border-slate-800 border-2 px-9  lg:grow">
          <CardHeader className="m-0 p-0">
            <p className="font-bold text-2xl mt-6 mb-4">Registered Hostels</p>
          </CardHeader>
          <CardBody className="m-0 mb-4 p-0 pb-4 flex-row gap-4 flex-wrap items-center">
            <DashButton>Name</DashButton>
            <DashButton>Name</DashButton>
            <DashButton>Vikram Sarabai</DashButton>
            <DashButton>Name</DashButton>
            <img className="w-8 h-8" src={AddFilled} alt="menu" />
            {/*change such that onfocus becomes white */}
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
        <FormControlsSection className="shrink-0" />
      </div>
    </>
  );
}
