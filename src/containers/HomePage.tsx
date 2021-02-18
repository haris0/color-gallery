import React, {useState} from 'react'
import { Container, 
         Heading,
         Box,
         Input,
         SimpleGrid} from '@chakra-ui/react';
import BoxColor from '../components/BoxColor';
import {colorType, ColorList} from '../components/ColorList';

export default function HomePage() {

  const [colorList, setColorList] = useState<colorType[]>(ColorList);
  const [filteredColorList, setFilteredColorList] = useState<colorType[]>(ColorList);
  const [keyWord, setKeyword] = useState<string>("");

  const handleChange = (event:React.ChangeEvent<{ value: string }>) => {
    let val = event.target.value
    setKeyword(val);
    if (val === "") {
      setFilteredColorList(ColorList);
    } else {
      setFilteredColorList( colorList.filter((color) => color.name.includes(val)))
    }
  };

  return (
    <div>
      <Container
        maxW="960px"
        marginTop="85px"
        marginBottom="16px">
        <Box>
        <Input value={keyWord} onChange={handleChange} placeholder="Any Color?"></Input>
        <SimpleGrid columns={[1, null, 3]} marginTop="20px" marginBottom="35px" spacing="20px">
          {filteredColorList.map(color => (
            <Box key={color.name}>
                <Heading as="h3" size="lg">{color.name}</Heading>
                <BoxColor colors={color.colors}></BoxColor>
            </Box>
          ))}
        </SimpleGrid>
        </Box>
      </Container>
    </div>
  )
}
