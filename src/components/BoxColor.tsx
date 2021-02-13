import React from 'react'
import { Box, Text} from '@chakra-ui/react';

type colorAtt = {
  name: string,
  code: string
}

type BoxProps = {
  colors: colorAtt[]
}

function BoxColor({colors}:BoxProps) {
  return (
    <div>
      <Box marginTop="15px">
        {colors.map(color => (
          <Box>
            <Text> {color.name} </Text>
            <Box height="50px" bg={color.code} cursor="pointer"></Box>
          </Box>
        ))}
      </Box>
    </div>
  )
}

export default BoxColor
