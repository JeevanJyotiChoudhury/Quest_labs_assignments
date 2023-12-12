import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Flex,
  Box,
  position,
} from "@chakra-ui/react";
import React, { useState } from "react";
import HomePage from "./Pages/HomePage";
import Footer from "./Components/Footer";
import { BsChatRightFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import AllPages from './Pages/AllPages';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  return (
    <Box>
      <Flex
        h="100vh"
        w="100vw"
        justify={"flex-end"}
        align={"flex-end"}
        pr={5}
        pb={5}
      >
        <Flex
          ref={btnRef}
          onClick={onOpen}
          rounded={"50%"}
          bg={"blue"}
          width={"50px"}
          h={"50px"}
          justify={"center"}
          align={"center"}
        >
          <Box >
            {isOpen ? (
              <IoIosArrowDown size={"20px"} color="white" />
            ) : (
              <BsChatRightFill size={"30px"} color="white" />
            )}
          </Box>
        </Flex>
      </Flex>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior="inside"
        size='sm'
      >
        <ModalContent style={{position:'absolute',right:'2%',bottom:'2%',maxHeight:'80vh'}}>
          <ModalBody style={{margin:"0px",padding:"0px"}}
            
          >
            {/* <HomePage /> */}
            <AllPages/>
          </ModalBody>
          <ModalFooter>
            <Footer/>
          </ModalFooter >
        </ModalContent>
      </Modal>
    </Box>
  );
}

export default App;
