import { Box, Button, Input, Text } from "@chakra-ui/react";
import React, {useState} from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const handleLogin = async () =>{
        if(email, pass){
            const payload = {
               Email: email,
                 Password: pass
            }
            await fetch("https://stark-lake-19402.herokuapp.com/user/login", {
                method:"POST",
                body: JSON.stringify(payload), 
                headers:{"Content-Type":"application/json"}
            })
            .then((res)=> res.json())
            .then((res)=> {
                console.log(res.token);
                localStorage.setItem("token", res.token)
            }
                )
            .catch((err)=> console.log(err));
            alert("Login SuccessFull")
        }
        else{
            console.log("All Fields are required")
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
          LOGIN
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
          Please enter your e-mail and password:
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
          placeholder="Password"
          type="password"
          onChange={(e)=> setPass(e.target.value)}
        />
        <Button
          w="90%"
          m="auto"
          mt="4"
          bg="rgb(18,40,76)"
          borderRadius="0"
          color="White"
          onClick={handleLogin}
        >
          LOGIN
        </Button>
      </Box>
      <Box display="flex" justifyContent="center" mt="8">
        <Text color="gray" fontSize="sm">
          Don't have an account?
        </Text>
        <Link to="/signUp">
          <Text
            ml="2"
            textDecoration="underline"
            fontSize="sm"
            color="rgb(18,40,76)"
          >
            Create One
          </Text>
        </Link>
      </Box>
    </Box>
  );
};

export default Login;
