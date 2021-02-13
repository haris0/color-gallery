import React, {useState, useEffect} from 'react'
import { Container, 
         Heading,
         Box,
         SimpleGrid} from '@chakra-ui/react';
import BoxColor from '../components/BoxColor';
import {colorType, ColorList} from '../components/ColorList';

export default function HomePage() {

  const [colorList, setColorList] = useState<colorType[]>(ColorList);

  useEffect(()=>{
  },[])

  return (
    <div>
      <Container
        maxW="960px"
        marginTop="85px"
        marginBottom="16px">
        <Box>
        <SimpleGrid columns={[1, null, 3]} marginBottom="35px" spacing="20px">
          {colorList.map(color => (
            <Box>
                <Heading as="h3" size="lg">{color.name}</Heading>
                <BoxColor key={color.name}  colors={color.colors}></BoxColor>
            </Box>
          ))}
        </SimpleGrid>
        </Box>
      </Container>
    </div>
  )
}
