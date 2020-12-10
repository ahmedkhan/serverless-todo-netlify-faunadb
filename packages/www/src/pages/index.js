import React, { useContext } from "react";
import { Heading, Button, Flex } from "theme-ui";
import PageLayout from "../pageLayout/pageLayout.js";
import { identityContext } from "../context/authContext";



export default props => {
    const { user, identity } = useContext(identityContext);

    return (
        <PageLayout>
            <Heading as="h1">Todo App</Heading>
            <Flex sx={{ flexDirection: "row" }}>
            {
                !user ?(
                   <Heading as="h3">Login Click Here.. </Heading> 
                ):(
                  <Heading as="h3">Wellcome: {user.user_metadata.full_name}</Heading>
                )
            }

                
            </Flex>
            <Flex sx={{ flexDirection: "column", padding: 3 }}>
                {!user ? (
                    <Button
                        onClick={() => {
                            identity.open()
                        }}
                    >
                        Login
                    </Button>
                ) : (
                        <Button
                            onClick={() => {
                                identity.logout()
                            }}
                        >
                            Logout
                        </Button>
                    )}
            </Flex>
            <ul>
                <li>Easy to use</li>
                <li>User friendly interface</li>
                <li>Cloud storage</li>
                <li>No hidden charges</li>
            </ul>
        </PageLayout>


    )
};

