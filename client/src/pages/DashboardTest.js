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

export const AdminContext = createContext(null);

function FloorRoomsInfo({ floor, rooms }) {
  return (
    <div className="flex flex-row mx-3">
      <div className="flex flex-col items-center">
        <p className="font-['Roboto'] mb-2 text-lg">Floor</p>
        <p className="text-6xl font-semibold">{floor}</p>
      </div>
      <Divider orientation="vertical" className="bg-white h-24 mx-4" />
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
  const ID = localStorage.getItem('adminID');
  const [admin_ID, setAdmin] = useState(ID);
  const [cred,setcred]=useState({name:"",contact:"",insti:"",email:""});


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
const getcred = () => {
    axios
      .get("http://localhost:8000/getcred", {
        params: {
          admin_ID: admin_ID,
        },
      })
      .then((data) => {
        setcred({
          name: data.name,
          contact: data.contact,
          insti: data.insti,
          email: data.email
        });
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getHostel(admin_ID);
    getcred();
  }, []);

  // console.log(hostels);
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
                  return <DashButton key={index}>{hostel}</DashButton>;
                })}
                <FormPlusModal getHostel={getHostel}></FormPlusModal>
                {/*change such that onfocus becomes white */}
              </CardBody>
              <CardBody className="flex flex-row items-start m-0 mb-4 p-0 h-28">
                <FloorRoomsInfo floor={1} rooms={23} />
                <FloorRoomsInfo floor={2} rooms={12} />
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
                      {cred.email}
                    </div>
                    <div className="text-xl flex flex-row">
                      <p className="w-fit font-bold mr-2">Contact</p>{cred.contact}
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
      </AdminContext.Provider>
    </>
  );
}
