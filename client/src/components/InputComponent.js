import React from "react";

import {Input} from "@nextui-org/react";

export default function InputComponent() {
  return (
    <div className="flex w-80 mt-2.5 md:w-200 md:flex-nowrap gap-4 md:mt-5  ">
      {/* <Input type="email" label="Email" /> */}
      <Input className=" " type="text" label="Roommate Preferences" placeholder="cse220001069" />
    </div>
  );
}
