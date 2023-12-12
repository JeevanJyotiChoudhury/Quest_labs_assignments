import React from 'react'
import { IoSearch } from "react-icons/io5";
import { Flex, Text } from '@chakra-ui/react'

const Search = () => {
  return (
      <Flex bg={'#f2f2f2'} p={3} justify={'space-between'} align={'center'} rounded={'xl'}>
          <Text fontSize={'sm'} as='b'>Search for help</Text>
          <IoSearch color='blue'/>
    </Flex>
  )
}

export default Search