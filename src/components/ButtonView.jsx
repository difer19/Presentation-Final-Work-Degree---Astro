import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Image
} from "@nextui-org/react";
import { BookOpen } from "@geist-ui/react-icons";
import ImagesShower from "../components/ImagesShower.jsx";

export default function App(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button
        onPress={onOpen}
        color="secondary"
        aria-label="Like"
        size="md"
        className="items-center"
        client:visible
      >
        <BookOpen></BookOpen>
        {props.text}
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"5xl"} >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col ">
                {props.title}
              </ModalHeader>
              <ModalBody>
                <img src={props.src}></img>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
