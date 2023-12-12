import { Heading ,Box} from '@chakra-ui/react';
import React from 'react'

const Headings = () => {
  return (
    <Box mt="6rem" mx={4}>
      <Heading as="h1" size="lg" noOfLines={1} color={"white"}>
        Hello there.
      </Heading>
      <Heading as="h1" size="lg" noOfLines={1} color={'white'}>
        How can we help?
      </Heading>
    </Box>
  );
}

export default Headings