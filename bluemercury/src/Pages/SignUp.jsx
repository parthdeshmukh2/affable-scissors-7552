import { Box, Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const SignUp = () => {
const [email, setEmail] = useState("");
const [pass, setPass] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");

const handleSignUp = async () => {
    if(email, pass, firstName, lastName){
        const payload = {
            Email:email, 
            Password:pass, 
            FirstName:firstName,
            LastName:lastName
        }
        await fetch("https://stark-lake-19402.herokuapp.com/user/signup", {
            method:"POST",
            body: JSON.stringify(payload), 
            headers:{"Content-Type":"application/json"}
        })
        // .then((res)=> res.json())
        //     .then((res)=> {
        //         console.log(res);
              
        //     }
            //     )
            // .catch((err)=> console.log(err));
            alert("SignUp SuccessFull")

    }
}
  return (
    <Box
    w={{ base: "90%", sm: "90%", lg: "35%" }}
    m="auto"
    mt="16"
    display="flex"
    flexDirection="column"
  >
    <Box display="flex">
      <Text
        m="auto"
        fontSize="4xl"
        color="rgb(18,40,76)"
        fontWeight="400"
        fontFamily="Montserrat Light,sans-serif"
      >
       CREATE ACCOUNT
      </Text>
    </Box>
    <Box display="flex">
      <Text
        m="auto"
        mt="4"
        fontSize="md"
        color="gray"
        fontWeight="thin"
        fontFamily="Montserrat Light,sans-serif"
      >
        {" "}
        Complete the form below to create a bluemercury.com account.
      </Text>
    </Box>
    <Box mt="8" display="flex" flexDirection="column">
      <Input
        w="90%"
        m="auto"
        focusBorderColor="rgb(18,40,76)"
        borderColor="1px solid black"
        borderRadius="0px"
        p="4"
        placeholder="Email"
        type="email"
        onChange={(e)=> setEmail(e.target.value)}
      />
      <Input
        w="90%"
        m="auto"
        mt="4"
        focusBorderColor="rgb(18,40,76)"
        borderColor="1px solid black"
        borderRadius="0px"
        p="4"
        placeholder="First Name"
        type="text"
        onChange={(e)=> setFirstName(e.target.value)}
      />

<Input
        w="90%"
        m="auto"
        mt="4"
        focusBorderColor="rgb(18,40,76)"
        borderColor="1px solid black"
        borderRadius="0px"
        p="4"
        placeholder="Last Name"
        type="text"
        onChange={(e)=> setLastName(e.target.value)}
      />

<Input
        w="90%"
        m="auto"
        mt="4"
        focusBorderColor="rgb(18,40,76)"
        borderColor="1px solid black"
        borderRadius="0px"
        p="4"
        placeholder="Password"
        type="password"
        onChange={(e)=> setPass(e.target.value)}
      />
      <Button
        w="50%"
        m="auto"
        mt="4"
        bg="rgb(18,40,76)"
        borderRadius="0"
        color="White"
        onClick={handleSignUp}
      >
       CREATE ACCOUNT
      </Button>
    </Box>
    <Box display="flex" justifyContent="center" mt="8">
      <Text color="gray" fontSize="sm">
      Already have a bluemercury.com account?
      </Text>
      <Link to="/login">
        <Text
          ml="2"
          textDecoration="underline"
          fontSize="sm"
          color="rgb(18,40,76)"
        >
          Sign In
        </Text>
      </Link>
    </Box>
  </Box>
  )
}

export default SignUp
