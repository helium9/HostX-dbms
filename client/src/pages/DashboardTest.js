import NavbarComponent from "../components/NavbarComponent";
import userLogo from "../images/userLogo.svg";
import downArrowFilled from "../images/downArrowFilled.svg";
import FooterComponent from "../components/FooterComponent";
import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
import editPencil from "../images/editPencil.svg";
import blueCross from "../images/blueCross.svg";
import blueEditPencil from "../images/blueEditPencil.svg";
import { useState,useEffect } from "react";
import AddFilled from "../images/AddFilled.svg";
import releaseForm from "../images/releaseForm.svg";
import expandArrowUp from "../images/expandArrowUp.svg";
import linkLogo from "../images/linkLogo.svg";
import stopForm from "../images/stopForm.svg";
import viewForm from "../images/viewForm.svg";
import whiteEditPencil from "../images/whiteEditPencil.svg";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@nextui-org/react";
import axios from "axios";

function DashButton({ children }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [active, setActive] = useState(false);
  let put;
  if (active) {
    put = (
      <div className="items-center flex flex-row gap-3">
        <p className="text-blue-500 font-['Roboto'] pt-1">{children}</p>
        <img className="h-5 w-5" src={blueCross} alt="menu" />
        <>
          <img
            onClick={onOpen}
            className="h-5 w-5"
            src={blueEditPencil}
            alt="menu"
          />
          <Modal
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="top-center"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 text-2xl">
                    Edit
                  </ModalHeader>
                  <ModalBody>
                    <Input
                      autoFocus
                      label="Name"
                      placeholder="Edit hostel name"
                      variant="bordered"
                      id="hostelNameEdit"
                      name="hostelNameEdit"
                      classNames={{
                        label: "text-lg",
                        input: ["placeholder:text-xl"],
                        innerWrapper: "bg-transparent",
                        inputWrapper: ["h-20"],
                      }}
                    />
                    <Input
                      label="Floors"
                      placeholder="Edit number of total floors"
                      type="number"
                      variant="bordered"
                      id="hostelUnit5Edit"
                      name="hostelUnit5Edit"
                      classNames={{
                        label: "text-lg",
                        input: ["placeholder:text-xl", "text-xl"],
                        innerWrapper: "bg-transparent",
                        inputWrapper: ["h-20"],
                      }}
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="flat" onPress={onClose}>
                      Close
                    </Button>
                    <Button color="primary" onPress={()=>{
                      console.log("sent");
                      onClose();
                    }}>
                      Edit
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        </>
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

function FormPlusModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [info, setInfo] = useState({
    hostelName: "",
    floors: "",
  });

  const handleInput = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8000/api/admin/submit",
        info
      );
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <button onClick={onOpen}>
        <img className="w-8 h-8" src={AddFilled} alt="menu" />
      </button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-2xl">
                Register a new hostel
              </ModalHeader>
              <form onSubmit={handleSubmit}>
                <ModalBody>
                  <Input
                    autoFocus
                    label="Name"
                    placeholder="Enter hostel name"
                    variant="bordered"
                    id="hostelName"
                    name="hostelName"
                    onChange={handleInput}
                    value={info.hostelName}
                    classNames={{
                      label: "text-lg",
                      input: ["placeholder:text-xl", "text-xl"],
                      innerWrapper: "bg-transparent",
                      inputWrapper: ["h-20"],
                    }}
                  />
                  <Input
                    label="Floors"
                    placeholder="Total floors"
                    type="number"
                    variant="bordered"
                    id="floors"
                    name="Numberoffloors"
                    onChange={handleInput}
                    value={info.floors}
                    classNames={{
                      label: "text-lg",
                      input: ["placeholder:text-xl", "text-xl"],
                      innerWrapper: "bg-transparent",
                      inputWrapper: ["h-20"],
                    }}
                  />
                </ModalBody>
                <ModalFooter>
                  <Button color="danger" variant="light" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onClose} type="submit">
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
  const [hostels,sethostels]=useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/admin/gethostelname')
      .then(response => {
        
       
        sethostels(response.data);
         // Update the state with the fetched data
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);
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