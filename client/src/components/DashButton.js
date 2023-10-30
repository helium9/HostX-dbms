import editPencil from "../images/editPencil.svg";
import blueCross from "../images/blueCross.svg";
import blueEditPencil from "../images/blueEditPencil.svg";
import { Card, CardHeader, CardBody, Button, Divider } from "@nextui-org/react";
import { useState } from "react";
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
                    <Button
                      color="primary"
                      onPress={() => {
                        console.log("sent");
                        onClose();
                      }}
                    >
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

export default DashButton;
