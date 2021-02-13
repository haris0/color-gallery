import React from 'react'
import {Flex, Heading} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function header() {
  return (
    <Flex 
      as="nav"
      align="center"
      justify="space-between"
      overflow="hidden"
      position="fixed"
      top="0"
      width="100%"
      wrap="wrap"
      padding="1rem"
      bg="white"
      boxShadow="lg"
      marginBottom="15px">
      <Flex align="center" mr={5}>
      <Link to="/">
        <Heading
          as="h3" 
          size="md"
          color="#6A5ACD">
          Color Gallery
        </Heading>
      </Link>
      </Flex>
    </Flex>
  )
}
