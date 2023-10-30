import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
import linkLogo from "../images/linkLogo.svg";
import stopForm from "../images/stopForm.svg";
import viewForm from "../images/viewForm.svg";

function FormControlsSection({ active }) {
  let put;
  if (active) {
    put = (
      <div className="flex flex-col gap-5 lg:flex-row lg:mx-32 lg:border-2 lg:border-blue-600 p-7 pt-0 lg:p-7 lg:rounded-[12px] lg:content-stretch lg:h-48">
        <Card className="border-2 border-blue-600 bg-black lg:px-4">
          <CardHeader className="flex flex-row justify-center items-start my-2 min-w-max">
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
        <Card className="bg-blue-600 px-7 grow lg:px-4">
          <CardBody className="flex flex-row items-center">
            <img
              className="h-14 w-14 lg:h-12 lg:w-12 mr-2"
              src={linkLogo}
              alt="menu"
            />
            <div className="flex flex-col p-3 lg:p-1 gap-2">
              <p className="text-3xl font-bold lg:text-4xl">Form link</p>
              <p className="text-xl grow break-words lg:text-2xl">
                ergteterw46b746
              </p>
            </div>{" "}
            {/* Word wrapping not working */}
          </CardBody>
        </Card>
        <Button className="bg-zinc-300 h-20 hover:bg-white lg:flex lg:flex-col lg:h-full">
          <img className="h-10 w-10" src={viewForm} alt="menu" />
          <p className="text-3xl font-bold text-black">View form</p>
        </Button>
        <Button className="bg-zinc-300 h-20 hover:bg-white lg:flex lg:flex-col lg:h-full">
          <img className="h-9 w-9" src={stopForm} alt="menu" />
          <p className="text-3xl font-bold text-black">Stop form</p>
        </Button>
      </div>
    );
  } else {
    put = <div></div>;
  }
  return <>{put}</>;
}

export default FormControlsSection;
