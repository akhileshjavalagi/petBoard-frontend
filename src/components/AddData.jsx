import React, { useState } from "react"
import {
    FormControl,FormLabel,Input,Box,Button } from '@chakra-ui/react'
  <Input placeholder='Basic usage' />
  export const AddData = () =>{

      const [user,setData] = useState({
         id:"", Name:"", City:"",  Address:"",  Capacity:"", Cost_per_day:"", 
          Verfied:"", Rating:""
      })
     
      const handleChange = (e) =>{
        let name, value
          name = e.target.name
          value = e.target.value
          setData({...user, [name]:value})
       //   console.log(value)
      }

      const createData= async(e)=>{
        e.preventDefault();
        const {id, Name, City,  Address,  Capacity, Cost_per_day, 
        Verfied, Rating}=user;
        const resp=await fetch("http://localhost:5450/listing/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                id,Name, City,  Address,  Capacity, Cost_per_day, 
                    Verfied, Rating
            }),
        });
        const res=await resp.json();
        console.log(res,":res");
        alert("submmitted successfully")
      }

      return (
          <>
         <Box width="200px" ml="550px">
         <FormControl method="POST" >
         <FormLabel  ml="65px">Id</FormLabel>
            <Input h="30px" name="id" value={user.id} onChange={handleChange}/>
            <FormLabel  ml="65px">Name</FormLabel>
            <Input h="30px" name="Name" value={user.Name} onChange={handleChange}/>
            <FormLabel ml="65px">City</FormLabel>
            <Input h="30px" name="City" value={user.City} onChange={handleChange}/>
            <FormLabel  ml="65px">Address</FormLabel>
            <Input h="30px" name="Address"  value={user.Address} onChange={handleChange}/ >
            <FormLabel ml="65px">Capacity</FormLabel>
            <Input h="30px" name="Capacity"  value={user.Capacity} onChange={handleChange}/>
            <FormLabel  ml="65px">Cost_per_day</FormLabel>
            <Input h="30px" name="Cost_per_day"  value={user.Cost_per_day} onChange={handleChange}/>
            <FormLabel ml="65px">Verified</FormLabel>
            <Input h="30px" type="text" name="Verified" value={user.Verfied} onChange={handleChange}/>
            <FormLabel  ml="65px">Rating</FormLabel>
            <Input h="30px" name="Rating" value={user.Rating} onChange={handleChange}/>
       
        <Button name="Submit" type="Submit" value="Submit" onClick={createData} colorScheme='blue'>Add</Button>
        </FormControl>
         </Box>
         
          
          </>
      )
  }