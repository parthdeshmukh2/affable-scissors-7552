import React, { useState } from 'react'
import { Text,Flex,Button ,Box,Stack,Input} from '@chakra-ui/react'
import { SearchIcon} from '@chakra-ui/icons'
import "../Styles/wishlist.css"



const My_Purchases = () => {
    const [ui, setUi] = useState(true);
    const [fed, setFed] = useState(false);
    const [activeUiBar, setActiveUiBar] = useState("active");
    const [activeFedBar, setActiveFedBar] = useState("");


    
  function activeUi() {
    setUi(true);
    setFed(false);
    setActiveUiBar("active");
    setActiveFedBar("");
  }
  function activeFed() {
    setUi(false);
    setFed(true);
    setActiveUiBar("");
    setActiveFedBar("active");
  }

  return (
    <Flex direction={"column"} textAlign="left"  w="70%" gap="20px" mt={["25px", "25px" ,"0px" ]} >
    <Text fontSize='md' >My Account > My Purchases</Text>
    <Text fontSize='3xl' mt="-20px">MY PURCHASES</Text>
     <div className="skills-section">
        <div className="skills-section-bars">
          <span
            className={`${activeUiBar}`   }
            id="spanui"
            onClick={() => activeUi()}
          >
            <b>YOUR ORDERS</b>
          </span>
          <span
            className={`${activeFedBar}`}
            id="spanfed"
            onClick={() => activeFed()}
          >
<b>         BUY AGAIN</b>
          </span>
        </div>

        {ui ? (
          <div className="skills-section-content">
            
            <div className="text">
                <div>
            <Input w="[450px,500px,600px]" variant='outline' color={"black"} placeholder='Filled' placeholder="Search All Orders"/>
<SearchIcon ml="-30px" /></div>
<Box display={["none","none","flex"]}>
<div class="dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{"background":"white","width":"130px","color":"black","textAlign":"left","marginLeft":"20px", "color":"rgb(139,150,167)"}}  >
  Most recent
  </button>
  <ul class="dropdown-menu" style={{"background":"white","width":"300px"}} >
    <li><a class="dropdown-item active" href="#" >Most recent</a></li>
    <li><a class="dropdown-item" href="#">Oldest</a></li>
    <li><a class="dropdown-item" href="#">Highest Total</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Lowest Total</a></li>
  </ul>
</div>
</Box>
            </div>
         <Text  color="rgb(139,150,167)">   No relevant orders found. </Text>
          </div>
        ) : (
          <div className="skills-section-content">
            <div className="text">
              <h3>  There are no products to buy again.</h3>
            </div>
          </div>
        )}
      </div>
    
    </Flex>
  )
}

export default My_Purchases