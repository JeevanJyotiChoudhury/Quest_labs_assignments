import { Box, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { PiPaperPlaneRightFill } from "react-icons/pi";

const MessageInput = () => {
  return (
    <Flex justify="space-between" mt="1rem" bg={"white"} p={3} rounded={'xl'}>
      <Box>
        <Text fontSize="sm" fontWeight={'semibold'}>
          Send us a message
        </Text>
        <Text fontSize="sm" color={'gray'} >We typically reply within a day</Text>
      </Box>
      <Flex justify={'center'} align={'center'}>
        <PiPaperPlaneRightFill color='blue' size={20}/>
      </Flex>
    </Flex>
  );
}

export default MessageInput