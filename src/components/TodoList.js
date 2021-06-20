import React, {useEffect, useState} from 'react';
import TodoElements from './TodoElements';
import Todo from "./Todo";
import '../server/server'

function TodoList() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('/api/todos')
            .then(res => res.json())
            .then(json => setTodos(json.todos))
            .catch(err => console.err(err))
    }, [])

    const addTodo = async (todo) => {
        if (!todo.text) {
            return
        }

        try {
            const response = await fetch('/api/todos', {method: "POST", body: JSON.stringify(todo)})
            const json = await response.json();

            setTodos([...todos, json.todo])
        } catch (err) {
            console.log("err", err)
        }
    }

    const removeTodo = async (id) => {
        try {
            await fetch(`/api/todos/${id}`, {method: "DELETE"})

            setTodos(todos.filter(todo => todo.id !== id));
        } catch (err) {
            console.log("err", err)
        }
    }

    const completeTodo = (event, id) => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo;
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <TodoElements onSubmit={addTodo}/>
            <Todo todos={todos}
                  completeTodo={completeTodo}
                  removeTodo={removeTodo}
            />
        </div>
    )
}

export default TodoList;
