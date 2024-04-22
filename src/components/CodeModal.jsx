import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { Code } from "@geist-ui/react-icons";
import CodeMirror from "@uiw/react-codemirror";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";

export default function App(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const codeString = props.code;
 

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
        <Code></Code>
        {props.text}
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size={"4xl"}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col ">
                {props.title}
              </ModalHeader>
              <ModalBody>
                <CodeMirror value={codeString} height="500px" theme={vscodeDark}/>
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
