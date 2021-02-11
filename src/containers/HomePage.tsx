import React, {useState, useEffect} from 'react'
import { Container, 
         Select,
         Checkbox, 
         Box,
         SimpleGrid} from '@chakra-ui/react';
import BoxColor from '../components/BoxColor'

//Get RGB Random Color
const getRandomColor = (n: number): { [key: string]: string[]; } =>{
  let colors: { [key: string]: string[]; } = {};
  let all: Array<string> = [];
  let red: Array<string> = [];
  let green: Array<string> = [];
  let blue: Array<string> = [];
  for(let i=0; i < n; i++){
    let r:number=Math.floor(Math.random() * 255) + 1;
    let g:number=Math.floor(Math.random() * 255) + 1;
    let b:number=Math.floor(Math.random() * 255) + 1;
    let color:string = 'rgb('+ r + ',' +  g +',' + b +')'
    all.push(color);
    if(r > g && r > b){
      red.push(color)
    }else if(g > r && g > b){
      green.push(color)
    }else{
      blue.push(color)
    }
  }
  colors = {
    'All':all, 
    'Red':red, 
    'Green':green, 
    'Blue':blue
  }
  return colors
};

export default function HomePage() {
  const [category, setCategory] = useState<string>("All");
  const [colors, setColors] = useState<{ [key: string]: string[]; }>(getRandomColor(40));
  const [selectedColors, setSelectedColors] = useState<string[]>([]);

  useEffect(()=>{
    setSelectedColors(colors[category])
  },[category])

  return (
    <div>
      <Container
        maxW="960px"
        marginBottom="16px">
        <Box>
          <Select onChange={(e: React.ChangeEvent<{ value: string }>) => setCategory(e.target.value)}>
            <option value="All">All</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
          </Select>
          <Checkbox marginTop="15px">Darker</Checkbox>
        </Box>
        <Box marginTop="20px">
          <SimpleGrid columns={[2, null, 5]} marginTop="30px" spacing="20px">
            {selectedColors.map(color => (
              <BoxColor key={color} color={color}></BoxColor>
            ))}
          </SimpleGrid>
        </Box>
      </Container>
    </div>
  )
}
