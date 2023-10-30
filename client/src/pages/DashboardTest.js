import NavbarComponent from "../components/NavbarComponent";
import userLogo from "../images/userLogo.svg";
import downArrowFilled from "../images/downArrowFilled.svg";
import FooterComponent from "../components/FooterComponent";
import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
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
import whiteEditPencil from "../images/whiteEditPencil.svg";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import axios from 'axios'

// import {MailIcon} from './MailIcon.jsx';
// import {LockIcon} from './LockIcon.jsx';

import React from "react";

// export const MailIcon = (props) => (
//   <svg
//     aria-hidden="true"
//     fill="none"
//     focusable="false"
//     height="1em"
//     role="presentation"
//     viewBox="0 0 24 24"
//     width="1em"
//     {...props}
//   >
//     <path
//       d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
//       fill="currentColor"
//     />
//   </svg>
// );

// export const LockIcon = (props) => (
//     <svg
//       aria-hidden="true"
//       fill="none"
//       focusable="false"
//       height="1em"
//       role="presentation"
//       viewBox="0 0 24 24"
//       width="1em"
//       {...props}
//     >
//       <path
//         d="M12.0011 17.3498C12.9013 17.3498 13.6311 16.6201 13.6311 15.7198C13.6311 14.8196 12.9013 14.0898 12.0011 14.0898C11.1009 14.0898 10.3711 14.8196 10.3711 15.7198C10.3711 16.6201 11.1009 17.3498 12.0011 17.3498Z"
//         fill="currentColor"
//       />
//       <path
//         d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2C6.37 2 5.72 5.58 5.72 8.28V9.53C2.92 9.88 2 11.3 2 14.79V16.65C2 20.75 3.25 22 7.35 22H16.65C20.75 22 22 20.75 22 16.65V14.79C22 11.3 21.08 9.88 18.28 9.53ZM12 18.74C10.33 18.74 8.98 17.38 8.98 15.72C8.98 14.05 10.34 12.7 12 12.7C13.66 12.7 15.02 14.06 15.02 15.72C15.02 17.39 13.67 18.74 12 18.74ZM7.35 9.44C7.27 9.44 7.2 9.44 7.12 9.44V8.28C7.12 5.35 7.95 3.4 12 3.4C16.05 3.4 16.88 5.35 16.88 8.28V9.45C16.8 9.45 16.73 9.45 16.65 9.45H7.35V9.44Z"
//         fill="currentColor"
//       />
//     </svg>
//   );

function DashButton({ children }) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const [active, setActive] = useState(false);
  let put;
  if (active) {
    put = (
      <div className="items-center flex flex-row gap-3">
        <p className="text-blue-500 font-['Roboto'] pt-1">{children}</p>
        <img className="h-5 w-5" src={blueCross} alt="menu" />
        {/* <img className="h-5 w-5" src={blueEditPencil} alt="menu" /> */}
        <>
        <Button onPress={onOpen} size="sm" radius="lg" className="h-8 min-w-fit bg-black//[.06]"><img className="h-5 w-5" src={blueEditPencil} alt="menu" /></Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">Edit</ModalHeader>
              <ModalBody>
              <Input
                    autoFocus
                    /*endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }*/
                    label="Name"
                    placeholder="Edit hostel name"
                    variant="bordered"
                    id="hostelNameEdit"
                    name="hostelNameEdit"
                    // onChange={handleInput}
                    // value={post.hostelName}
                    classNames={{
                      label: "text-lg",
                      input: [
                        "placeholder:text-xl"
                      ],
                      innerWrapper: "bg-transparent",
                      inputWrapper: [
                     "h-20",
                      ],
                    }}
                    // value={post}
                  />
                  <Input
                   /* endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }*/
                    label="Number of floors"
                    placeholder="Enter number of floors"
                    type="number"
                    variant="bordered"
                    id="hostelUnit5Edit"
                    name="hostelUnit5Edit"
                    // onChange={handleInput}
                    // value={post.hostelUnit5}
                    classNames={{
                      label: "text-lg",
                      input: [
                        "placeholder:text-xl",
                        "text-xl"
                      ],
                      innerWrapper: "bg-transparent",
                      inputWrapper: [
                     "h-20",
                      ],
                    }}
                    // value={post}
                  />
                  <Input
                   /* endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }*/
                    label="6 unit rooms"
                    placeholder="Edit number of 6 unit rooms"
                    type="number"
                    variant="bordered"
                    id="hostelUnit6Edit"
                    name="hostelUnit6Edit"
                    // onChange={handleInput}
                    // value={post.hostelUnit6}
                    classNames={{
                      label: "text-lg",
                      input: [
                        "placeholder:text-xl",
                        "text-xl"
                      ],
                      innerWrapper: "bg-transparent",
                      inputWrapper: [
                     "h-20",
                      ],
                    }}
                    // value={post}
                  />
                {/* <Input
                  // endContent={
                  //   <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                /> */}
                {/* <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div> */}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Edit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
      </div>
      // </Button>
        
      // </div>
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
{/* <Button onPress={onOpen} size="sm" radius="lg" className="h-8 min-w-fit bg-black//[.06]"><img className="w-8 h-8" src={AddFilled} alt="menu" /></Button> */}
function FormPlusModal(){

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    const [post,setPost]=useState({
      hostelName:'',
      Numberoffloors:1
    
    })
    
    const [floornum,setfloornum]=useState([0]);
    const makefloors=()=>{
      console.log(post.Numberoffloors);
      const inputElements = [];
      for(let i=1;i<=post.Numberoffloors;i++){
        setfloornum(...floornum,0);
         inputElements.push(
          <Input
                   /* endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }*/
                    key={i}
                    label={ "Enter number of rooms in floor" + {i}}
                    placeholder="Enter number rooms"
                    type="number"
                    variant="bordered"
                    id="hostelrooms"
                    name="hostelrooms"
                    // onChange={(e)=>{set()}}
                    value={floornum[i]}
                    classNames={{
                      label: "text-lg",
                      input: [
                        "placeholder:text-xl",
                        "text-xl"
                      ],
                      innerWrapper: "bg-transparent",
                      inputWrapper: [
                     "h-20",
                      ],
                    }}
                    // value={post}
                  />
        );


      }
      return (
        <div>
          {inputElements}
        </div>
      );
    }

    

    const handleInput=(event)=>{
      setPost({...post,[event.target.name]: event.target.value});
      // makefloors();
  
    }

    const handleSubmit = async (event) => { 
      event.preventDefault();
      
      try {
        // const response = await axios.post('https://jsonplaceholder.typicode.com/posts', post); 
        const response = await axios.post('http://localhost:8000/api/admin/submit', post); 
        console.log(response);
      } catch (err) {
        console.error(err);
      }
    }
    return (
      <>
        <Button onPress={onOpen} size="sm" radius="lg" className="h-8 min-w-fit bg-black//[.06]"><img className="w-8 h-8" src={AddFilled} alt="menu" /></Button>
        <Modal  
          isOpen={isOpen} 
          onOpenChange={onOpenChange}
          placement="top-center"
          size="lg"
          // className="h-96"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1 text-2xl">Register a new hostel</ModalHeader>
                <form onSubmit={handleSubmit}>
                <ModalBody>
                  <Input
                    autoFocus
                    /*endContent={
                      <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }*/
                    label="Name"
                    placeholder="Enter hostel name"
                    variant="bordered"
                    id="hostelName"
                    name="hostelName"
                    onChange={handleInput}
                    value={post.hostelName}
                    classNames={{
                      label: "text-lg",
                      input: [
                        "placeholder:text-xl",
                        "text-xl"
                      ],
                      innerWrapper: "bg-transparent",
                      inputWrapper: [
                     "h-20",
                      ],
                    }}
                    // value={post}
                  />
                  <Input
                   /* endContent={
                      <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                    }*/
                    label="Number of floors"
                    placeholder="Enter number of floors"
                    type="number"
                    variant="bordered"
                    id="Numberoffloors"
                    name="Numberoffloors"
                    onChange={handleInput}
                    value={post.Numberoffloors}
                    classNames={{
                      label: "text-lg",
                      input: [
                        "placeholder:text-xl",
                        "text-xl"

                      ],
                      innerWrapper: "bg-transparent",
                      inputWrapper: [
                     "h-20",
                      ],
                    }}
                    // value={post}
                  />
                  
                 
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose} type="submit" >
                    Register
                  </Button>
                </ModalFooter>
                  </form>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    );
}

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
export default function DashboardTest() {
  const [formActive, setFormActive] = useState(false);

  return (
    <>
      <div className="flex flex-col min-h-screen">
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
              <p className="font-bold text-2xl mt-6 mb-4 lg:text-3xl lg:font-normal">
                Registered Hostels
              </p>
            </CardHeader>
            <CardBody className="m-0 mb-4 p-0 pb-4 flex-row gap-4 flex-wrap items-center">
              <DashButton>Name</DashButton>
              <DashButton>Name</DashButton>
              <DashButton>Vikram Sarabai</DashButton>
              <DashButton>Name</DashButton>
              <FormPlusModal></FormPlusModal>
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
          <div className="flex flex-col gap-5 lg:max-w-xs">
            <div className="max-lg:hidden grow">
              <Card className="border-2 border-blue-600 bg-black h-full px-6 pt-1">
                <CardHeader className="flex flex-row items-center my-2 text-2xl font-bold gap-3">
                  <p>User details</p>
                  <img className="h-5 w-5" src={whiteEditPencil} alt="menu" />
                </CardHeader>
                <CardBody className="m-0 p-0 px-3">
                  <div className="text-xl flex flex-row">
                    <p className="w-fit font-bold mr-2">Email</p>
                    admin@iiti.ac.in
                  </div>
                  <div className="text-xl flex flex-row">
                    <p className="w-fit font-bold mr-2">Contact</p>99999999999
                  </div>
                </CardBody>
              </Card>
            </div>

            <FormControlsButton
              active={formActive}
              setActive={setFormActive}
              className="shrink-0"
            />
          </div>
        </div>
        <FormControlsSection active={formActive} className="shrink-0" />
      </div>
      <FooterComponent />
    </>
  );
}

// import NavbarComponent from "../components/NavbarComponent";
// import userLogo from "../images/userLogo.svg";
// import downArrowFilled from "../images/downArrowFilled.svg";
// import FooterComponent from "../components/FooterComponent";
// import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
// import editPencil from "../images/editPencil.svg";
// import blueCross from "../images/blueCross.svg";
// import blueEditPencil from "../images/blueEditPencil.svg";
// import { useState } from "react";
// import AddFilled from "../images/AddFilled.svg";
// import releaseForm from "../images/releaseForm.svg";
// import expandArrowUp from "../images/expandArrowUp.svg";
// import linkLogo from "../images/linkLogo.svg";
// import stopForm from "../images/stopForm.svg";
// import viewForm from "../images/viewForm.svg";
// import whiteEditPencil from "../images/whiteEditPencil.svg";
// import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
// // import {MailIcon} from './MailIcon.jsx';
// // import {LockIcon} from './LockIcon.jsx';

// import React from "react";
// export const MailIcon = (props) => (
//   <svg
//     aria-hidden="true"
//     fill="none"
//     focusable="false"
//     height="1em"
//     role="presentation"
//     viewBox="0 0 24 24"
//     width="1em"
//     {...props}
//   >
//     <path
//       d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
//       fill="currentColor"
//     />
//   </svg>
// );

// export const LockIcon = (props) => (
//     <svg
//       aria-hidden="true"
//       fill="none"
//       focusable="false"
//       height="1em"
//       role="presentation"
//       viewBox="0 0 24 24"
//       width="1em"
//       {...props}
//     >
//       <path
//         d="M12.0011 17.3498C12.9013 17.3498 13.6311 16.6201 13.6311 15.7198C13.6311 14.8196 12.9013 14.0898 12.0011 14.0898C11.1009 14.0898 10.3711 14.8196 10.3711 15.7198C10.3711 16.6201 11.1009 17.3498 12.0011 17.3498Z"
//         fill="currentColor"
//       />
//       <path
//         d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2C6.37 2 5.72 5.58 5.72 8.28V9.53C2.92 9.88 2 11.3 2 14.79V16.65C2 20.75 3.25 22 7.35 22H16.65C20.75 22 22 20.75 22 16.65V14.79C22 11.3 21.08 9.88 18.28 9.53ZM12 18.74C10.33 18.74 8.98 17.38 8.98 15.72C8.98 14.05 10.34 12.7 12 12.7C13.66 12.7 15.02 14.06 15.02 15.72C15.02 17.39 13.67 18.74 12 18.74ZM7.35 9.44C7.27 9.44 7.2 9.44 7.12 9.44V8.28C7.12 5.35 7.95 3.4 12 3.4C16.05 3.4 16.88 5.35 16.88 8.28V9.45C16.8 9.45 16.73 9.45 16.65 9.45H7.35V9.44Z"
//         fill="currentColor"
//       />
//     </svg>
//   );

// function DashButton({ children }) {
//   const [active, setActive] = useState(false);
//   let put;
//   if (active) {
//     put = (
//       <div className="items-center flex flex-row gap-3">
//         <p className="text-blue-500 font-['Roboto'] pt-1">{children}</p>
//         <img className="h-5 w-5" src={blueCross} alt="menu" />
//         <img className="h-5 w-5" src={blueEditPencil} alt="menu" />
//       </div>
//     );
//   } else {
//     put = (
//       <div className="items-center flex flex-row gap-3">
//         <p className="text-black font-['Roboto'] pt-1">{children}</p>
//         <img className="h-5 w-5" src={editPencil} alt="menu" />
//       </div>
//     );
//   }
//   return (
//     <Button
//       className="rounded-lg w-fit h-12 text-2xl bg-zinc-300 focus:bg-white"
//       onFocus={() => setActive(true)}
//       onBlur={() => setActive(false)}
//     >
//       {put}
//     </Button>
//   );
// }
// function FormControlsButton({ active, setActive }) {
//   let put;
//   if (active) {
//     put = (
//       <div className="flex flex-col gap-5">
//         <Button
//           className="bg-black h-20 border-2 min-w-fit border-blue-600 flex flex-row items-center content-center"
//           onClick={() => setActive(false)}
//         >
//           <p className="text-3xl lg:text-2xl font-bold ml-6">Form options</p>
//           <img className="h-9 w-9 mr-6" src={expandArrowUp} alt="menu" />
//         </Button>
//       </div>
//     );
//   } else {
//     put = (
//       <Button
//         className="bg-blue-600 h-20 min-w-fit"
//         onClick={() => setActive(true)}
//       >
//         <img className="h-8 w-8" src={releaseForm} alt="menu" />
//         <p className="text-3xl font-bold lg:text-2xl">Release form</p>
//       </Button>
//     );
//   }
//   return <>{put}</>;
// }
// {/* <Button onPress={onOpen} size="sm" radius="lg" className="h-8 min-w-fit bg-black//[.06]"><img className="w-8 h-8" src={AddFilled} alt="menu" /></Button> */}
// function FormPlusModal(){

//     const {isOpen, onOpen, onOpenChange} = useDisclosure();

//     return (
//       <>
//         <Button onPress={onOpen} size="sm" radius="lg" className="h-8 min-w-fit bg-black//[.06]"><img className="w-8 h-8" src={AddFilled} alt="menu" /></Button>
//         <Modal 
//           isOpen={isOpen} 
//           onOpenChange={onOpenChange}
//           placement="top-center"
//         >
//           <ModalContent>
//             {(onClose) => (
//               <>
//                 <ModalHeader className="flex flex-col gap-1">Register a new hostel</ModalHeader>
//                 <ModalBody>
//                   <Input
//                     autoFocus
//                     /*endContent={
//                       <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                     }*/
//                     label="Name"
//                     placeholder="Enter hostel name"
//                     variant="bordered"
//                   />
//                   <Input
//                    /* endContent={
//                       <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
//                     }*/
//                     label="Unit"
//                     placeholder="Enter number of room in unit(5 or 6)"
//                     type="number"
//                     variant="bordered"
//                   />
//                     {/* <div className="flex py-2 px-1 justify-between">
//                     <Checkbox
//                       classNames={{
//                         label: "text-small",
//                       }}
//                     >
//                       Remember me
//                     </Checkbox>
//                     <Link color="primary" href="#" size="sm">
//                       Forgot password?
//                     </Link>
//                   </div> */}
//                 </ModalBody>
//                 <ModalFooter>
//                   <Button color="danger" variant="light" onPress={onClose}>
//                     Close
//                   </Button>
//                   <Button color="primary" onPress={onClose}>
//                     Register
//                   </Button>
//                 </ModalFooter>
//               </>
//             )}
//           </ModalContent>
//         </Modal>
//       </>
//     );
// }

// function FormControlsSection({ active }) {
//   let put;
//   if (active) {
//     put = (
//       <div className="flex flex-col gap-5 lg:flex-row lg:mx-32 lg:border-2 lg:border-blue-600 p-7 pt-0 lg:p-7 lg:rounded-[12px] lg:content-stretch lg:h-48">
//         <Card className="border-2 border-blue-600 bg-black lg:px-4">
//           <CardHeader className="flex flex-row justify-center items-start my-2 min-w-max">
//             <div className="flex flex-col items-center">
//               <p className="font-['Roboto'] mb-2 text-xl">Filled by</p>
//               <p className="text-5xl font-semibold">30</p>
//             </div>
//             <Divider
//               orientation="vertical"
//               className="bg-white h-20 mx-5 mt-1"
//             />
//             <div className="flex flex-col items-center m-0 p-0 gap-1">
//               <p className="font-['Roboto'] mb-2 text-xl">Open Since</p>
//               <p className="text-5xl font-semibold ">28-9-23</p>
//             </div>
//           </CardHeader>
//         </Card>
//         <Card className="bg-blue-600 px-7 grow lg:px-4">
//           <CardBody className="flex flex-row items-center">
//             <img
//               className="h-14 w-14 lg:h-12 lg:w-12 mr-2"
//               src={linkLogo}
//               alt="menu"
//             />
//             <div className="flex flex-col p-3 lg:p-1 gap-2">
//               <p className="text-3xl font-bold lg:text-4xl">Form link</p>
//               <p className="text-xl grow break-words lg:text-2xl">
//                 ergteterw46b746
//               </p>
//             </div>{" "}
//             {/* Word wrapping not working */}
//           </CardBody>
//         </Card>
//         <Button className="bg-zinc-300 h-20 hover:bg-white lg:flex lg:flex-col lg:h-full">
//           <img className="h-10 w-10" src={viewForm} alt="menu" />
//           <p className="text-3xl font-bold text-black">View form</p>
//         </Button>
//         <Button className="bg-zinc-300 h-20 hover:bg-white lg:flex lg:flex-col lg:h-full">
//           <img className="h-9 w-9" src={stopForm} alt="menu" />
//           <p className="text-3xl font-bold text-black">Stop form</p>
//         </Button>
//       </div>
//     );
//   } else {
//     put = <div></div>;
//   }
//   return <>{put}</>;
// }
// export default function DashboardTest() {
//   const [formActive, setFormActive] = useState(false);

//   return (
//     <>
//       <div className="flex flex-col min-h-screen">
//         <NavbarComponent />
//         <div className="flex flex-col gap-5 p-7 font-['Poppins'] lg:flex-row lg:flex-no-wrap lg:px-32">
//           <Card className="rounded-[12px] border-slate-800 border-2 lg:py-8 lg:m-0 shrink-0">
//             <CardHeader className="gap-4 px-6 h-32 flex lg:flex-col lg:h-72 lg:items-center lg:w-64">
//               <img
//                 className="h-full p-2 opacity-90 lg:p-0 lg:m-0"
//                 src={userLogo}
//                 alt="menu"
//               />
//               <div className="flex flex-col lg:items-center lg:m-0">
//                 <p className="text-4xl font-bold lg:w-fit">Admin</p>
//                 <p className="text-2xl">Institute Name</p>
//               </div>
//               <img
//                 className="h-4/6 p-2 ml-auto lg:hidden"
//                 src={downArrowFilled}
//                 alt="menu"
//               />
//             </CardHeader>
//           </Card>
//           <Card className="rounded-[12px] border-slate-800 border-2 px-9  lg:grow">
//             <CardHeader className="m-0 p-0">
//               <p className="font-bold text-2xl mt-6 mb-4 lg:text-3xl lg:font-normal">
//                 Registered Hostels
//               </p>
//             </CardHeader>
//             <CardBody className="m-0 mb-4 p-0 pb-4 flex-row gap-4 flex-wrap items-center">
//               <DashButton>Name</DashButton>
//               <DashButton>Name</DashButton>
//               <DashButton>Vikram Sarabai</DashButton>
//               <DashButton>Name</DashButton>
//               <FormPlusModal></FormPlusModal>
//               {/*change such that onfocus becomes white */}
//             </CardBody>
//             <CardBody className="flex flex-row items-start m-0 mb-4 p-0 h-28">
//               <div className="flex flex-col items-center">
//                 <p className="font-['Roboto'] mb-2 text-lg">5 units rooms</p>
//                 <p className="text-6xl font-semibold">12</p>
//               </div>
//               <Divider orientation="vertical" className="bg-white h-24 mx-4" />
//               <div className="flex flex-col items-center">
//                 <p className="font-['Roboto'] mb-2 text-lg">6 units rooms</p>
//                 <p className="text-6xl font-semibold">50</p>
//               </div>
//             </CardBody>
//           </Card>
//           <div className="flex flex-col gap-5 lg:max-w-xs">
//             <div className="max-lg:hidden grow">
//               <Card className="border-2 border-blue-600 bg-black h-full px-6 pt-1">
//                 <CardHeader className="flex flex-row items-center my-2 text-2xl font-bold gap-3">
//                   <p>User details</p>
//                   <img className="h-5 w-5" src={whiteEditPencil} alt="menu" />
//                 </CardHeader>
//                 <CardBody className="m-0 p-0 px-3">
//                   <div className="text-xl flex flex-row">
//                     <p className="w-fit font-bold mr-2">Email</p>
//                     admin@iiti.ac.in
//                   </div>
//                   <div className="text-xl flex flex-row">
//                     <p className="w-fit font-bold mr-2">Contact</p>99999999999
//                   </div>
//                 </CardBody>
//               </Card>
//             </div>

//             <FormControlsButton
//               active={formActive}
//               setActive={setFormActive}
//               className="shrink-0"
//             />
//           </div>
//         </div>
//         <FormControlsSection active={formActive} className="shrink-0" />
//       </div>
//       <FooterComponent />
//     </>
//   );
// }