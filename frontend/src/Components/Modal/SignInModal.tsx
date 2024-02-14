import { useState, useContext } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import axios from "axios"; 
import { AppContext } from "../../Context/AppContext"; 

const SignInModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); 
  const { setIsSigned } = useContext(AppContext); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("/posts/login", { email, password });

      if (response.status === 200) {
        setIsSigned(true);
      } else {
        setError(response.data.message || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setError("Internal Server Error");
    }
  };

  return (
    <>
      <Button color={"white"} bg="blue.700" onClick={onOpen}>
        ადმინი
      </Button>

      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Title</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              {error && <Text color="red.500">{error}</Text>}
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="green" onClick={handleLogin}>
              Sign in
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignInModal;
