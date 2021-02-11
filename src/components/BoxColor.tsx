import React from 'react'
import { Box, Text} from '@chakra-ui/react';

type BoxProps = {
  color: string,
}

function BoxColor({ color }: BoxProps) {
  return (
    <div>
      <Box height="100px" bg={color}>
      </Box>
      <Text>
          {color}
      </Text>
    </div>
  )
}

export default BoxColor
