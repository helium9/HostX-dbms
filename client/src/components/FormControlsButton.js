import releaseForm from "../images/releaseForm.svg";
import expandArrowUp from "../images/expandArrowUp.svg";
import axios from "axios";
import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";

function FormControlsButton({ active, setActive ,floor,hostel}) {
  const checkdone=()=>{
    
    console.log(floor);
    console.log(hostel);
    axios
      .get("http://localhost:8000/checkform", {
        params: {
          hostelID:hostel.current,
          floorinfo:floor
        },
      })
      .then((data) => {
        if(data.data==true){
          console.log("Success");
          setActive(true);

        }
        else{
          alert("Fill all the details of the floors");
        }
        
        // console.log("Success")
        
      })
      .catch((err) => console.log(err));

  }
  let put;
  if (active) {
    put = (
      <div className="flex flex-col gap-5">
        <Button
          className="bg-black h-20 border-2 min-w-fit border-blue-600 flex flex-row items-center content-center"
          // onClick={() => setActive(false)}
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
        onClick={checkdone}
      >
        <img className="h-8 w-8" src={releaseForm} alt="menu" />
        <p className="text-3xl font-bold lg:text-2xl">Release form</p>
      </Button>
    );
  }
  return <>{put}</>;
}

export default FormControlsButton;
