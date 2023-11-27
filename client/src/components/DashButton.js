import editPencil from "../images/editPencil.svg";
import blueCross from "../images/blueCross.svg";
import blueEditPencil from "../images/blueEditPencil.svg";
import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
import { useState, useRef, useContext } from "react";
import { AdminContext } from "../pages/Dashboard";
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

function DashButton({
  children,
  hostel_ID,
  setFloor,
  getHostel,
  active,
  setActive,
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { admin_ID, setAdmin } = useContext(AdminContext);
  // const active = useRef(false);
  const hostelID = useRef(hostel_ID);
  // console.log("test", hostelID===active);
  const [info, setInfo] = useState({
    hostelName: "",
    floors: "",
  });
  const [floorInfo, setFloorInfo] = useState({});
  const [modalType, setModalType] = useState(0);
  const handleInput = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (event) => {
    // console.log("Payload ", info);
    event.preventDefault();
    console.log("Edit info");
    console.log(info);
    console.log(floorInfo);
    try {
      axios
        .put("http://localhost:8000/api/admin/edit", info, {
          params: { hostelID: hostelID.current, type: "H_Info" },
        })
        .then(() => {
          getHostel(admin_ID);
          axios
            .put("http://localhost:8000/api/admin/edit", floorInfo, {
              params: { hostelID: hostelID.current, type: "F_Info" },
            })
            .then(() => setFloorRoutine());
        });
      // .then(
      //   axios.put("http://localhost:8000/api/admin/edit", floorInfo, {
      //     params: { hostelID: hostelID.current, type: "F_Info" },
      //   }).then((res)=>console.log(res.data))
      // );
    } catch (err) {
      console.error(err);
    }
  };

  let put;
  // console.log(active);
  if (hostelID.current === active.current) {
    put = (
      <div className="items-center flex flex-row gap-3">
        <p className="text-blue-500 font-['Roboto'] pt-1">{children}</p>
        <>
          <img
            className="h-5 w-5"
            src={blueCross}
            alt="menu"
            onClick={() => {
              setModalType(0);
              onOpen();
            }}
          />
          {modalType === 0 && (
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              isDismissable={false}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="flex flex-col gap-1">
                      Delete?
                    </ModalHeader>
                    <ModalBody>Confirm hostel delete.</ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button
                        color="primary"
                        onPress={() => {
                          deleteHostel();
                          onClose();
                        }}
                      >
                        Delete
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          )}
        </>

        <>
          <img
            onClick={() => {
              setModalType(1);
              onOpen();
            }}
            className="h-5 w-5"
            src={blueEditPencil}
            alt="menu"
          />
          {modalType === 1 && (
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
                                  floorInfo[index + 1]
                                    ? floorInfo[index + 1]
                                    : ""
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
                        <Button
                          color="danger"
                          variant="light"
                          onPress={onClose}
                        >
                          Close
                        </Button>
                        <Button color="primary" onPress={onClose} type="submit">
                          Submit
                        </Button>
                      </ModalFooter>
                    </form>
                  </>
                )}
              </ModalContent>
            </Modal>
          )}
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
  const deleteHostel = () => {
    axios
      .delete("http://localhost:8000/api/admin/delete", {
        params: { hostelID: hostelID.current },
      })
      .then(() => getHostel(admin_ID))
      .catch((err) => console.log(err));
  };
  return (
    <Button
      className="rounded-lg w-fit h-12 text-2xl bg-zinc-300 focus:bg-white"
      onFocus={() => {
        setActive(hostelID);
      }}
      onPress={setFloorRoutine}
      // onBlur={() => {
      //   console.log("blur");
      //   setActive(false);
      //   }}
    >
      {put}
    </Button>
  );
}

export default DashButton;
