import React from "react";
import { Container, Heading, Button, Flex, NavLink } from "theme-ui";
import PageLayout from "../pageLayout/pageLayout";
import { Link } from 'gatsby';


export default props => {
    return (
        <PageLayout>
            <Heading as="h1">Todo App</Heading>
            <ul>
                <li>Easy to use</li>
                <li>User friendly interface</li>
                <li>Cloud storage</li>
                <li>No hidden charges</li>
            </ul>
        </PageLayout>


    )
};

