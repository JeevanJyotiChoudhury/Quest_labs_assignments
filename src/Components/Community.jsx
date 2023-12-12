import { Box,Text } from "@chakra-ui/react";
import React from "react";

const Community = ({image,title,description}) => {
  return (
    <Box bg={"white"} rounded='xl'  mt={'1rem'} border='1px' borderColor={'gray.200'}>
      <Box p={4}>
      <img
        src={image}
        alt=""
      />
      </Box>
      <hr />
      <Box p={5}  fontSize="sm">
      <Text fontWeight={'semibold'}>{title}</Text>
      <Text fontSize="sm" color={'gray'}>
        {description}
      </Text>
      </Box>
    </Box>
  );
};

export default Community;
