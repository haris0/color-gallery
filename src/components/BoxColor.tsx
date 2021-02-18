import React from 'react'
import { Box, Text, useToast} from '@chakra-ui/react';
import copy from 'copy-to-clipboard';

type colorAtt = {
  name: string,
  code: string
}

type BoxProps = {
  colors: colorAtt[]
}

function BoxColor({colors}:BoxProps) {

  const toast = useToast()
  const copiedCodeToast =(code:string)=> {
    toast({
      position: "top",
      title: code + " Copied to clipboard!",
      status: "info",
      duration: 2000,
    })
  }

  const copyCode = (code:string) => (event: any) =>{
    copy(code);
    copiedCodeToast(code)
  }

  return (
    <div>
      <Box marginTop="15px">
        {colors.map(color => (
          <Box key={color.code} onClick={copyCode(color.code)}>
            <Text> {color.name} </Text>
            <Box 
              height="50px" 
              bg={color.code}
              cursor="pointer">
              <Box
                width="85px"
                textAlign="center"
                float="right"
                fontSize="10px"
                padding="5px"
                bg="black"
                color="white">
                {"Copy "+color.code}
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </div>
  )
}

export default BoxColor
