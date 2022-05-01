import React from "react"
import { useState,useEffect } from "react"
import axios from "axios"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
  } from '@chakra-ui/react'
 const Home = () =>{
     const [data, setData] = useState([])
     useEffect(()=>{
        getData()
     },[])
     const getData = async (data) =>{
         try{
            const res = await axios.get("http://localhost:5450/listing")
          setData([...res.data])
            
         }catch(e){
             console.log(e.message)
         }   
     }
     console.log(data)
     
    return (
        <>
          <TableContainer>
  <Table variant='striped' colorScheme='teal'>
 
    <Thead>
      <Tr>
        <Th>ID</Th>
        <Th>Name</Th>
        <Th>City</Th>
        <Th>Address</Th>
        <Th>Capacity</Th>
        <Th>Cost_per_day</Th>
        <Th>Verified</Th>
        <Th>Rating</Th>
        <Th>img</Th>
        
      </Tr>
    </Thead>
    <Tbody>
        {
            data.map(ele=>{
                return(
                <Tr >
                     <Td >{ele.id}</Td>
                    <Td>{ele.Name}</Td>
                    <Td>{ele.City}</Td>
                    <Td>{ele.Address}</Td>
                    <Td>{ele.Capacity}</Td>
                    <Td>{ele.Cost_per_day}</Td>
                    <Td>{ele.Verified}</Td>
                    <Td>{ele.Rating}</Td>
                    <Td>{ele.img}</Td>
                  </Tr>
                )
            })
        }
    </Tbody>
  </Table>
</TableContainer>
        </>
    )
}
export default Home