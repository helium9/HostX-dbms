import NavbarComponent from "../components/NavbarComponent";
import { useState } from "react";
import { Button } from "@nextui-org/react";
import whiteTick from "../images/whiteTick.svg";
import FooterComponent from "../components/FooterComponent";

function InputComponent({ id, children = "Roll number", isDisabled = false }) {
  const [active, setActive] = useState(false);
  let opacity = isDisabled?"opacity-70":"opacity-100";
  // let disabledStyles = isDisabled? { border: "", textColor: "text-white" }:{ border: "border-zinc-800", textColor: "text-gray-400" };
  let activeAttributes = active
    ? { border: "border-blue-600", textColor: "text-blue-500" }
    : { border: "border-zinc-500", textColor: "text-white" };
  return (
    <div
      className={`rounded-lg bg-zinc-900 border-2 flex flex-col p-3 pt-1 gap-1 ${activeAttributes.border} ${opacity}`}
      onFocus={() => setActive(true)}
      onBlur={() => setActive(false)}
    >
      <label htmlFor={id} className={`${activeAttributes.textColor}`}>
        Roommate Preference
      </label>
      <input
        className={`bg-transparent focus:outline-none text-2xl`}
        disabled={isDisabled}
        type="text"
        name={id}
        id={id}
        placeholder={children}
      />
    </div>
  );
}

export default function Forms2() {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavbarComponent />
        <form className="flex flex-col w-96 lg:w-[32rem] self-center gap-3 mb-20">
          <p className="font-bold lg:text-4xl text-3xl m-4 lg:m-6 lg:ml-0 ml-0">
            Your preferences
          </p>
          <InputComponent id="P1" isDisabled={true}>220001001</InputComponent>
          <InputComponent id="P2" />
          <InputComponent id="P3" />
          <InputComponent id="P4" />
          <InputComponent id="P5" />
          <InputComponent id="P6" />
          <Button className="rounded-lg h-12 w-32 bg-blue-600 flex flex-row items-center m-0 p-0 gap-1 self-end mt-6">
            <img className="h-7 w-7" src={whiteTick} alt="menu" />
            <p className="text-xl font-bold">Submit</p>
          </Button>
        </form>
      </div>
      <FooterComponent />
    </>
  );
}
