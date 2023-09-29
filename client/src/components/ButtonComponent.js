import React from "react";

import {Button} from "@nextui-org/react";

export default function ButtonComponent() {
  return (
    <div className="flex flex-wrap ml-72 md:ml-96 mt-5  ">
      <Button  className="hover:bg-blue-400" color="primary" variant="solid">
        Submit
      </Button>
        
     
    </div>
  );
}
