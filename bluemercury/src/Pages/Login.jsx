import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import MainNavbar from "../Components/MainNavbar";
import {useDispatch, useSelector} from "react-redux";
import { useLocation } from "react-router-dom";
// import { userLogin } from "../Redux/AuthReducer/action";


const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
//     const location= useLocation();

// const lastLocation = location.state?.from?.pathname || '/';
  
    const navigate = useNavigate();
    const dispatch =  useDispatch();
    // const isAuth = useSelector((store)=> store.AuthReducer.isAuth );

    const handleLogin = async () =>{
        if(email, pass){
            const payload = {
               Email: email,
                 Password: pass
            }
            await fetch("https://bluemercury-backend.vercel.app/user/login", {
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
            .then((err)=> console.log(err));
            alert("Login SuccessFull")
            navigate("/")
        }
        else{
            console.log("All Fields are required")
            alert("WRONG INPUT")
        }
    }
   
    // const handleLogin = ()=> {
    //  if(email && pass){
    //    const payload ={
    //      Email:email, 
    //      Password:pass
    //    }
    //    dispatch(userLogin(payload))
    //    .then((res)=> {
    //     alert("Login Success")
    //   navigate('/')
         
    // })
      
    //  }
       
    // }
    // console.log(isAuth);

    return (
      <Stack w="100%">
      <MainNavbar/>
    <Box>
<Box
        h="35px"
        bg="rgb(215,235,242)"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="none"
        mt={{lg:'32'}}
        textAlign="center"
        // color={"rgb(96,111,135)"}
        color={"black"}
        fontSize="0.3rem" letterSpacing={"1px"}
      >
<div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <Text
          fontFamily="Montserrat Medium,sans-serif"
          fontSize="10px"
          color="gray"
          fontWeight="500"
          letterSpacing="-10%"
        >FREE SHIPPING FOR BLUEREWARDS MEMBER</Text> 
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <Text
          fontFamily="Montserrat Medium,sans-serif"
          fontSize="10px"
          color="gray"
          fontWeight="500"
          letterSpacing="-10%"
        > FREE GIFTS WITH PURCHASE. BROWSE NOW  </Text> 
    </div>
    <div class="carousel-item">
    <Text
          fontFamily="Montserrat Medium,sans-serif"
          fontSize="10px"
          color="gray"
          fontWeight="500"
          letterSpacing="-10%"
        > FREE SAMPLES WITH ALL ORDERS</Text>
    </div>
  </div>
</div>
      </Box>


   
    <Box
      w={{ base: "90%", sm: "90%", lg: "35%" }}
position='absolute'
    ml={{base:"5%", sm:"5%", lg:"32.5%"}}  mt="10"
    
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
    <Box position='absolute' mt='550px' w='100%'>
      <Footer/>
    </Box>
    </Box>
    </Stack>
  );
};

export default Login;
