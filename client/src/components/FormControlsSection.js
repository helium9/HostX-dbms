import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
import linkLogo from "../images/linkLogo.svg";
import stopForm from "../images/stopForm.svg";
import viewForm from "../images/viewForm.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function FormControlsSection({ active,hosID }) {
  const [num,setnum]=useState("");
  const [formlink,setformlink]=useState("xxxxx");
  const [opensince,setopensince]=useState("2020-02-02");
  const copyStateValue = () => {
    
    navigator.clipboard.writeText(formlink)
      .then(() => {
        alert('Link copied to clipboard');
      })
      .catch((error) => {
        console.error('Copy failed:', error);
      });
  };
  const solve=()=>{
    axios
      .get("http://localhost:8000/solve", {
        params: {
          hostelID: hosID,
        },
      })
      .then((data) => {
        const output = data.data;
        console.log(output);
        const fields = ['Floor', 'Room',' ', 'Roll'];
        const csv = [fields.join(',')];
        output.forEach(item => {
          if(item.Roll){
            const row = [item.Floor, item.Room, " ", item.Roll.join(',')];
            csv.push(row.join(','));
          }
          // console.log(item);
        });
        console.log(csv);
        const blob = new Blob([csv.join('\n')], { type: 'text/csv' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'data.csv';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      })
      .catch((err) => console.log(err));
    
  }
  const getLink=()=>{
    axios
      .get("http://localhost:8000/getLink", {
        params: {
          email_ID: hosID,

        },
      })
      .then((data) => {
        
        setformlink(data.data["FormLink"]);
        setopensince(data.data["OpenSince"].split("T")[0]);
        
      })
      .catch((err) => console.log(err));

  }

  const getFilledBy = () => {
    axios
      .get("http://localhost:8000/getFilledBy", {
        params: {
          email_ID: hosID,
        },
      })
      .then((data) => {
       
        setnum(data.data['count(*)'])
        
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    
    getFilledBy();
    getLink();
  }, [hosID]);


  let put;
  if (active) {
    put = (
      <div className="flex flex-col gap-5 lg:flex-row lg:mx-32 lg:border-2 lg:border-blue-600 p-7 pt-0 lg:p-7 lg:rounded-[12px] lg:content-stretch lg:h-48">
        <Card className="border-2 border-blue-600 bg-black lg:px-4">
          <CardHeader className="flex flex-row justify-center items-start my-2 min-w-max">
            <div className="flex flex-col items-center">
              <p className="font-['Roboto'] mb-2 text-xl">Filled by</p>
              <p className="text-5xl font-semibold">{num}</p>
            </div>
            <Divider
              orientation="vertical"
              className="bg-white h-20 mx-5 mt-1"
            />
            <div className="flex flex-col items-center m-0 p-0 gap-1">
              <p className="font-['Roboto'] mb-2 text-xl">Open Since</p>
              <p className="text-4xl font-semibold ">{opensince}</p>
            </div>
          </CardHeader>
        </Card>
        <Card className="bg-blue-600 px-7 grow lg:px-4">
          <CardBody className="flex flex-row items-center">
            <img
              onClick={copyStateValue}
              className="h-14 w-14 lg:h-12 lg:w-12 mr-2 hover:cursor-pointer"
              src={linkLogo}
              alt="menu"
            />
            <div className="flex flex-col p-3 lg:p-1 gap-2">
              <p className="text-3xl font-bold lg:text-4xl">Form link</p>
              <p className="text-xl grow break-words lg:text-1xl">
                {formlink}
              </p>
            </div>{" "}
            {/* Word wrapping not working */}
          </CardBody>
        </Card>
        {/* <Button className="bg-zinc-300 h-20 hover:bg-white lg:flex lg:flex-col lg:h-full">
          <img className="h-10 w-10" src={viewForm} alt="menu" />
          <Link to="/Ptable" className="text-3xl font-bold text-black">
        View form
      </Link>
        </Button> */}
        <Button className="bg-zinc-300 h-20 hover:bg-white lg:flex lg:flex-col lg:h-full">
  <img className="h-10 w-10" src={viewForm} alt="menu" />
  <Link to={{ pathname: "/Ptable", state: { formlink } }} className="text-3xl font-bold text-black">
    View form
  </Link>
</Button>

        <Button onClick={solve} className="bg-zinc-300 h-20 hover:bg-white lg:flex lg:flex-col lg:h-full">
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
