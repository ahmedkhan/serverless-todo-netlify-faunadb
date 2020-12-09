import React, { useContext } from "react" ;
import { Container, Heading, Button, Flex, NavLink } from "theme-ui";
import { Link } from 'gatsby';


export default ({children}) => {

     const user = ""
    
    return(
      <div>
        <Flex as='nav'>
                <NavLink as={Link} to='/' p={2}>
                    Home
                </NavLink>
                <NavLink as={Link} to={"/dashboard"} p={2}>
                    DashBoard
                </NavLink>
                 {
                     user && (
                         <NavLink href='#!' p={2}>
                          {user}
                        </NavLink>
                     )
                 }
                
            </Flex>

            <Container fluid>{children}</Container>
      </div>
    )

}