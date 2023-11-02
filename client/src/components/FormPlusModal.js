import AddFilled from "../images/AddFilled.svg";
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
import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
import axios from "axios";
import { useState, useContext, createContext } from "react";
import { AdminContext } from "../pages/DashboardTest";

function FormPlusModal({ getHostel }) {
  const { admin_ID, setAdmin } = useContext(AdminContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  
  const [info, setInfo] = useState({
    admin_ID: admin_ID,
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
    try {
      axios
        .post("http://localhost:8000/api/admin/submit", info, {
          params: { type: "H_Info" },
        })
        .then((response) => {
          axios.post(
            "http://localhost:8000/api/admin/submit",
            { ...floorInfo, hostelID: response.data.hostelID },
            {
              params: { type: "F_Info" },
            }
          );
        })
        .then((response) => {
          // console.log(response);
          getHostel(admin_ID);
        });
    } catch (err) {
      console.error(err);
    }
  };
  // console.log(floorInfo);
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
  );
}

export default FormPlusModal;
