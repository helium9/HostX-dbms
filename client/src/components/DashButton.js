import editPencil from "../images/editPencil.svg";
import blueCross from "../images/blueCross.svg";
import blueEditPencil from "../images/blueEditPencil.svg";
import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
import { useState, useRef } from "react";
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

function DashButton({ children, hostel_ID, setFloor }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [active, setActive] = useState(false);
  const hostelID = useRef(hostel_ID);
  const [info, setInfo] = useState({
    hostelName: "",
    floors: "",
  });
  const [floorInfo, setFloorInfo] = useState({});

  const handleInput = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    // console.log("Payload ", info);
    event.preventDefault();
    console.log("Edit info");
    console.log(info);
    console.log(floorInfo);
    // try {
    //   axios
    //     .post("http://localhost:8000/api/admin/submit", info, {
    //       params: { type: "H_Info" },
    //     })
    //     .then((response) => {
    //       axios.post(
    //         "http://localhost:8000/api/admin/submit",
    //         { ...floorInfo, hostelID: response.data.hostelID },
    //         {
    //           params: { type: "F_Info" },
    //         }
    //       );
    //     })
    //     .then((response) => {
    //       // console.log(response);
    //       getHostel(admin_ID);
    //     });
    // } catch (err) {
    //   console.error(err);
    // }
  };

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
            size="lg"
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalHeader className="flex flex-col gap-1 text-2xl">
                    Edit details
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
                        name="floors"
                        onChange={handleInput}
                        value={info.floors}
                        classNames={{
                          label: "text-lg",
                          input: ["placeholder:text-xl", "text-xl"],
                          innerWrapper: "bg-transparent",
                          inputWrapper: ["h-20"],
                        }}
                      />
                      {Array(Number(info.floors))
                        .fill(null)
                        .map((_, index) => {
                          return (
                            <Input
                              label={`Floor ${index + 1} rooms`}
                              placeholder="Total Rooms"
                              type="number"
                              variant="bordered"
                              id="floorsInfo"
                              name="floorsInfo"
                              key={index}
                              onChange={(event) =>
                                setFloorInfo({
                                  ...floorInfo,
                                  [index + 1]: event.target.value,
                                })
                              }
                              value={
                                floorInfo[index + 1] ? floorInfo[index + 1] : ""
                              }
                              classNames={{
                                label: "text-lg",
                                input: ["placeholder:text-xl", "text-xl"],
                                innerWrapper: "bg-transparent",
                                inputWrapper: ["h-20"],
                              }}
                            />
                          );
                        })}
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

  const setFloorRoutine = () => {
    axios
      .get("http://localhost:8000/getFloors", {
        params: { hostelID: hostelID.current },
      })
      .then((res) => setFloor(res.data.floorsInfo))
      .catch((err) => console.log(err));
  };

  return (
    <Button
      className="rounded-lg w-fit h-12 text-2xl bg-zinc-300 focus:bg-white"
      onFocus={() => {
        setFloorRoutine();
        setActive(true);
      }}
      onBlur={() => setActive(false)}
    >
      {put}
    </Button>
  );
}

export default DashButton;
