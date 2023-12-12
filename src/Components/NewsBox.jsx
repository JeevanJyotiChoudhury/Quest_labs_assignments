import React from 'react'
import { Box, Flex, Image, Text } from '@chakra-ui/react';

import { IoIosArrowForward } from "react-icons/io";

const NewsBox = ({ url, text1, text2, btnText1, btnText2 }) => {
  return (
    <Box my={5} rounded={"xl"} border="1px" borderColor={"gray.200"}>
      <Image
        src={url}
        borderRadius="10px"
        borderBottomLeftRadius={0}
        borderBottomRightRadius={0}
      />
      <Box mx={5}>
        <Flex my={5}>
          <Box bg="#e5eeff" px="10px" rounded="25%" color="#0057ff">
            {btnText1}
          </Box>
          <Box bg="#e5eeff" px="10px" rounded="25%" ml={5} color="#0057ff">
            {btnText2}
          </Box>
        </Flex>
        <Flex mb={4}>
          <Box fontSize={"sm"} w="80%">
            <Text as="b" color="blue">
              {text1}
            </Text>
            <Text>{text2}</Text>
          </Box>
          <Flex justify="center" align={"center"} w="20%">
            <IoIosArrowForward color="blue" />
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default NewsBox