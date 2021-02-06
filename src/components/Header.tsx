import React from 'react'
import {Flex, Text} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <Flex 
      as="nav"
      align="center"
      justify="space-between"
      overflow="hidden"
      top="0"
      width="100%"
      wrap="wrap"
      padding="10px"
      bg="white"
      boxShadow="lg"
      marginBottom="25px">
      <Flex align="center" mr={5}>
      <Link to="/">
        <Text
          fontWeight="Bold"
          fontSize="x-large"
          >
          Color Gallery
        </Text>
      </Link>
      </Flex>
    </Flex>
  )
}
