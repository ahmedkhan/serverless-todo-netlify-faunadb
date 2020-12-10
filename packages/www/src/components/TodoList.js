import React, { useContext, useRef, useEffect } from "react";
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
    const [addTodo] = useMutation(ADD_TODO);
    const [updateTodoDone] = useMutation(UPDATE_TODO_DONE);
    const { loading, error, data, refetch } = useQuery(GET_TODOS,{fetchPolicy:"cache-first"});
    const { user, identity } = useContext(identityContext);
    const inputRef = useRef();
    console.log(data)

    useEffect(() => {
        async function fetchData() {
            await refetch();
        }

        fetchData()

    }, [user])
 
    return (
        !!user ? (
            <Container>
                <h2>{user.user_metadata.full_name}'s Notebook</h2>
                <Flex as="form"
                    onSubmit={async e=>{
                      e.preventDefault();
                     await addTodo({variables:{text:inputRef.current.value}})                      
                      inputRef.current.value="";
                     await refetch();
                    }}
                >
                    <Label sx={{ display: "flex" }}>
                        <span>ADD&nbsp;TODO</span>
                        <Input ref={inputRef} sx={{ marginLeft: 1 }} />
                    </Label>
                    <Button sx={{ marginLeft: 1 }}>Submit</Button>
                </Flex>
                <Flex sx={{ flexDirection: "column" }}>
                    {loading ? <div>Loading...</div> : null}
                    {error ? <div>{error.message}</div> : null}
                    {!loading && !error && (
                        <ul sx={{ listStyleType: "none" }}>
                            {
                                data.todos.map(todo => (
                                    <Flex key={todo.id}
                                        as="li"
                                        onClick={async () => {
                                            await updateTodoDone({ variables: { id: todo.id } });
                                            await refetch();
                                        }}>
                                        <Checkbox checked={todo.done} readOnly={true} />
                                        <span >{todo.text}</span>
                                    </Flex>
                                ))
                            }
                        </ul>
                    )}
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
