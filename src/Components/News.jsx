import React from "react";
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Flex,
  Image,
  Text,
} from "@chakra-ui/react";
import { IoIosArrowForward } from "react-icons/io";
import NewsBox from "./NewsBox";
const News = () => {
  return (
    <Box bg="white" padding="0px" m={0}>
      <Flex
        bg="blue"
        justify={"center"}
        align={"center"}
        as="b"
        color="white"
        h="90px"
        rounded={"xl"}
      >
        News
      </Flex>
      <Box mx={4}>
        <Flex justify="space-between" mt={4} mx={4}>
          <Box>
            <Text>Latest</Text>
            <Text>From Team Intercom</Text>
          </Box>
          <Box>
            <AvatarGroup size="md" max={3}>
              <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
              <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
              <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            </AvatarGroup>
          </Box>
        </Flex>
        <NewsBox
          url={
            "https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png"
          }
          text1={
            "Support customers with Fin in 45 languages—join the open beta"
          }
          text2={
            " Support your customers with Fin in 45 languages—with no extra setup required."
          }
          btnText1={"New"}
          btnText2={"+2 labels"}
        />
        <NewsBox
          url={
            "https://downloads.intercomcdn.com/i/o/850964865/8d1717b98563f4697ea8945a/Cover.png"
          }
          text1={" Streamline external collaboration with side conversations"}
          text2={
            "  Start a conversation with external partners from within the context of a conversation ..."
          }
          btnText1={"Inbox"}
          btnText2={"New"}
        />
      </Box>
    </Box>
  );
};

export default News;
