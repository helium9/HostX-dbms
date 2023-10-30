import releaseForm from "../images/releaseForm.svg";
import expandArrowUp from "../images/expandArrowUp.svg";
import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";

function FormControlsButton({ active, setActive }) {
  let put;
  if (active) {
    put = (
      <div className="flex flex-col gap-5">
        <Button
          className="bg-black h-20 border-2 min-w-fit border-blue-600 flex flex-row items-center content-center"
          onClick={() => setActive(false)}
        >
          <p className="text-3xl lg:text-2xl font-bold ml-6">Form options</p>
          <img className="h-9 w-9 mr-6" src={expandArrowUp} alt="menu" />
        </Button>
      </div>
    );
  } else {
    put = (
      <Button
        className="bg-blue-600 h-20 min-w-fit"
        onClick={() => setActive(true)}
      >
        <img className="h-8 w-8" src={releaseForm} alt="menu" />
        <p className="text-3xl font-bold lg:text-2xl">Release form</p>
      </Button>
    );
  }
  return <>{put}</>;
}

export default FormControlsButton;
