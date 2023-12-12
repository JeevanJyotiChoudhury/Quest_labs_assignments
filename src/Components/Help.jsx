import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react'
import { IoSearch } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";

const helpArray = [
  {
    title: "Intercom Overview",
    desc: "see how your customer service solution works",
    number: 17,
  },
  {
    title: "Intercom Overview",
    desc: "see how your customer service solution works",
    number: 17,
  },
  {
    title: "Intercom Overview",
    desc: "see how your customer service solution works",
    number: 17,
  },
  {
    title: "Intercom Overview",
    desc: "see how your customer service solution works",
    number: 17,
  },
  {
    title: "Intercom Overview",
    desc: "see how your customer service solution works",
    number: 17,
  },
  {
    title: "Intercom Overview",
    desc: "see how your customer service solution works",
    number: 17,
  },
  {
    title: "Intercom Overview",
    desc: "see how your customer service solution works",
    number: 17,
  },
  {
    title: "Intercom Overview",
    desc: "see how your customer service solution works",
    number: 17,
  },
  {
    title: "Intercom Overview",
    desc: "see how your customer service solution works",
    number: 17,
  },
  {
    title: "Intercom Overview",
    desc: "see how your customer service solution works",
    number: 17,
  },
  {
    title: "Intercom Overview",
    desc: "see how your customer service solution works",
    number: 17,
  },
];

const Help = () => {
  return (
    <Box h="80vh">
      <Flex
        bg="blue"
        justify={"center"}
        align={"center"}
        as="b"
        color="white"
        rounded={"xl"}
        borderBottomLeftRadius={0}
        borderBottomRightRadius={0}
        flexDirection={"column"}
        py={3}
      >
        Help
        <Flex
          bg={"white"}
          p={3}
          justify={"space-between"}
          align={"center"}
          rounded={"xl"}
          w="90%"
          mt={3}
        >
          <Text fontSize={"sm"} color="gray">
            Search for help
          </Text>
          <IoSearch color="blue" />
        </Flex>
      </Flex>
      <Box p={4} color='black' fontWeight={'semibold'}>
        <Text>{helpArray.length} collections</Text>
      </Box>
      <hr />
      {helpArray.map((elem, index) => {
        return (
          <>
          <Flex my={4}  mx={4} py={2}>
            <Box fontSize={"sm"} w="90%">
              <Text fontWeight="semibold" color="black">
                {elem.title}
              </Text>
              <Text my={1}>{elem.desc}</Text>
              <Text color="gray">{elem.number} articles</Text>
            </Box>
            <Flex justify="center" align={"center"} w="10%">
              <IoIosArrowForward color="blue" />
            </Flex>
          </Flex>
            <hr />
            </>
        )
      })}
    </Box>
  );
}

export default Help