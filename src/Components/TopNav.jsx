import React from "react";
import { Box, Image, AvatarGroup, Avatar, Flex } from "@chakra-ui/react";

const TopNav = () => {
  return (
    <Flex justify="space-between" mt={4} mx={4}>
      <Box w={"42px"}>
        <Image
          src="https://downloads.intercomcdn.com/i/o/355439/a7cdd3705c65918af17f3ce0/1bb87d41d15fe27b500a4bfcde01bb0e.png"
          alt=""
        />
      </Box>
      <Box>
        <AvatarGroup size="md" max={3}>
          <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
          <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
          <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        </AvatarGroup>
      </Box>
    </Flex>
  );
};

export default TopNav;
