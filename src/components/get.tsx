import React from 'react';
import axios from 'axios';
import {Box, Button, Image, Stack, Heading, Text, Card, CardBody, Divider, CardFooter, ButtonGroup, Input, FormControl,FormLabel} from '@chakra-ui/react'



export default function GetData(){
     const [photo, setPhoto] = React.useState("");
     const [text, setText] = React.useState("");
     const [price, setPrice] = React.useState<any>();
     const [data, setData] = React.useState([]);


     React.useEffect(()=>{
        axios.get("https://63e225d4109336b6cb00a67d.mockapi.io/TodoDb").then((res) => {
            console.log(res.data);
            setData(res.data);
          });
     },[])
    


     

     const get = ()=>{


     }

     const post = ()=>{

        axios.post('https://63e225d4109336b6cb00a67d.mockapi.io/TodoDb',{
            photo,
            text,
            price
        })

        axios.get("https://63e225d4109336b6cb00a67d.mockapi.io/TodoDb")
        

     }

     const del = (id:any)=>{
        axios.delete(`https://63e225d4109336b6cb00a67d.mockapi.io/TodoDb/${id}`).then(res => {
            setData(data.filter((dele)=>{
                return dele.id!=id
            }))
        })
        axios.get("https://63e225d4109336b6cb00a67d.mockapi.io/TodoDb")

     }

     const update = (id:any)=>{
        axios.put(`https://63e225d4109336b6cb00a67d.mockapi.io/TodoDb/${id}`,{
            photo,
            text,
            price
        })

     }


    
  
    return(
        <Box>
            
     <FormControl>
       <FormLabel>Add Photo</FormLabel>
       <Input type='text' onChange={(e) => {setPhoto(e.target.value)}} />
       <FormLabel>Add Text</FormLabel>
       <Input type='text' onChange={(e) => {setText(e.target.value)} }/>
       <FormLabel>Add Price</FormLabel>
       <Input type='number'  onChange={(e) => {setPrice(e.target.value)}}/>
       <Button variant='solid' colorScheme='blue' mt='10px' onClick={post}>
        Post
      </Button> 
      </FormControl>

      

       <Card maxW='xs'>
  <CardBody>
    <Image
      src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'> {data.text}</Heading>
       
      <Text color='blue.600' fontSize='2xl'>
       {data.photo}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue' onClick={(e:any)=>{del(e.id)}}>
        Delete
      </Button>
      <Button variant='solid' colorScheme='blue'  onClick={(e:any)=>{update(e.id)}}>
       Update
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</Box>

    )
}