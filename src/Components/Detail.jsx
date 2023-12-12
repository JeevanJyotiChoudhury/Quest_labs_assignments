import React from "react";
import Search from "./Search";
import { IoIosArrowBack,IoMdResize,IoIosArrowForward } from "react-icons/io";

import {
  Box,
  useDisclosure,
  Button,
  Modal,
  ModalContent,
  ModalBody,
  Flex,
  Text,
  ModalHeader,
} from "@chakra-ui/react";
import InnerModal from "./InnerModal";

const data = [
  "Send custom user attributes to Intercom",
  "Tracking user data in Intercom",
  "Customize the pre-made email templates",
  "Forward your email to your team inbox",
];

const Detail = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("sm");
  const [selectedItem, setSelectedItem] = React.useState(null);
    const btnRef = React.useRef(null);
    const handleResizeClick = () => {
        setSize((prevSize) => (prevSize === "sm" ? "xl" : "sm"));
  };
  
  const handleItemClick = (el) => {
    setSelectedItem(el);
    onOpen();
  };

  return (
    <Box bg={"white"} rounded="xl" p={2} mt="1rem" border='1px' borderColor={'gray.200'}>
      <Box>
        <Search />
      </Box>
      <Box>
        {data.map((el, index) => {
          return (
            <Box key={index}>
              <Flex
                onClick={() => handleItemClick(el)}
                p={3}
                my={1}
                justify={"space-between"}
                align={"center"}
                rounded={"xl"}
                _hover={{ bg: "#e5eeff" }}
              >
                <Text fontSize={"sm"} _hover={{ color: "blue" }}>
                  {el}
                </Text>
                <IoIosArrowForward color="blue" />
              </Flex>
              <Modal
                size={size}
                onClose={onClose}
                finalFocusRef={btnRef}
                isOpen={isOpen}
                scrollBehavior="inside"
              >
                <ModalContent style={{position:'absolute',right:'2%',bottom:'3%'}}>
                  <ModalHeader>
                    <Flex justify={"space-between"} align={"center"} py={1}>
                      <Button>
                        <IoIosArrowBack
                          onClick={onClose}
                          color="blue"
                          size="20px"
                        />
                      </Button>
                      <Button onClick={handleResizeClick}>
                        <IoMdResize />
                      </Button>
                    </Flex>
                  </ModalHeader>
                  <ModalBody>
                  {selectedItem && <InnerModal el={selectedItem} />}
                  </ModalBody>
                </ModalContent>
              </Modal>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Detail;
