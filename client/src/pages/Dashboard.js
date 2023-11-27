import NavbarComponent from "../components/NavbarComponent";
import userLogo from "../images/userLogo.svg";
import downArrowFilled from "../images/downArrowFilled.svg";
import FooterComponent from "../components/FooterComponent";
import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
import { useState, useEffect, createContext } from "react";
import FormPlusModal from "../components/FormPlusModal";
import whiteEditPencil from "../images/whiteEditPencil.svg";
import FormControlsSection from "../components/FormControlsSection";
import FormControlsButton from "../components/FormControlsButton";
import DashButton from "../components/DashButton";
import axios from "axios";
import { BrowserRouter as Router, Route, Link as Li } from 'react-router-dom';
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
export const AdminContext = createContext(null);

function FloorRoomsInfo({ floor, rooms }) {
  return (
    <div className="flex flex-row mx-4">
      <div className="flex flex-col items-center">
        <p className="font-['Roboto'] mb-2 text-lg">Floor</p>
        <p className="text-6xl font-semibold">{floor}</p>
      </div>
      <Divider orientation="vertical" className="bg-white h-24 mx-3" />
      <div className="flex flex-col items-center">
        <p className="font-['Roboto'] mb-2 text-lg">Rooms</p>
        <p className="text-6xl font-semibold">{rooms}</p>
      </div>
    </div>
  );
}

export default function DashboardTest() {
  const [formActive, setFormActive] = useState(false);
  const [hostels, setHostels] = useState([]);
  // const [admin_ID, setAdmin] = useState("1234");
  const [floorsInfo, setFloorsInfo] = useState([]);
  const [updateemail,setupdateemail]=useState("");
  const [updatecontact,setupdatecontact]=useState("");

  const ID = localStorage.getItem("adminID");
  const [admin_ID, setAdmin] = useState(ID);
  const [cred, setcred] = useState({
    name: "",
    contact: "",
    insti: "",
    email: "",
  });
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [activeTab, setActiveTab] = useState("");
  // console.log("active", activeTab);
  const getHostel = (admin_ID) => {
    axios
      .get("http://localhost:8000/getHostels", {
        params: {
          admin_ID: admin_ID,
        },
      })
      .then((res) => {
        console.log("called", res.data.registered);
        setHostels(res.data.registered);
      })
      .catch((err) => console.log(err));
  };
  const handleSubmit=(e)=>{
    // e.preventdefault();
    axios
      .get("http://localhost:8000/updatecred", {
        params: {
          admin_ID: admin_ID,
          email:updateemail,
          contact:updatecontact,
        },
      })
      .then((data) => {
        // console.log(data.data)
       
        // setupdatecontact(data.data.Contact);
        // setupdateemail(data.data.Email);
        alert("Updated Email/Contact Successfully");

        
      })
      .catch((err) => console.log(err));


  }
  const getcred = () => {
    axios
      .get("http://localhost:8000/getcred", {
        params: {
          admin_ID: admin_ID,
        },
      })
      .then((data) => {
       
        setcred({
          name: data.data.Name,
          contact: data.data.Contact,
          insti: data.data.InstituteName,
          email: data.data.Email,
        });
        
      })
      .catch((err) => console.log(err));
  };

  const getbutton = () => {
    axios
      .get("http://localhost:8000/getbutton", {
        params: {
          hostelID:activeTab
        },
      })
      .then((data) => {

        console.log("thsi",data.data);
        if(data.data==true){
        setFormActive(true);}
        else{
          setFormActive(false);
        }
       
        
      })
      .catch((err) => console.log(err));
  };


  const formcontrol=async ()=>{

  }
  
  useEffect(() => {
    getHostel(admin_ID);
    getcred();
    
  }, []);
  useEffect(()=>{
    getbutton();
  },[activeTab]);
  // console.log("Floors", floorsInfo);
  return (
    <>
      <AdminContext.Provider value={{ admin_ID, setAdmin }}>
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
                  <p className="text-4xl font-bold lg:w-fit">{cred.name}</p>
                  <p className="text-2xl">{cred.insti}</p>
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
                {hostels.map((hostel, index) => {
                  return (
                    <DashButton
                      hostel_ID={hostel.HostelID}
                      key={hostel.HostelID}
                      setFloor={setFloorsInfo}
                      getHostel={getHostel}
                      setActive={setActiveTab}
                      active={activeTab}
                    >
                      {hostel.HostelName}
                    </DashButton>
                  );
                })}
                <FormPlusModal getHostel={getHostel}></FormPlusModal>
              </CardBody>
              <CardBody className="flex flex-row items-start m-0 mb-4 p-0 h-28">
                {floorsInfo.map((floor, index) => {
                  return (
                    <Li to={`/table?floor=${floor.Floor}&maxfloor=${floor.MaxRooms}&hostelID=${activeTab.current}`} classNames="hover:cursor-pointer">
                    <FloorRoomsInfo
                      classNames="hover:cursor-pointer"
                      key={floor.Floor}
                      floor={floor.Floor}
                      rooms={floor.MaxRooms}
                    />
                    </Li>
                  );
                })}
                {/* <FloorRoomsInfo floor={1} rooms={23} />
                <FloorRoomsInfo floor={2} rooms={12} /> */}
              </CardBody>
            </Card>
            <div className="flex flex-col gap-5 lg:max-w-xs">
              <div className="max-lg:hidden grow">
                <Card className="border-2 border-blue-600 bg-black h-full px-6 pt-1">
                  <CardHeader className="flex flex-row items-center my-2 text-2xl font-bold gap-3">
                    <p>User details</p>
                    <img className="h-5 w-5 hover:cursor-pointer" onClick={onOpen} src={whiteEditPencil} alt="menu" />
                    { (
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              placement="top-center"
              size="lg"
              scrollBehavior="inside"
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1 text-2xl">
                      Edit details
                    </ModalHeader>
                    <form>
                      <ModalBody>
                        <Input
                          autoFocus
                          label="email"
                          placeholder="Edit Email"
                          variant="bordered"
                          id="Email"
                          name="email"
                          onChange={(e)=>{setupdateemail(e.target.value)}}
                          value={updateemail}
                          classNames={{
                            label: "text-lg",
                            input: ["placeholder:text-xl", "text-xl"],
                            innerWrapper: "bg-transparent",
                            inputWrapper: ["h-20"],
                          }}
                        />
                        <Input
                          label="Contact"
                          placeholder="Edit contact"
                          type="number"
                          variant="bordered"
                          id="contact"
                          name="contact"
                          onChange={(e)=>{setupdatecontact(e.target.value)}}
                          value={updatecontact}
                          classNames={{
                            label: "text-lg",
                            input: ["placeholder:text-xl", "text-xl"],
                            innerWrapper: "bg-transparent",
                            inputWrapper: ["h-20"],
                          }}
                        />
                        </ModalBody>
                      <ModalFooter>
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                        <Button color="primary" onPress={onClose} onClick={handleSubmit} type="submit">
                          Submit
                        </Button>
                      </ModalFooter>
                      
                    </form>
                  </>
                )}
              </ModalContent>
            </Modal>)}
                  </CardHeader>
                  <CardBody className="m-0 p-0 px-3">
                    <div className="text-xl flex flex-row">
                      <p className="w-fit font-bold mr-2">Email</p>
                      {cred.email}
                    </div>
                    <div className="text-xl flex flex-row">
                      <p className="w-fit font-bold mr-2">Contact</p>
                      {cred.contact}
                    </div>
                  </CardBody>
                </Card>
              </div>
              <FormControlsButton
                hostel={activeTab}
                floor={floorsInfo}
                active={formActive}
                setActive={setFormActive}
                className="shrink-0"
              />
            </div>
          </div>
          <FormControlsSection active={formActive} hosID={activeTab.current} className="shrink-0" />
        </div>
        <FooterComponent />
      </AdminContext.Provider>
    </>
  );
}
