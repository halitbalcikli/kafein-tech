import React from 'react'
import './App.css';
import TodoList from './components/TodoList'
import Container from '@material-ui/core/Container';


function App() {
  return (
    <div className="App">
      <Container maxWidth="md">
          <h1 className={"todo-list-header"}>ToDo List</h1>
          <TodoList />
      </Container>
    </div>
  );
}

export default App;
