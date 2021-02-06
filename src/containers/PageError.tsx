import React from 'react'
import {Container, Text} from '@chakra-ui/react'

function page404() {
  return (
    <div>
      <Container
        maxW="960px"
        marginTop="85px"
        marginBottom="16px"
        textAlign="center">
        <Text
          fontSize="xx-large"
          fontWeight="bolder">
          Page Not Found
        </Text>
      </Container>
    </div>
  )
}

export default page404
