import { Text, Flex, Heading, Button } from '@chakra-ui/react'
import React from 'react'
import { BsChatRightTextFill } from "react-icons/bs";
import { PiPaperPlaneRightFill } from "react-icons/pi";


const Message = () => {
  return (
    <Flex h="80vh" justify="center" align="center" flexDirection={"column"}>
      <BsChatRightTextFill size="40px" />
      <Heading size="lg" my={5}>
        No messages
      </Heading>
      <Text>Messages from the team will be shown here</Text>
      <Button
        rightIcon={<PiPaperPlaneRightFill color="white" size={20} />}
        colorScheme="blue"
        variant="solid"
        mt={10}
      >
        Send us a message
      </Button>
    </Flex>
  );
}

export default Message