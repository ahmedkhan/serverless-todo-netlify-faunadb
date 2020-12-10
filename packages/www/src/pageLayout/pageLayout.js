import React from "react" ;
import { Container,Flex, NavLink } from "theme-ui";
import { Link } from 'gatsby';
import { identityContext } from "../context/authContext"

 

export default ({children}) => { 
    return(
      <div>
        <Flex as='nav'>
                <NavLink as={Link} to='/' p={2}>
                    Home
                </NavLink>
                <NavLink as={Link} to={"/dashboard"} p={2}>
                    DashBoard
                </NavLink>       
                
            </Flex>
            <Container>{children}</Container>
      </div>
    )

};



