import React from "react";
import PageLayout from "../pageLayout/pageLayout";
import { Router } from "@reach/router";
import TodoList from "../components/TodoList";

export default props =>{
    
    return(
      <PageLayout>
       <Router>
         <TodoList path="/dashboard"/>         
       </Router>
      </PageLayout>
    )
};

