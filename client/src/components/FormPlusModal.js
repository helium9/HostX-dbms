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

function FormPlusModal({getHostel}) {
  const { admin_ID, setAdmin } = useContext(AdminContext);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [info, setInfo] = useState({
    admin_ID: admin_ID,
    hostelName: "",
    floors: null,
  });

  const handleInput = (event) => {
    setInfo({ ...info, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    // console.log("Payload ", info);
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
    getHostel(admin_ID);
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
