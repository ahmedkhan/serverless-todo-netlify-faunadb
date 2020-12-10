import React, { useContext, useRef, useState, useEffect } from "react";
import { Container, Checkbox, Button, Flex, Input, Label } from "theme-ui";
import { useQuery, gql, useMutation } from '@apollo/client';
import { identityContext } from "../context/authContext";

const ADD_TODO = gql`
  mutation AddTodo($text:String!){
    addTodo(text:$text){
      id
    }
  }
`;
 
const UPDATE_TODO_DONE = gql`
  mutation UpdateTodoDone($id:ID!){
    updateTodoDone(id:$id){
      text
      done
    }
  }
`;

const GET_TODOS = gql`
 query GetTodos{
  todos{
    id
    text
    done
  }
 }
`;


export default props => {
    const { user, identity } = useContext(identityContext);
    const inputRef = useRef();

    useEffect(() => {
        async function fetchData() {
        }

        fetchData()

    }, [user])

    return (
        !!user ? (
            <Container>
                <h2>{user.user_metadata.full_name}'s Notebook</h2>
                <Flex as="form"
                    onSubmit={async e => {
                        e.preventDefault();
                        alert("done");
                    }}
                >
                    <Label sx={{ display: "flex" }}>
                        <span>ADD&nbsp;TODO</span>
                        <Input ref={inputRef} sx={{ marginLeft: 1 }} />
                    </Label>
                    <Button sx={{ marginLeft: 1 }}>Submit</Button>
                </Flex>
                <Flex sx={{flexDirection:"column"}}>
                  
                </Flex>
            </Container>


        ) : (


                <Container>
                    <Flex sx={{ flexDirection: "column", padding: 3 }}>
                        <h4>Please Login to view your dashboard</h4>
                        <Button onClick={() => { identity.open() }}>
                            Login
                    </Button>
                    </Flex>
                </Container>
            )
    )
};
