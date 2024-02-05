import {
  Link,
  Box,
  Flex,
  Text,
  Button,
  Stack,
  Image,
  Modal,
  useDisclosure,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../../Context/AppContext";

// interface SignInModalPropTypes {
//   setIsSigned: () => void;
// }

const SignInModal = ({}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setIsSigned } = useContext(AppContext);
  return (
    <>
      <Button onClick={onOpen} color={'white'} bg="blue.700">
        ადმინი
      </Button>

      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{/* log in form */}</ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="green"
              onClick={() => {
                setIsSigned(true);
                
              }}
            >
              Sign in
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignInModal;
